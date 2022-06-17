import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ringoBarLogo from '../../public/crop-logo-rm-bg.png'
import { ButtonLrg } from '../Button/Button.styled';
import { HeroSection } from './Hero.styled';
import pizzabox from '../../public/icon-pizza-box.svg'
import { MdMenuBook } from 'react-icons/md';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <div className='heroImageWrpr'>
        <Image src={ringoBarLogo} alt='Ringo Bar Logo in Valencia'/>
      </div>
      <h1>La Auténtica Pizzería en Valencia</h1>
      <div className='btnsWrpr'>

        <Link href='/carta' passHref>
          <ButtonLrg>
          <div className='icnWrpr'>
            <MdMenuBook />
          </div>
            Ver Carta
          </ButtonLrg>
        </Link>

        <Link href='/hacer-pedido' passHref>
          <ButtonLrg >
            <div className='icnWrpr'>
              <Image src={pizzabox} alt='pizza box icon'/>
            </div>
              Hacer Pedido
          </ButtonLrg>
          </Link>
      </div>
      
    </HeroSection>
  )
}

export default Hero;