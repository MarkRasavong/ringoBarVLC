import type { NextPage } from 'next';
import Hero from '../components/HeroSection/Hero';
import React from 'react';
import Horarios from '../components/HorariosSection/Horarios';


const Home: NextPage = () => {
  return (
    <div >
        {/* IMPLEMENT SECTION PADDING FOR ALL */}
        <Hero />
        {/* Hours */}
        <Horarios />
        {/* GALERIA => INSTAGRAM/META API */}
        {/* Contact */}
    </div>
  )
}

export default Home