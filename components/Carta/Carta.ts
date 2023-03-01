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
		text-align: center;
		font-size: 4rem;
		margin-top: 1em;
		color: ${({ theme }) => theme.color.ringoRed};
	}
`

export const SubtitleCartaText = styled.div`
	width: 80%;
	text-align: center;
	font-weight: 500;
	font-size: 3em;
	font-family: ${({ theme }) => theme.fonts[2]};

	@media (max-width: 990px) {
		font-size: 1.75em;
	}
`

export const LanguageSelectorContainer = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	width: 80%;
	margin-top: 1rem;

	@media (min-width: 1525px) {
		justify-content: center;
	}

	label {
		font-size: 1.5rem;

		:nth-child(1) {
			margin-right: 1.5rem;
		}
	}

	input[type='radio'] {
		transform: scale(1.5);
		margin-right: 0.5rem;
	}
`
export const CartaPinchaBtn = styled.button`
	width: 80%;
	margin-bottom: 1rem;
	margin-left: 1rem;
	padding: 0.5rem;

	font-size: 1.5rem;

	cursor: pointer;
	background-color: ${({ theme }) => theme.color.ringoRed};
	color: ${({ theme }) => theme.color.ringoWhite};
	font-family: ${({ theme }) => theme.fonts[0]};

	border: none;
	-webkit-box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
		0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
	box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
		0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
	border-radius: 0.5rem;

	:hover {
		background-color: ${({ theme }) => theme.color.ringoRedHoverDark};
	}
`
export const CartaMenuDiv = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
