import React, { useState } from 'react'
import location from '../Images/location-logo.png'
import Eclipse from '../Images/Ellipse-1.png'
import machine1 from '../Images/machine1.png'
import machine2 from '../Images/machine2.png'
import machine3 from '../Images/machine3.png'
import cart from '../Images/trolley.png'
import Card from '../Components/Card'
import tailoring1 from '../Images/tailoring1.png'
import tailoring2 from '../Images/tailoring2.png'
import tailoring3 from '../Images/tailoring3.png'
import tailoring4 from '../Images/tailoring4.png'
import tailoring5 from '../Images/tailoring5.jpeg'
import tailoring6 from '../Images/tailoring6.jpg'
import user from '../Images/user.png'
import card from '../Images/card.png'
import setting from '../Images/settings.png'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'




const Dashboard = () => {

    const navigate = useNavigate();
    const [openSignInPage, setOpenSignInPage] = useState(false);
    const [openCartPage, setOpenCartPage] = useState(false);
    const [openSignUpPage, setOpenSignUpPage] = useState(false);
   const [openCheckOutPage, setCheckOutPage] = useState(false);
   const [openPaymentPage, setPaymentPage] = useState(false);

    const changeState = () => {
        setOpenSignInPage(!openSignInPage);
        navigate('/Change');
    }

    const onChange = () => {
        setOpenCartPage(!openCartPage);
        navigate('/Cart');
    }

    const toggleState = () => {
        setOpenSignUpPage(!openSignUpPage);
        navigate('/');
    }
    const toggleChange = () => {
        setOpenDashboardPage(!openDashboardPage);
        navigate('/Dashboard');
    }
    const toggleStat = () => {
        setCheckOutPage(!openCheckOutPage);
        navigate('/CheckOut');
    }
    const changeStates = () => {
        setPaymentPage(!openPaymentPage);
        navigate('/Payment');
    }



    return (
        <div className='dashboard'>

            <div className='search'>
                <div id='name-tag'>
                    <img src={location} alt="" id='location' />
                    <span className='name'>Lagos, Nigeria.</span>
                </div>
                <input type="text" placeholder={"🔍 search for products"} id='find' />
                <div id='name-tag'><img src={Eclipse} alt="" id='client' />
                    <span className='name'>Jenny Wilson Orders: 289</span>
                </div>

            </div>

            <hr style={{ marginTop: '10vh', backgroundColor: 'rgba(239, 200, 177, 0.5)' }} />

            <div className='top' id='top'>
                <button className='categories'>Top categories</button>
                <h6>ALL</h6>
            </div>

            <div className="machines">
                <img src={machine1} alt="" id='machine1' />
                <img src={machine3} alt="" id='machine3' />
                <img src={machine2} alt="" id='machine2' />
            </div>

            <div className='store'>
                <button id='select'>
                    <select name="" id="stores" type='button'>
                        <option value="">Stores</option>
                        <option value="">Emel</option>
                        <option value="">Two Lion</option>
                        <option value="">Butterfly</option>
                        <option value="">Juki</option>
                        <option value="">Delivery</option>
                    </select>
                </button>
                <img src={cart} alt="" id='cart' onClick={onChange} />
            </div>

            <div className='prop'>
                <Card img={tailoring1} />
                <Card img={tailoring2} />
                <Card img={tailoring3} />
                <Card img={tailoring4} />
                <Card img={tailoring5} />
                <Card img={tailoring6} />
            </div>

            {/* <span className='partner'>
                <p id='txt'>Looking to partner with us?<a href="">Click here</a></p>
                <p id='txt'>Or</p>
                <p id='txt' className='txt1'>Are you a professional rider?<a href="">Click here</a></p>
            </span> */}


            <div className='button-below'>
                <button className='back-log' onClick={() => document.getElementById('top').scrollIntoView({ behavior: 'smooth' })}>Back to Top</button>
                <button className='back-log' onClick={toggleState}>Log Out</button>
            </div>

            <hr style={{ marginTop: '10vh', backgroundColor: 'rgba(239, 200, 177, 0.5)' }} />

            <div className='info'>
                <div id='name-tag'>
                    <div id='name-tag'>
                        <span className='name'>Jenny Wilson Orders: 289</span>
                        <img src={user} alt="" id='user' />
                    </div>
                </div>
                <img src={cart} alt="" id='cart' onClick={toggleStat} />
                <img src={card} alt="" id='card' onClick={changeStates} />
                <img src={setting} alt="" id='setting' onClick={changeState} />
            </div>
        </div>
    )
}

export default Dashboard