import styled from 'styled-components'

export const GaleriaSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 100%;
	margin-top: 1em;

	h1 {
		font-size: 2.5rem;
		color: ${({ theme }) => theme.color.ringoRed};
	}
`

export const GaleriaGridWrpr = styled.div`
	display: flex;
	flex-direction: column;

	div {
		width: 100%;
		margin-bottom: 1em;
	}

	div img {
		object-fit: cover;
		height: 300px;
		width: 300px;
	}

	@media (min-width: 901px) {
		display: grid;
		grid-template-columns: repeat(3, 300px);
		grid-template-rows: repeat(3, 300px);
		grid-gap: 1em;
		margin-top: 1em;

		div {
			display: flex;
			background-color: pink;
			justify-content: center;
			align-items: center;
		}

		div img {
			object-fit: cover;
			height: 300px;
			width: 300px;
		}
	}

	@media (max-width: 901px) {
		div:nth-of-type(n + 5) {
			display: none;
		}
	}
`
