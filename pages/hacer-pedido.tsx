import { NextPage } from 'next';
import React from 'react'
import { MdPhoneInTalk } from 'react-icons/md';
import { ButtonLrg } from '../components/Button/Button.styled';
import { ColorOverlay, OrderContainer} from '../components/OrderPage/Order.styled';
//import background from '../public/pexels-koolshooters-7142953.jpg';
/*
.buttonSticker {
		height: 40px;
		margin: 2px;
	}
*/

const Order:NextPage = () => {
  return (
    <OrderContainer>
      <ColorOverlay />
      <div className='btnContainer'>
      <h1>Hacer Pedido</h1>
        <ButtonLrg>
          <a href='tel:+34-624-41-45-18' target='_blank' rel="noreferrer">
            <MdPhoneInTalk style={{ marginRight: '0.5em'}} size='1em'/>
            Llamar al 624 41 45 18
          </a>
        </ButtonLrg>
        
        <a href='https://www.just-eat.es/restaurants-ringo-bar-valencia/menu' target='_blank' rel="noreferrer">
        <ButtonLrg>
            <img src='/just-eat-logo.png' alt='Just Eat Logo' className='buttonSticker'/>
             <p>Just Eat</p>
        </ButtonLrg>
        </a>
        
        <a href='https://glovoapp.com/es/es/valencia/ringo-bar-valencia/' target='_blank' rel="noreferrer">
        <ButtonLrg>
            <img src='/glovo.png' alt='Glovo Logo' className='buttonSticker'/>
              <p>Glovo</p>
        </ButtonLrg>
        </a>

      </div>
    </OrderContainer>
  )
}

export default Order;