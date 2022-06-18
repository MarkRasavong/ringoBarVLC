import styled from 'styled-components'

export const RedSection = styled.section`
	width: 100%;
	text-align: center;
	background-color: ${({ theme }) => theme.color.ringoRed};
	color: white;

	h3 {
		font-size: 2.5rem;
	}
`
