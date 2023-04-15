import Script from 'next/script'
import React from 'react'

const Order = () => {
	return (
		<div style={{ minHeight: '100vh' }}>
			<Script
				id="flipdish-script"
				type="text/javascript"
				charSet="UTF-8"
				src="https://web-order.flipdish.co/client/productionwlbuild/latest/static/js/main.js"
			></Script>
			<div
				id="flipdish-menu"
				data-initial-screen="menu"
				data-full-screen-on-mobile="false"
				data-offset="100"
				data-restaurant="fd25971"
			></div>
		</div>
	)
}

export default Order
