import React from 'react'
import AccordionCard from '../components/Accordion/AccordionCard';
import { AccordionContainer } from '../components/Accordion/Accordion.styled';
import { MenuContainer } from '../components/Carta/Carta';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { tableData } from '../lib/airtable';

export interface MenuItems{
  catName: string;
  id: number;
  name: string;
  price?: string;
  description?: string;
}

export interface ApiMenuItems {
  title: string;
  data: MenuItems[]
}

const carta = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {menuItems} = props
  return (
    <MenuContainer>
      <h1>Ringo Carta</h1>
      <AccordionContainer>
          {
          menuItems.map(({title, data}: ApiMenuItems) => <AccordionCard categoryTitle={title} data={data} key={`carta_${title}`}/> )
          }
      </AccordionContainer>
    </MenuContainer>
  )
};

export const getStaticProps: GetStaticProps = async () => {
  
  const pizzas = {title: 'pizzas', data: await tableData('pizzas')};
  const bocadillos = {title:'bocadillos', data: await tableData('bocadillos')};
  const dulces = {title:'dulces', data: await tableData('dulces')};
  const cervezas = {title:'cervezas', data: await tableData('cervezas')};
  const vinos = {title:'vinos', data: await tableData('vinos')};
  const cocteles = {title:'cócteles', data: await tableData('cócteles')};
  const bebidas = {title:'más bebidas', data: await tableData('más bebidas')};
  const desayunos = {title:'desayunos', data: await tableData('desayunos')};
  const almuerzos = {title:'almuerzos', data: await tableData('almuerzos')};
  const pastaYMas = {title:'pastas y más', data: await tableData('pastas y más')};
  const promos = {title:'promos', data: await tableData('promos')};

  return {
    props: {
      menuItems: [pizzas, bocadillos, dulces, cervezas, vinos, cocteles, bebidas, desayunos, almuerzos, pastaYMas, promos]
    }
  }
}

export default carta;