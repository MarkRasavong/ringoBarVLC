import styled from 'styled-components'

export const ButtonLrg = styled.button`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${({ theme }) => theme.color.ringoRed};
	color: ${({ theme }) => theme.color.ringoWhite};
	width: 50%;
	height: 3em;
	font-size: 1.1em;
	font-family: ${({ theme }) => theme.fonts[0]};
	text-transform: uppercase;

	border: none;
	-webkit-box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
		0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
	box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
		0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
	border-radius: 0.5rem;

	:hover {
		background-color: ${({ theme }) => theme.color.ringoRedHoverDark};
	}

	:nth-child(n + 1) {
		margin-top: 1em;
	}

	@media (min-width: 901px) {
		width: 20%;
	}
`
