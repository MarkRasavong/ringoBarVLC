import styled from 'styled-components'

export const MapImageContainer = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: center;
	-ms-flex-align: center;
	align-items: center;
	-webkit-box-pack: center;
	-ms-flex-pack: center;
	justify-content: center;

	div {
		width: 100%;
		margin-top: 2em;
		cursor: pointer;
	}
`

export const ContactGrid = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;

	button {
		text-transform: uppercase;
		width: 100%;
		a {
			margin-top: 5px;
		}
	}

	@media (min-width: 901px) {
		display: -ms-grid;
		display: grid;
		-ms-grid-columns: 40% auto;
		grid-template-columns: 40% auto;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		button {
			width: 50%;
		}

		.llegar {
			width: 100%;
		}
	}
`
export const DirectionsDiv = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;

	h5 {
		text-align: left;
		font-size: 1.5em;
		margin-top: 1em;
	}

	p {
		margin-top: 1em;
		text-align: left;
		padding-left: 5px;
	}
`

export const LlamarDiv = styled.div`
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-ms-flex-direction: column;
	flex-direction: column;

	h5 {
		text-align: left;
		font-size: 1.5em;
		margin-top: 1em;
	}
`
