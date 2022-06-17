import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	position: fixed;
	display: flex;
	z-index: 1;
	background-color: ${({ theme }) => theme.color.ringoRed};
	width: 100%;
	height: 4em;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
		rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

	ul li {
		display: inline-block;
		line-height: 3.5em;
		margin-left: 3.3em;
		font-size: 1.2em;
	}
	/* Extra large devices (large laptops and desktops, 1200px and up) */
	@media (min-width: 901px) {
		margin: auto;
	}

	//tablet & mobile devices
	@media (max-width: 990px) {
		ul {
			flex-direction: column;
			position: fixed;
			width: 100%;
			height: 100%;
			background: ${({ theme }) => theme.color.ringoRedHoverDark};
			top: 4em;
			left: -100%;
			text-align: center;
			transition: all 0.5s;
		}

		ul li {
			display: block;
			margin: 0;
			padding: 0 0 1.5em 0;
		}

		ul li:nth-child(1) {
			padding-top: 1.5em;
		}
	}
`

export const NavbarLogo = styled.label`
	padding: 10px 0 0 30px;
	margin-left: auto;

	a {
		font-family: ${({ theme }) => theme.fonts[1]};
		font-size: ${({ theme }) => theme.fontSize.medium};
		color: ${({ theme }) => theme.color.ringoWhite};
		margin: 0;
		font-weight: normal;
	}

	//tablet & mobile devices
	@media (max-width: 990px) {
		display: flex;
		flex-grow: 1;
	}

	@media (min-width: 991px) {
		margin-left: auto;
	}
`
export const NavLinks = styled.ul`
	display: flex;
	width: 100%;
	margin: auto;
	padding: auto;
	align-items: center;
	color: ${({ theme }) => theme.color.ringoWhite};

	a {
		cursor: pointer;
		display: inline-block;
		font-size: 1.2rem;
		font-family: ${({ theme }) => theme.fonts[1]};
	}

	//tablet & mobile devices
	@media (max-width: 990px) {
		a {
			font-size: 2.2rem;
		}
	}

	@media (min-width: 991px) {
		width: auto;
		justify-content: space-evenly;
	}
`

export const SocialNavLinks = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	button {
		border: none;
		background-color: inherit;
		border-radius: 100%;
		padding: 0.8em;
		cursor: pointer;
		transition-duration: 0.13s;
	}

	button:hover {
		background-color: ${({ theme }) => theme.color.ringoRedHoverDark};
	}

	//mobile
	@media (max-width: 990px) {
		display: none;
	}

	@media (min-width: 991px) {
		margin-right: auto;
	}
`
export const MobileMenuButton = styled.button`
	display: none;
	//mobile && tablets
	@media (max-width: 990px) {
		border: none;
		display: flex;
		align-self: center;
		margin: auto 1em;
		background-color: inherit;
		cursor: pointer;
	}
`
export const SocialMobileNavLinks = styled.div`
	display: none;
	//mobile
	@media (max-width: 990px) {
		display: flex;

		button {
			border: none;
			background-color: inherit;
			border-radius: 100%;
			padding: 0.8em;
			cursor: pointer;
			margin-right: 1rem;
			transition-duration: 0.13s;
		}

		button:hover {
			background-color: ${({ theme }) => theme.color.ringoRedHoverDark};
		}
	}
`
