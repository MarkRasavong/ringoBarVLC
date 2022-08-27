import QRCode from 'qrcode.react'
import React from 'react'
import { useTheme } from 'styled-components'
import { StyledRingoTheme } from '../styles/theme'

const Qr = () => {
	const theme = useTheme() as StyledRingoTheme

	const pageStyles = {
		display: 'flex',
		width: '100%',
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		minHeight: '86vh',
	}

	const titleStyles = {
		color: theme.color.ringoRed,
		marginBottom: '1em',
		marginTop: '1em',
	}

	return (
		<div style={pageStyles}>
			<h1 style={titleStyles}>RINGO QR</h1>
			<div>
				<QRCode value="https://www.ringopizzeria.com/carta" size={300} />
			</div>
		</div>
	)
}

export default Qr
