import styled from 'styled-components'

export const AccordionContainer = styled.div`
	width: 100%;
	max-width: 80rem;
	margin: 0 auto;
	padding: 0 1.5em;
`

export const AccordionItem = styled.div`
	background-color: ${({ theme }) => theme.color.ringoRed};
	border-radius: 0.4em;
	margin-bottom: 1em;
	padding: 1rem;
	box-shadow: 0.5em 2px 0.5em rgba(0, 0, 0, 0.1);

	:target .toReveal {
		max-height: 20em;
	}

	:target a.accordionTitle span.arrowUp {
		display: none;
	}

	:target a.accordionTitle span.arrowDown {
		display: block;
	}
`

export const AccordionTitle = styled.a`
	font-size: 1.6em;
	color: ${({ theme }) => theme.color.ringoWhite};
	background-color: ${({ theme }) => theme.color.ringoRed};
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em 0;
`

export const AccordionContent = styled.div`
	max-height: 0;
	overflow: hidden;
	position: relative;
	transition: max-height 650ms;

	::before {
		position: absolute;
		width: 0.6em;
		height: 90%;
		top: 50%;
		left: 0;
		transform: translateY(-50%);
	}

	p {
		color: rgba(255, 255, 255, 0.6);
		font-size: 1.4em;
		padding: 2em;
	}
`

export const ArrowControls = styled.div`
	color: ${({ theme }) => theme.color.ringoWhite};
	padding: 0.5em;

	span.arrowDown {
		display: none;
	}
`
