import styled from 'styled-components'

export const MenuContainer = styled.div`
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
