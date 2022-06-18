import Link from 'next/link';
import React from 'react'
import {FooterDiv} from './Footer.styled';

const Footer = () => {
  return (
    <FooterDiv>
      <div style={{paddingTop: '20px'}}>
      <Link href={"/"} passHref><h4>RingoBar</h4></Link>
      </div>
    </FooterDiv>
  )
}

export default Footer