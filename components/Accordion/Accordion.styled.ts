import styled from 'styled-components'

export const AccordionContainer = styled.div`
	width: 100%;
	max-width: 80rem;
	margin: 1em auto;
	padding: 0 1.5em;
`

export const AccordionItem = styled.div`
	background-color: ${({ theme }) => theme.color.ringoRed};
	border-radius: 0.4em;
	margin-bottom: 1em;
	padding: 1rem;
	-webkit-box-shadow: 0.5em 2px 0.5em rgba(0, 0, 0, 0.1);
	box-shadow: 0.5em 2px 0.5em rgba(0, 0, 0, 0.1);
`

export const AccordionTitle = styled.a`
	font-size: 1.5em;
	font-family: ${({ theme }) => theme.fonts[2]};
	color: ${({ theme }) => theme.color.ringoWhite};
	background-color: ${({ theme }) => theme.color.ringoRed};
	width: 100%;
	text-transform: uppercase;

	display: -webkit-box;

	display: -ms-flexbox;

	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	padding: 1em 0;
`

export const AccordionContent = styled.div`
	margin-left: 0.5em;
	max-height: 0;
	overflow: hidden;
	position: relative;
	-webkit-transition: max-height 650ms;
	-o-transition: max-height 650ms;
	transition: max-height 650ms;

	::before {
		position: absolute;
		width: 0.6em;
		height: 90%;
		top: 50%;
		left: 0;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.2em;
		padding: 2em;
	}
`

export const ArrowControls = styled.div`
	color: ${({ theme }) => theme.color.ringoWhite};
	padding: 0.5em;
`

export const AccordionContentTitle = styled.div`
	color: ${({ theme }) => theme.color.ringoWhite};
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	h3 {
		font-size: 1.6em;
	}
`

export const AccordionContentDescription = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: start;
	-ms-flex-pack: start;
	justify-content: flex-start;
	margin-left: 1em;
`
