import Link from 'next/link';
import React, { useState } from 'react';
import { MobileMenuButton, NavbarContainer, NavbarLogo, NavLinks, SocialMobileNavLinks, SocialNavLinks } from './Navbar.styled';
import { BsInstagram } from 'react-icons/bs';
import{ MdMenu, MdOutlineFacebook, MdPhoneInTalk, MdOutlineClose } from 'react-icons/md'
import { useTheme } from 'styled-components';
import { StyledRingoTheme } from '../../styles/theme';
import { useRouter } from 'next/router';

const pages = [
  { title: 'Carta', link: '/carta'  },
  { title: 'Galería', link: '/#galeria' },
  { title: 'Horarios', link: '/#horarios' },
  { title: 'Contactar', link: '/#contactar' },
  { title: 'Hacer Pedido', link: '/hacer-pedido' },
];

const Navbar = () => {
  const [ displayMobileMenu, setDisplayMobileMenu ] = useState(false);
  const theme = useTheme() as StyledRingoTheme;
  const router = useRouter();
  const atIdxPg = router.pathname === '/';

  console.log("render navbar");
  
  const socialMedia = [
    {
      key: 'ringoBarPhone',
      icon: <MdPhoneInTalk color={theme.color.ringoWhite} size={'1.6em'}/>,
      link: 'tel:+34-343-434-343',
    },
    {
      key: 'ringoBarFacebook',
      icon: <MdOutlineFacebook color={theme.color.ringoWhite} size={'1.6em'}/>,
      link: 'https://facebook.com/',
    },
    {
      key: 'ringoBarInstagram',
      icon: <BsInstagram color={theme.color.ringoWhite} size={'1.6em'}/>,
      link: 'https://instagram.com/ringobar_',
    },
  ]

  const handleMobileClick = () => {
    setDisplayMobileMenu(prevState => !prevState);
  };


  return (
    <NavbarContainer style={{
      backgroundColor: atIdxPg ? 'transparent' : 'red',
      boxShadow: atIdxPg ? 'none' : `rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
      rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px`
    }}>
      <NavbarLogo>
      <Link href={"/"}>RingoBar</Link>
      </NavbarLogo>
      <NavLinks style={{ left: displayMobileMenu ? '0%' : '-100%' }}>
        {pages.map(({title, link}) => (
            <li
            onClick={handleMobileClick}
            key={`NavLink_${title}`}>
              <Link href={link} passHref>
                <a>{title}</a>
              </Link>
            </li>
        ))
        }
        <SocialMobileNavLinks>
        {socialMedia.map(({key, icon, link}) => (
          <button key={`NavSocial_${key}`}>
            <Link href={link} passHref>
              <a target="_blank" rel="noopener noreferrer">
              {icon}
              </a>  
            </Link>
          </button>
        ))}
      </SocialMobileNavLinks>
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
      <MobileMenuButton onClick={handleMobileClick}>
          {displayMobileMenu ? 
            <MdOutlineClose color={theme.color.ringoWhite} size={'3em'}/>
          :
            <MdMenu color={theme.color.ringoWhite} size={'3em'}/>}
      </MobileMenuButton>
      
    </NavbarContainer>
  )
}

export default Navbar;