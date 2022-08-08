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
	const { menuItems } = props
	return (
		<>
			<MetaHeader
				title="Carta - Ringo Bar VLC"
				description="La carta de Ringo Bar Pizzería"
			/>
			<MenuContainer>
				<h1>Ringo Carta</h1>
				<SubtitleCartaText>
					Pedidos para llevar, domicilio y reserva de mesas al 624.41.45.18
					<br></br>
					Glovo y Just Eat disponible - Horario de 19:30 a 00:45 (Los Martes
					cerrado)
					<br></br>
					Síguenos en Instagram: ringobar_
				</SubtitleCartaText>
				<AccordionContainer>
					{menuItems.map(({ title, data }: ApiMenuItems) => (
						<AccordionCard
							categoryTitle={title}
							data={data}
							key={`carta_${title}`}
						/>
					))}
				</AccordionContainer>
			</MenuContainer>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const pizzas = { title: 'pizzas', data: await tableData('pizzas') }
	const bocadillos = {
		title: 'bocadillos',
		data: await tableData('bocadillos'),
	}
	const postres = { title: 'postres', data: await tableData('postres') }
	const extras = { title: 'extras', data: await tableData('extras') }
	const pastas = { title: 'pastas', data: await tableData('pastas') }
	const paraCompartir = {
		title: 'para compartir',
		data: await tableData('para compartir'),
	}
	const bebidas = { title: 'bebidas', data: await tableData('bebidas') }
	const desayunos = { title: 'desayunos', data: await tableData('desayunos') }
	const almuerzos = { title: 'almuerzos', data: await tableData('almuerzos') }
	const promos = { title: 'promos', data: await tableData('promos') }

	return {
		props: {
			menuItems: [
				pizzas,
				bocadillos,
				pastas,
				paraCompartir,
				bebidas,
				postres,
				extras,
				desayunos,
				almuerzos,
				promos,
			],
		},
	}
}

export default carta
