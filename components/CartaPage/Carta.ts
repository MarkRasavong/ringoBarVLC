import styled from 'styled-components'

export const MenuContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 41em;
	h1 {
		font-size: 4rem;
		margin-top: 1em;
		color: ${({ theme }) => theme.color.ringoRed};
	}
`
