import Link from 'next/link';
import React from 'react';
import { MobileMenuButton, NavbarContainer, NavbarLogo, NavLinks, SocialNavLinks } from './Navbar.styled';
import { BsInstagram } from 'react-icons/bs';
import{ MdMenu, MdOutlineFacebook, MdPhoneInTalk } from 'react-icons/md'
import { useTheme } from 'styled-components';
import { StyledRingoTheme } from '../../styles/theme';

const pages = [
  { title: 'Carta', link: '/carta'  },
  { title: 'Galería', link: '/#galeria' },
  { title: 'Horarios', link: '/#horarios' },
  { title: 'Contactar', link: '/#contactar' }
];

const Navbar = () => {
  const theme = useTheme() as StyledRingoTheme;

  console.log("render navbar");
  console.log(theme);

  const socialMedia = [
    {
      key: 'ringoBarPhone',
      icon: <MdPhoneInTalk color={theme.color.ringoWhite} size={'1.2em'}/>,
      link: 'tel:+34-343-434-343',
    },
    {
      key: 'ringoBarFacebook',
      icon: <MdOutlineFacebook color={theme.color.ringoWhite} size={'1.2em'}/>,
      link: 'https://facebook.com/',
    },
    {
      key: 'ringoBarInstagram',
      icon: <BsInstagram color={theme.color.ringoWhite} size={'1.2em'}/>,
      link: 'https://instagram.com/ringobar_',
    },
  ]


  return (
    <NavbarContainer>
      <NavbarLogo>
      <Link href={"/"}>RingoBar</Link>
      </NavbarLogo>
      <NavLinks>
        {pages.map(({title, link}) => (
          <Link 
          href={link} 
          key={`NavLink_${title}`}
          passHref
          >
            <h3>{title}</h3>
          </Link>
        ))}
      </NavLinks>
      <SocialNavLinks>
        {socialMedia.map(({key, icon, link}) => (
          <button key={`NavSocial_${key}`}>
            <Link href={link} passHref>
              <a target="_blank" rel="noopener noreferrer">
              {icon}
              </a>  
            </Link>
          </button>
        ))}
      </SocialNavLinks>
      <MobileMenuButton>
        <MdMenu color={theme.color.ringoWhite} size={'2em'}/>
      </MobileMenuButton>
    </NavbarContainer>
  )
}

export default Navbar