import React from 'react'
import AccordionCard from '../components/Accordion/AccordionCard';
import { AccordionContainer } from '../components/Accordion/Accordion.styled';
import { MenuContainer } from '../components/Carta/Carta';
import { pizzas, desayunos, almuerzos, cervezas, bebidasExtras, vinos, cocteles, bocadillos, dolci, pastasApretivosYmas, promos } from '../components/Carta/cartaData';

export interface MenuItems{
  number?: number;
  name?: string;
  price?: string;
  description?: string;
}
const carta = () => {
  return (
    <MenuContainer>
      <h1>Ringo Carta</h1>
      <AccordionContainer>
        <AccordionCard categoryTitle='pizzas' data={pizzas} key='carta_pizzas'/>
        <AccordionCard categoryTitle='pastas, apretivos, y mas' data={pastasApretivosYmas} key='carta_pastasApretivosYmas'/>
        <AccordionCard categoryTitle='bocadillos' data={bocadillos} key='carta_bocadillos'/>
        <AccordionCard categoryTitle='cervezas' data={cervezas} key='carta_cervezas'/> 
        <AccordionCard categoryTitle='vinos' data={vinos} key='carta_vinos'/> 
        <AccordionCard categoryTitle='cocteles' data={cocteles} key='carta_cocteles'/> 
        <AccordionCard categoryTitle='bebidas' data={bebidasExtras} key='carta_bebidasExtras'/>
        <AccordionCard categoryTitle='dulces' data={dolci} key='carta_dolci'/> 
        <AccordionCard categoryTitle='desayunos' data={desayunos} key='carta_desayunos'/>
        <AccordionCard categoryTitle='almuerzos' data={almuerzos} key='carta_almuerzos'/> 
        <AccordionCard categoryTitle='promos' data={promos} key='carta_promos'/> 
      </AccordionContainer>
    </MenuContainer>
  )
}

export default carta