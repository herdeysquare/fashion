import React, { useState } from 'react'
import check from '../Images/check.png'
import { useNavigate } from 'react-router-dom';
import './successful.css'


const Successful = () => {
    const navigate = useNavigate();
    const [openDashboardPage, setOpenDashboardPage] = useState(false);
    const [openSignUpPage, setOpenSignUpPage] = useState(false);



    const changeState = () => {
        setOpenDashboardPage(!openDashboardPage);
        navigate('/Dashboard');
    }
    const toggleState = () => {
        setOpenSignUpPage(!openSignUpPage);
        navigate('/');
    }


  return (<>
    <div className='success'>
        <span id='success'>
            <div id='check'>
        <img src={check} alt="" className='check' />
        <h2 className='check' >Payment Successful</h2>
        </div>
        <div className='check-button'>
            <button  className='back-log' onClick={changeState}>Back Home</button>
        <button className='back-log' onClick={toggleState}>Log Out</button>
        </div>
        </span>
    </div>
    </>
  )
}

export default Successful