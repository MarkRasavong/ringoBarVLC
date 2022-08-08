import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Hero from '../components/HeroSection/Hero'
import React, { Fragment } from 'react'
import Contact from '../components/ContactSection/Contact'
import {
	GaleriaGridWrpr,
	GaleriaSection,
} from '../components/GaleriaSection/Galeria.styled'
import { tableData } from '../lib/airtable'
import { HorariosGrid } from '../components/HorariosSection/Horarios.styled'
import { RedSection } from '../components/Sections/Sections.styled'

interface HorariosInterface {
	id: string
	order: number
	horas: string
	dia: string
}

interface InstaInterface {
	id: string
	caption?: string
	media_type: string
	media_url: string
	timestamp: string
	permalink: string
}

const Home: NextPage = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const imagins: InstaInterface[] = props.instadata.data
		.filter(
			(img: { media_type: string }) =>
				img.media_type === 'IMAGE' || img.media_type === 'CAROUSEL_ALBUM'
		)
		.slice(0, 9)
	const horarios: HorariosInterface[] = props.horarios

	console.log(imagins)

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
			{/* GALERIA => INSTAGRAM/META API */}
			<GaleriaSection id="galeria">
				<h1>Galería</h1>
				<GaleriaGridWrpr>
					{imagins &&
						imagins.map((imagin) => (
							<div key={imagin.id}>
								<a
									href={imagin.permalink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={imagin.media_url} alt={imagin.caption} />
								</a>
							</div>
						))}
				</GaleriaGridWrpr>
			</GaleriaSection>
			{/* Contact */}
			<Contact />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTA_RINGO_TOKEN}`
	const fetchData = await fetch(url)
	const data = await fetchData.json()
	const horas = await tableData('hours')

	return {
		props: {
			instadata: data,
			horarios: horas,
		},
	}
}

export default Home
