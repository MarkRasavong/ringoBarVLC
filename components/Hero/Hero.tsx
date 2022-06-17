import Image from 'next/image';
import React from 'react';
import ringoBarLogo from '../../public/crop-logo-rm-bg.png'

const Hero = () => {
  return (
    <section id="hero">
      <Image src={ringoBarLogo} alt='Ringo Bar Logo in Valencia'/>
    </section>
  )
}

export default Hero;