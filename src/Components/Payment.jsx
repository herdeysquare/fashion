import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import arrow from '../Images/left-arrow.png'
import paypal from '../Images/paypal-logo.png'
import visa from '../Images/visa-logo.png'
import verve from '../Images/verve-logo.png'
import master from '../Images/mastercard-logo.png'
import America from '../Images/American-Express-logo.png'
import './payment.css'


const Payment = () => {
    const navigate = useNavigate();
    const [openCheckOutPage, setCheckOutPage] = useState(false);
    const [openSuccessfulPage, setSuccessfulPage] = useState(false);


    const changeState = () => {
        setCheckOutPage(!openCheckOutPage);
        navigate('/CheckOut');
    }
    const toggleEvent = () => {
        setSuccessfulPage(!openSuccessfulPage);
        navigate('/Successful');
    }


    return (<>
        <div className='payment'>
            <span id='payment'>
                <span className='header'>
                    <img src={arrow} alt="" className='arrow' onClick={changeState} />
                    <h2>Payment Method</h2>
                </span>

                <img src={paypal} alt="" id='paypal' />

                <div className='cards-info'>
                    <img src={visa} alt="" id='cards-info' />
                    <img src={master} alt="" id='cards-info' />
                    <img src={America} alt="" id='cards-info' />
                    <img src={verve} alt="" id='cards-info' />
                </div>

                <form action="" className='payment-box'>
    <label htmlFor="cardHolder">Card holder name<input id="box" type="text" /></label>
    <label htmlFor="cardNumber">Card number<input id="box" type="text" /></label>
    <label htmlFor="expiration">Exp<input id="box" type="text" /></label>
    <label htmlFor="cvv">CVV<input id="box" type="text" /></label>
</form>

                <button id='create' className='confirm' onClick={toggleEvent}>Confirm Payment</button>
            </span>
        </div>
    </>
    )
}

export default Payment