import styled from 'styled-components'

export const HeroSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 2em;
	margin-bottom: 2em;

	h1 {
		font-size: 2rem;
		color: ${({ theme }) => theme.color.ringoRed};
	}

	.heroImageWrpr {
		width: 70%;
		margin-bottom: 2em;
	}

	.icnWrpr {
		margin-top: 0.3em;
		margin-right: 0.5em;
	}

	.btnsWrpr {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
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

		button:nth-child(1) {
			margin-right: 1em;
		}
		.heroImageWrpr {
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`
