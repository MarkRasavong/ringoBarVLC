import styled from 'styled-components'

export const HeroSection = styled.section`
	position: relative;
	display: flex;
	justify-content: center;
	height: 49em;

	h1 {
		font-size: 1.6rem;
		color: ${({ theme }) => theme.color.ringoRed};
	}

	.heroImageWrpr {
		width: 80%;
		margin-bottom: 2em;
	}

	.icnWrpr {
		margin-top: 0.3em;
		margin-right: 0.4em;
	}

	.btnsWrpr {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	button {
		display: flex;
		width: 100%;
	}

	.heroVideoBkg {
		z-index: -2;
		position: absolute;
		top: -4.5em;
		max-height: 550px;
		width: 100%;
	}

	.heroVideoBkg video {
		width: 100%;
		height: 54em;
		object-fit: cover;
		min-height: 550px;
	}

	@media (min-width: 901px) {
		h1 {
			font-size: 3rem;
			color: ${({ theme }) => theme.color.ringoRed};
		}

		.btnsWrpr {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: row;
		}

		button {
			width: 35%;
		}

		button:nth-child(1) {
			margin-right: 5em;
		}
		.heroImageWrpr {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`

export const GlassBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1em;

	background: rgba(255, 255, 255, 0.4);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	@media (min-width: 901px) {
		padding: 3em;
	}
`
