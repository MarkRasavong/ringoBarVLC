import styled from 'styled-components'

export const HeroSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 2rem;
		color: ${({ theme }) => theme.color.ringoRed};
	}

	.heroImageWrpr {
		margin-top: 2em;
		width: 70%;
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
			width: 15%;
		}

		button:nth-child(1) {
			margin-right: 1em;
		}
		.heroImageWrpr {
			width: 20%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`
