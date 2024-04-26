import React, { useState } from 'react';
import '../index.css';
import Logo from '../Images/fashion-hub2.jpeg';
import { useNavigate } from 'react-router-dom';

const First = () => {
    const navigate = useNavigate();
    const [openSignUpPage, setOpenSignUpPage] = useState(false);
    const [openSignInPage, setOpenSignInPage] = useState(false);

    const changeState = () => {
        setOpenSignUpPage(!openSignUpPage);
        setOpenSignInPage(false);
        navigate('/SignUp');
    };

    const toggleSignIn = () => {
        setOpenSignUpPage(false);
        setOpenSignInPage(!openSignInPage);
        navigate('/SignIn');
    };

    return (
        <div>
            <div className="rectangle1">
                <div className="hub">
                    <img className="logo" src={Logo} alt="" style={{ fontSize: "16px", csp: "style-src 'self' 'unsafe-inline'" }} />
                </div>
                <div className='homepage'>
                    <h5>All sewing and accessories...</h5>

                    <div className='button'>
                        <button id="home" onClick={changeState}>Create account</button>
                        <button id="home" onClick={toggleSignIn}>Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default First;
