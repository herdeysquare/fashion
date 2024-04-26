import React from 'react'
// import './SignIn.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();
    const [openSignInPage, setOpenSignInPage] = useState(false);
    const [openDashboard, setOpenDashboard] = useState(false);

    const changeState = () => {
        setOpenSignInPage(!openSignInPage);
        navigate('/Reset');
    }
    const toggleSignIn = () => {
        setOpenDashboard(!openDashboard);
        navigate('/Dashboard');
      };


    return (<>
        <div className='login'>
            <span id='login'>
                <h2 id='h2'>Sign into your account</h2>
                <form action="">
                    <label htmlFor="text"> Email<input id="box" type="text" /></label>
                    <label htmlFor="text"> Password<input id="box" type="password" /></label>
                </form>
                <button id='create' onClick={toggleSignIn}>Sign in</button>
                <small><span className='log' onClick={changeState} id='signin'>Forgot password</span></small>
            </span>
        </div>
        {/* )} */}
    </>
    )
}

export default SignIn