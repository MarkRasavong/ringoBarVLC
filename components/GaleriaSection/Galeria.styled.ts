import styled from 'styled-components'

export const GaleriaSection = styled.section`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
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
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;

	div {
		width: 100%;
		margin-bottom: 1em;
	}

	div img {
		-o-object-fit: cover;
		object-fit: cover;
		height: 300px;
		width: 300px;
	}

	@media (min-width: 901px) {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 300px 1em 300px 1em 300px;
		grid-template-columns: repeat(3, 300px);
		-ms-grid-rows: 300px 1em 300px 1em 300px;
		grid-template-rows: repeat(3, 300px);
		grid-gap: 1em;
		margin-top: 1em;
	}
	> *:nth-child(1) {
		-ms-grid-row: 1;
		-ms-grid-column: 1;
	}
	> *:nth-child(2) {
		-ms-grid-row: 1;
		-ms-grid-column: 3;
	}
	> *:nth-child(3) {
		-ms-grid-row: 1;
		-ms-grid-column: 5;
	}
	> *:nth-child(4) {
		-ms-grid-row: 3;
		-ms-grid-column: 1;
	}
	> *:nth-child(5) {
		-ms-grid-row: 3;
		-ms-grid-column: 3;
	}
	> *:nth-child(6) {
		-ms-grid-row: 3;
		-ms-grid-column: 5;
	}
	> *:nth-child(7) {
		-ms-grid-row: 5;
		-ms-grid-column: 1;
	}
	> *:nth-child(8) {
		-ms-grid-row: 5;
		-ms-grid-column: 3;
	}
	> *:nth-child(9) {
		-ms-grid-row: 5;
		-ms-grid-column: 5;
	}

	div {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		background-color: pink;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
	}

	div img {
		-o-object-fit: cover;
		object-fit: cover;
		height: 300px;
		width: 300px;
	}

	@media (max-width: 901px) {
		div:nth-of-type(n + 5) {
			display: none;
		}
	}
`
