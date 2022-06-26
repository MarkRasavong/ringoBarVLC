import styled from 'styled-components'

export const HorariosGrid = styled.div`
	display: grid;
	grid-template-columns: auto 60%;
	grid-row-gap: 0.6em;
	justify-content: center;
	align-items: center;
	padding-top: 2em;
	margin-left: 15%;

	p {
		font-size: 1.2em;
	}

	@media (min-width: 901px) {
		justify-content: center;
		margin-left: 20%;
		padding-bottom: 4em;
	}
`
