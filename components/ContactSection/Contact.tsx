import React from 'react'
import Image from 'next/image';
import { RedSection } from '../Sections/Sections.styled';
import mapLocale from '../../public/map_locale_01.png'
import { ContactGrid, DirectionsDiv, LlamarDiv, MapImageContainer } from './Contact.styled';
import { ButtonLrg } from '../Button/Button.styled';
import { MdAssistantDirection, MdPhoneInTalk } from 'react-icons/md';

const Contact = () => {
  return (
    <RedSection id="contactar">
      <h3>Contactar</h3>
      <MapImageContainer>
        <a href='https://www.google.com/maps/place/RINGO+BAR/@39.4845162,-0.3890558,17z/data=!3m1!4b1!4m5!3m4!1s0xd604f1cead0fce7:0xdf718751632a7a69!8m2!3d39.4845089!4d-0.3868619' target='_blank' rel="noreferrer">
          <div>
            <Image src={mapLocale} alt='Dirección a Ringo Bar Pizzería Valencia, Carrer de Joaquim Ballester, 12 46009 València España' />
          </div>
        </a>
      </MapImageContainer>
      <ContactGrid>
        <LlamarDiv>
          <h5>Llamar</h5>
          <ButtonLrg>
            <a href='tel:+34-624-41-45-18' target='_blank' rel="noreferrer">
              <MdPhoneInTalk style={{ marginRight: '0.5em'}} size='1em'/>
              Llamar al 624 41 45 18
            </a>
          </ButtonLrg>
        </LlamarDiv>
        <DirectionsDiv>
          <h5>Dirección</h5>
          <ButtonLrg>
              <a href='https://www.google.com/maps/dir//RINGO+BAR/@39.4844952,-0.4569071,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd604f1cead0fce7:0xdf718751632a7a69!2m2!1d-0.3868619!2d39.4845089' target='_blank' rel="noreferrer">
                <MdAssistantDirection style={{ marginRight: '0.5em'}} size='1em'/>
                Cómo Llegar
              </a>
          </ButtonLrg>
          <p>
            Carrer de Joaquim Ballester, 12 <br />
            46009 València <br />
            Valencia <br />
            España <br />
          </p>
        </DirectionsDiv>
      </ContactGrid>
    </RedSection>
  )
}

export default Contact