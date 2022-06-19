import React, { Fragment } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { AccordionContainer, AccordionContent, AccordionItem, AccordionTitle, ArrowControls } from './Accordion.styled'

const Accordion = () => {

  const toggleButtons = () => (
    <Fragment>
      <ArrowControls>
        <span className='arrowUp'>
          <MdKeyboardArrowUp />
        </span>
        <span className='arrowDown'>
          <MdKeyboardArrowDown/>
        </span>
      </ArrowControls>
    </Fragment>
  )

  return (
    <div>
      <AccordionContainer>

        <AccordionItem id='CAT1'>
          <AccordionTitle className='accordionTitle' href='#CAT1'>
            MENU CAT
            {toggleButtons()}
          </AccordionTitle>
          <AccordionContent className='toReveal'>
            <p>anima sana incopore sano</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id='CAT2'>
          <AccordionTitle className='accordionTitle' href='#CAT2'>
            MENU CAT
            {toggleButtons()}
          </AccordionTitle>
          <AccordionContent className='toReveal'>
            <p>anima sana incopore sano</p>
          </AccordionContent>
        </AccordionItem>

      </AccordionContainer>
    </div>
  )
}

export default Accordion