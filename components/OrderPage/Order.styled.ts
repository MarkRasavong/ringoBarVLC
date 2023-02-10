import styled from 'styled-components'

export const OrderContainer = styled.div`
	background: #000 url(/pexels-koolshooters-7142953.webp);
	background-repeat: no-repeat;
	background-size: cover;
	color: ${({ theme }) => theme.color.ringoWhite};
	height: 86vh;
	width: 100%;
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;

	h1 {
		font-size: 3rem;
		margin-top: 2em;
		z-index: 1;
	}

	div.btnContainer {
		z-index: 1;
	}

	button {
		width: 100%;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.buttonSticker {
		height: 40px;
		margin: 2px;
	}
`

export const ColorOverlay = styled.div`
	margin-top: -4em;
	width: 100%;
	height: 100vh;
	background: #000;
	opacity: 0.7;
	position: absolute;
`
