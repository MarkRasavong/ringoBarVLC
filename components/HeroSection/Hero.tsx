import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ringoBarLogo from '../../public/pizzeria_ringo.png'
import { ButtonLrg } from '../Button/Button.styled'
import { GlassBox, HeroSection } from './Hero.styled'
import pizzabox from '../../public/icon-pizza-box.svg'
import { MdMenuBook } from 'react-icons/md'

const Hero = () => {
	return (
		<HeroSection id="hero">
			<GlassBox>
				<div className="heroImageWrpr">
					<Image src={ringoBarLogo} alt="Ringo Bar Logo in Valencia" />
				</div>
				<h1>La Auténtica Pizzería Italiana en Valencia</h1>
				<div className="btnsWrpr">
					<Link href="/carta" passHref>
						<ButtonLrg>
							<div className="icnWrpr">
								<MdMenuBook />
							</div>
							Ver Carta
						</ButtonLrg>
					</Link>

					<Link href="/hacer-pedido" passHref>
						<ButtonLrg>
							<div className="icnWrpr">
								<Image src={pizzabox} alt="pizza box icon" />
							</div>
							Hacer Pedido
						</ButtonLrg>
					</Link>
				</div>
			</GlassBox>
			<div className="heroVideoBkg">
				<video
					loop={true}
					autoPlay={true}
					muted={true}
					playsInline
					src="/pexels-denys-gromov-6176588.mp4"
				/>
			</div>
		</HeroSection>
	)
}

export default Hero
