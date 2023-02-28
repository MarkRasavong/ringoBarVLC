import React from 'react'
import AccordionCard from '../components/Accordion/AccordionCard'
import { AccordionContainer } from '../components/Accordion/Accordion.styled'
import { MenuContainer, SubtitleCartaText } from '../components/Carta/Carta'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { tableData } from '../lib/airtable'
import MetaHeader from '../components/MetaHeader'

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

const carta = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { english, castellano } = props

	return (
		<>
			<MetaHeader
				title="Carta - Ringo Bar VLC"
				description="La carta de Ringo Bar Pizzería"
			/>
			<MenuContainer>
				<h1>Ringo Carta</h1>
				<SubtitleCartaText>
					🚚 Pedidos para llevar, domicilio y reserva de mesas al 624414518
					<br></br>
					🍕 Glovo y Just Eat disponible - Horario de 19:00 a 23:00 (Los Martes
					cerrado)
					<br></br>
					📷 Síguenos en Instagram: ringobar_
				</SubtitleCartaText>
				<AccordionContainer>
					{castellano.map(({ title, data }: ApiMenuItems) => (
						<AccordionCard
							categoryTitle={title}
							data={data}
							key={`carta_ESP_${title}.${Math.random() * 100}`}
						/>
					))}
					{english.map(({ title, data }: ApiMenuItems) => (
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

export default carta
