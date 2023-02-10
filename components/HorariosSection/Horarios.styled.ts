import styled from 'styled-components'

export const HorariosGrid = styled.div`
	display: -ms-grid;
	display: grid;
	-ms-grid-columns: auto 60%;
	grid-template-columns: auto 60%;
	grid-row-gap: 0.6em;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	padding-top: 2em;
	margin-left: 15%;

	p {
		font-size: 1.2em;
	}

	@media (min-width: 901px) {
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		margin-left: 20%;
		padding-bottom: 4em;
	}
`
