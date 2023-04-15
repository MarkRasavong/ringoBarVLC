import Script from 'next/script'
import React from 'react'

const Order = () => {
	return (
		<div>
			<div id="flipdish-menu" data-offset="0" data-restaurant="fd25971"></div>
			<Script
				id="flipdish-script"
				type="text/javascript"
				charSet="UTF-8"
				src="https://web-order.flipdish.co/client/productionwlbuild/latest/static/js/main.js"
			></Script>
		</div>
	)
}

export default Order
