import styled from 'styled-components'

export const HorariosSection = styled.section`
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.color.ringoRed};
	color: white;

	h3 {
		font-size: 2.5rem;
	}
`
export const HorariosGrid = styled.div`
	display: grid;
	grid-template-columns: auto 10%;
	grid-row-gap: 0.6em;
	justify-content: center;
	align-items: center;

	margin-top: 1em;

	p {
		font-size: 1.2em;
	}
`
