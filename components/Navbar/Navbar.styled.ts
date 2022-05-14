import styled from 'styled-components'

export const NavbarContainer = styled.header`
	display: flex;
	background-color: ${({ theme }) => theme.color.ringoRed};
	width: 100%;
	height: 4em;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
		rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 1200px) {
		margin-right: auto;
		margin-left: auto;
	}
`

export const NavbarLogo = styled.div`
	padding: 10px 0 0 30px;

	a {
		font-family: ${({ theme }) => theme.fonts[1]};
		font-size: ${({ theme }) => theme.fontSize.medium};
		color: ${({ theme }) => theme.color.ringoWhite};
		margin: 0;
		font-weight: normal;
	}

	//mobile devices
	@media (max-width: 767px) {
		display: flex;
		flex-grow: 1;
	}

	//tablet devices
	@media (min-width: 768px) and (max-width: 990px) {
		display: flex;
		flex-grow: 1;
	}

	@media (min-width: 1200px) {
		margin-left: auto;
	}
`
export const NavLinks = styled.div`
	display: flex;
	width: 80%;
	justify-content: space-evenly;
	color: ${({ theme }) => theme.color.ringoWhite};

	h3 {
		cursor: pointer;
		display: block;
	}

	//mobile devices
	@media (max-width: 767px) {
		display: none;
	}

	//tablet
	@media (min-width: 768px) and (max-width: 990px) {
		display: none;
	}

	@media (min-width: 1200px) {
		width: 35%;
	}
`

export const SocialNavLinks = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0.2em;
	margin-right: 1em;
	width: auto;

	button {
		border: none;
		background-color: inherit;
		border-radius: 100%;
		padding: 0.8em;
		cursor: pointer;
		margin: 0.3em;
		transition-duration: 0.13s;
	}

	button:hover {
		background-color: ${({ theme }) => theme.color.ringoRedHoverDark};
	}

	//mobile
	@media (max-width: 767px) {
		display: none;
	}

	//tablets
	@media (min-width: 768px) and (max-width: 990px) {
		display: none;
	}

	@media (min-width: 1200px) {
		margin-right: auto;
	}
`

export const MobileMenuButton = styled.button`
	display: none;

	//mobile
	@media (max-width: 767px) {
		border: none;
		display: flex;
		align-self: center;
		margin-right: 0.5em;
		background-color: inherit;
	}

	//tablets
	@media (min-width: 768px) and (max-width: 990px) {
		border: none;
		display: flex;
		align-self: center;
		margin-right: 0.5em;
		background-color: inherit;
	}
`
