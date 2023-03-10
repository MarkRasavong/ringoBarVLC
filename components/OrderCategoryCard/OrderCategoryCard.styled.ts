import styled from 'styled-components'

export const OrderCategoryCardContainer = styled.div`
	display: flex;
	align-items: center;

	height: 7rem;
	width: 100%;
	background-color: ${({ theme }) => theme.color.ringoRed};

	border-radius: 0.4em;
	-webkit-box-shadow: 0.5em 2px 0.5em rgba(0, 0, 0, 0.1);
	box-shadow: 0.5em 2px 0.5em rgba(0, 0, 0, 0.1);
	margin-bottom: 1rem;
`
export const TextContainer = styled.div`
	margin-left: 2rem;
`
