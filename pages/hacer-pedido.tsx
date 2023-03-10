import { NextPage } from 'next'
import React from 'react'
import MetaHeader from '../components/MetaHeader'
import OrderCategoryCard from '../components/OrderCategoryCard/OrderCategoryCard'
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
					<OrderCategoryCard />
					<OrderCategoryCard />
				</div>
			</OrderContainer>
		</>
	)
}

export default Order
