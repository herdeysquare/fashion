import React, { useState } from 'react'
import Card from './Card'
import tailoring1 from '../Images/tailoring1.png'
import tailoring2 from '../Images/tailoring2.png'
import tailoring4 from '../Images/tailoring4.png'
import arrow from '../Images/left-arrow.png'
import { useNavigate } from 'react-router-dom'
import './checkout.css'

const CheckOut = () => {
    const navigate = useNavigate();
    const [openDashboardPage, setOpenDashboardPage] = useState(false);
    const [openPaymentPage, setPaymentPage] = useState(false);
    const [start, setStart] = useState(0);

    const changeState = () => {
        setOpenDashboardPage(!openDashboardPage);
        navigate('/Dashboard');
    }

    const toggleEvent = () => {
        setPaymentPage(!openPaymentPage);
        navigate('/Payment');
    }

    const btn = () => {
        setStart(start - 1);
    };
    const btn1 = () => {
        setStart(start + 1);
    };


    return (
        <div className='checkout'>
            <span id='checkout'>
                <span className='header'>
                    <img src={arrow} alt="" className='arrow' onClick={changeState} />
                    <h2>Order Summary</h2>
                </span>

                <div id='hr'></div>



                <div id='checkout-card'>

                    <div className='checkout-card'>
                        <img src={tailoring1} id='tailor-check' />
                        <p>Storm sewing Machine 8.0”</p>
                        <p>125,000</p>
                    </div>
                    <div id='btn'> 
                        <button className='btn' onClick={btn}>-</button>{start}
                        <button className='btn' onClick={btn1}>+</button>
                    </div>



                    <div className='checkout-card'>
                        <img src={tailoring4} id='tailor-check' />
                        <p>Storm sewing Machine 8.0”</p>
                        <p>125,000</p>
                    </div>
                    <div id='btn'> 
                    <button className='btn' onClick={btn}>-</button>{start}
                        <button className='btn' onClick={btn1}>+</button>
                    </div>



                    <div className='checkout-card'>
                        < img src={tailoring2} id='tailor-check' />
                        <p>Storm sewing Machine 8.0”</p>
                        <p>125,000</p>
                    </div>
                    <div id='btn'>
                         <button className='btn' onClick={btn}>-</button>{start}
                        <button className='btn' onClick={btn1}>+</button>
                    </div>


                </div>
<span id='sum'>
                <div className='total'>
                    <p id='total'>Subtotal</p>
                    <p id='total'>125,000</p>
                </div>


                <div className='total'>
                    <p id='total'>Shipping</p>
                    <p id='total'>125,000</p>
                </div>


                <div className='total'>
                    <p id='total'>Grand Total</p>
                    <p id='total'>125,000</p>
                </div>
                </span>
                <button id='create' className='create-check' onClick={toggleEvent}>Checkout</button>
            </span>
        </div>
    )
}

export default CheckOut