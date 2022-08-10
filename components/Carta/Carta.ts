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

export const SubtitleCartaText = styled.div`
	text-align: center;
	font-weight: 500;
	font-size: 3em;
	font-family: ${({ theme }) => theme.fonts[2]};

	@media (max-width: 990px) {
		font-size: 2em;
	}
`
