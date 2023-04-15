import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Hero from '../components/HeroSection/Hero'
import React, { Fragment } from 'react'
import Contact from '../components/ContactSection/Contact'
import { tableData } from '../lib/airtable'
import { HorariosGrid } from '../components/HorariosSection/Horarios.styled'
import { RedSection } from '../components/Sections/Sections.styled'

interface HorariosInterface {
	id: string
	order: number
	horas: string
	dia: string
}

const Home: NextPage = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const horarios: HorariosInterface[] = props.horarios

	return (
		<>
			{/* IMPLEMENT SECTION PADDING FOR ALL */}
			<Hero />
			{/* Hours */}
			<RedSection id="horarios">
				<h3>Horarios</h3>
				<HorariosGrid>
					{horarios
						.sort((a, b) => a.order - b.order)
						.map((wrk) => (
							<Fragment key={wrk.id}>
								<div>
									<p>{wrk.dia}</p>
								</div>
								<div>
									<p>{wrk.horas}</p>
								</div>
							</Fragment>
						))}
				</HorariosGrid>
			</RedSection>
			{/* Contact */}
			<Contact />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const horas = await tableData('hours')

	return {
		props: {
			horarios: horas,
		},
	}
}

export default Home
