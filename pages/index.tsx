import type { NextPage } from 'next';
import Hero from '../components/HeroSection/Hero';
import React from 'react';
import Horarios from '../components/HorariosSection/Horarios';
import Contact from '../components/ContactSection/Contact';


const Home: NextPage = () => {
  return (
    <>
        {/* IMPLEMENT SECTION PADDING FOR ALL */}
        <Hero />
        {/* Hours */}
        <Horarios />
        {/* GALERIA => INSTAGRAM/META API */}
        <section style={{ backgroundColor: 'white', height: '200px' }} id='galeria'>

        </section>
        {/* Contact */}
        <Contact />
    </>
  )
}

export default Home