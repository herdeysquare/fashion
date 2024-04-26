import React, { useState } from 'react'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  const [openDashboardPage, setOpenDashboardPage] = useState(false);
  const [openCheckOutPage, setCheckOutPage] = useState(false);

  const changeState = () => {
    setOpenDashboardPage(!openDashboardPage);
    navigate('/Dashboard');
  }
  
  const toggleEvent = () => {
    setCheckOutPage(!openCheckOutPage);
    navigate('/CheckOut');
  }

  return (<>
    <div className='cart'>
      <div className='img'>
        <button className='back' onClick={changeState}>‹</button>
        <div className='inside-img'>
          <div className='word-in-img'>
            <p className='word-img'> Emel </p>
            <p className='word-img'> price </p>
          </div>

          <p className='img-num'>25,000</p></div>
      </div>

      <button className='categories' id='features'>Features</button>

      <ul id='list'>
        <li>Lorem ipsum dolor sit</li>
        <li> amet, consectetur adipiscing </li>
        <li>elit, sed do eiusmod tempor incididunt </li>
        <li>ut labore et dolore magna aliqua. Ut enim </li>
        <li>ad minim veniam, quis nostrud exercitation </li>
        <li>ullamco laboris nisi ut aliquip ex ea commodo  </li>
        <li>consequat. Duis aute irure dolor in reprehenderit .</li>
      </ul>

      <label htmlFor="" value={'Apply code'} id='code'>
        <div id='input'>
          <input type="text" placeholder={'Enter promo code'} id='apply-code'/>
          <button className='categories'>Apply code</button>
        </div>
      </label>

      <button id='create' className='create' onClick={toggleEvent}>Buy now</button>

    </div>
  </>
  )
}

export default Cart