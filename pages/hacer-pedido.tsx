import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { MdPhoneInTalk } from 'react-icons/md'
import { ButtonLrg } from '../components/Button/Button.styled'
import MetaHeader from '../components/MetaHeader'
import {
	ColorOverlay,
	OrderContainer,
} from '../components/OrderPage/Order.styled'

const Order: NextPage = () => {
	return (
		<>
			<MetaHeader
				title="Hacer Pedido - Ringo Bar VLC"
				description="Opciones para hacer a domicillo"
			/>
			<OrderContainer>
				<ColorOverlay />
				<div className="btnContainer">
					<h1>Hacer Pedido</h1>
					<ButtonLrg>
						<a href="tel:+34-624-41-45-18" target="_blank" rel="noreferrer">
							<MdPhoneInTalk style={{ marginRight: '0.5em' }} size="1em" />
							Llamar al 624 41 45 18
						</a>
					</ButtonLrg>

					<a
						href="https://www.just-eat.es/restaurants-ringo-bar-valencia/menu"
						target="_blank"
						rel="noreferrer"
					>
						<ButtonLrg>
							<img
								src="/just-eat-logo.png"
								alt="Just Eat Logo"
								className="buttonSticker"
							/>
							<p>Just Eat</p>
						</ButtonLrg>
					</a>

					<a
						href="https://glovoapp.com/es/es/valencia/ringo-bar-valencia/"
						target="_blank"
						rel="noreferrer"
					>
						<ButtonLrg>
							<img
								src="/glovo.png"
								alt="Glovo Logo"
								className="buttonSticker"
							/>
							<p>Glovo</p>
						</ButtonLrg>
					</a>

					<Link passHref href="/order">
						<ButtonLrg>Pedir directamente en línea</ButtonLrg>
					</Link>
				</div>
			</OrderContainer>
		</>
	)
}

export default Order
