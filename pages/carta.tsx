import React, { useState } from 'react'
import AccordionCard from '../components/Accordion/AccordionCard'
import { AccordionContainer } from '../components/Accordion/Accordion.styled'
import {
	CartaMenuDiv,
	CartaPinchaBtn,
	LanguageSelectorContainer,
	MenuContainer,
	SubtitleCartaText,
} from '../components/Carta/Carta'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { tableData } from '../lib/airtable'
import MetaHeader from '../components/MetaHeader'
import Link from 'next/link'

export interface MenuItems {
	catName: string
	id: number
	name: string
	price?: string
	description?: string
}

export interface ApiMenuItems {
	title: string
	data: MenuItems[]
}

const Carta = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [language, setLanguage] = useState('🇪🇸')
	const { english, castellano } = props

	const handleLanguageChange = (e: {
		target: { value: React.SetStateAction<string> }
	}) => {
		setLanguage(e.target.value)
	}

	return (
		<>
			<MetaHeader
				title="Carta - Ringo Bar VLC"
				description="La carta de Ringo Bar Pizzería"
			/>
			<MenuContainer>
				<h1>Ringo Carta</h1>
				<CartaMenuDiv>
					<CartaPinchaBtn>
						<Link href={'https://www.ringopizzeria.com/#horarios'}>
							⏲ Horarios - Pincha Aquí
						</Link>
					</CartaPinchaBtn>
				</CartaMenuDiv>
				<SubtitleCartaText>
					🚚 Pedidos para llevar, domicilio y reserva de mesas al 624414518
					<br></br>
					🍕 Glovo y Just Eat disponible
					<br></br>
					📷 Síguenos en Instagram: ringobar_
				</SubtitleCartaText>
				<LanguageSelectorContainer>
					<label>
						<input
							type="radio"
							value="🇪🇸"
							checked={language === '🇪🇸'}
							onChange={handleLanguageChange}
						/>
						🇪🇸 Castellano
					</label>
					<label>
						<input
							type="radio"
							value="🇬🇧"
							checked={language === '🇬🇧'}
							onChange={handleLanguageChange}
						/>
						🇬🇧 English
					</label>
				</LanguageSelectorContainer>
				<AccordionContainer>
					{language === '🇪🇸'
						? castellano.map(({ title, data }: ApiMenuItems) => (
								<AccordionCard
									categoryTitle={title}
									data={data}
									key={`carta_ESP_${title}.${Math.random() * 100}`}
								/>
						  ))
						: english.map(({ title, data }: ApiMenuItems) => (
								<AccordionCard
									categoryTitle={title}
									data={data}
									key={`carta_ENG_${title}.${Math.random() * 100}`}
								/>
						  ))}
				</AccordionContainer>
			</MenuContainer>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	interface MenuItemFixEnglish {
		[key: string]: string
	}

	const castellanoData = await Promise.all(
		[
			'pizzas',
			'bocadillos',
			'postres',
			'extras',
			'pastas',
			'para compartir',
			'bebidas',
			'desayunos',
			'almuerzos',
			'promos',
		].map(async (menuItem) => ({
			title: menuItem,
			data: await tableData(menuItem),
		}))
	)
	const castellano = castellanoData.map((menuItem) => ({
		title: menuItem.title,
		data: menuItem.data,
	}))

	const menuItemFixEnglish: MenuItemFixEnglish = {
		ENG_pizzas: 'pizzas',
		ENG_panini: 'italian sandwiches // panini',
		ENG_Desserts: 'desserts & sweets',
		ENG_extras: 'extra toppings',
		ENG_drinks: 'drinks',
		ENG_appetizers: 'appetizers',
		ENG_specials: 'specials',
	}

	const airtableEnglishMenu = await Promise.all(
		Object.keys(menuItemFixEnglish).map(async (menuItem) => ({
			title: menuItem,
			data: await tableData(menuItem),
		}))
	)

	const english = airtableEnglishMenu.map((menuItem) => ({
		title: menuItemFixEnglish[menuItem.title],
		data: menuItem.data,
	}))

	return {
		props: {
			castellano,
			english,
		},
	}
}

export default Carta
