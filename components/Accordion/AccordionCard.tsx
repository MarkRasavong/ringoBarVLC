import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { MenuItems } from '../../pages/carta'
import {
	AccordionContent,
	AccordionContentDescription,
	AccordionContentTitle,
	AccordionItem,
	AccordionTitle,
	ArrowControls,
} from './Accordion.styled'

interface AccordionCardProps {
	categoryTitle: string
	data: MenuItems[]
}

const AccordionCard = ({ categoryTitle, data }: AccordionCardProps) => {
	const [active, setActive] = useState(false)

	const toggleAccordion = () => {
		setActive((prevState) => !prevState)
	}

	return (
		<AccordionItem id={`${categoryTitle}`} onClick={toggleAccordion}>
			<AccordionTitle className="accordionTitle" href={`#${categoryTitle}`}>
				{categoryTitle}
				<ArrowControls>
					{active ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
				</ArrowControls>
			</AccordionTitle>

			{data?.map(({ name, description, price, id }) => (
				<AccordionContent key={id} style={{ maxHeight: active ? '100%' : '0' }}>
					<AccordionContentTitle>
						<span className="contentItemName">
							<h3>{name}</h3>
						</span>
						<span className="contentPrice">
							<h3>{price}</h3>
						</span>
					</AccordionContentTitle>
					<AccordionContentDescription>
						<p>{description}</p>
					</AccordionContentDescription>
				</AccordionContent>
			))}
		</AccordionItem>
	)
}

AccordionCard.defaultProps = {
	categoryTitle: 'Category Name',
	data: {
		name: 'Menu Item Name',
		price: 10,
		description: 'Place Description Here',
	},
}

export default AccordionCard
