import React, { useEffect, useState, } from 'react'
import "./SignUp.css"
import SignIn from './SignIn';
import Dashboard from './Dashboard'
import { Link, useNavigate } from 'react-router-dom';



const SignUp = () => {
  const navigate = useNavigate();
  // const [openSignUpPage, setOpenSignUpPage] = useState(false);
  // const [openSignInPage, setSignInPage] = useState(false);
  // const [openDashboard, setOpenDashboard] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true); // State to track if passwords match
  const [errorMessage, setErrorMessage] = useState('');
  

  // useEffect(() => {
  //   alert("Please complete necessary inputs");
  // }, []);


  // const toggleSignIn = () => {
  //   setOpenSignUpPage(false);
  //   setSignInPage(!openSignInPage);
  //   navigate('/SignIn');
  // };

  // const toggleCreate= () => {
  //   setOpenDashboard(!openDashboard);
  //   navigate('/Dashboard');
  // };


  const toggleSignIn = () => {
    navigate('/SignIn');
  };

  const toggleCreate = () => {
    if (!name || !email || !password || !confirmPassword) {
      setErrorMessage("Please complete necessary inputs!!!");
      return; 
    }

    if (password === confirmPassword) {
      navigate('/Dashboard');
    } else {
      setPasswordMatch(false);
    }
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };



  return (<>

    <div className='login'>
      <span id='login'>

        <h2 id='h2'>Create your free account.</h2>

        <form action="">
          <label htmlFor="text" > Name<input id="box" type="text" required /></label>
          <label htmlFor="text" > Email<input id="box" type="text" required/></label>
          <label htmlFor="password" > Password<input id="box" type="password" value={password} onChange={handlePasswordChange} required minLength={8} /></label>
            <label htmlFor="text" > Confirm Password <input id="box" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required minLength={8} /></label>
          {!passwordMatch && <p id='notmatch'>Passwords do not match!!!</p>}
          {errorMessage && <p id='notmatch'>{errorMessage}</p>}
        </form>

        <button id="create" onClick={toggleCreate}>Create account</button>

        <small className='log'> Already have an account? <strong onClick={toggleSignIn} id='signin'> Sign in</strong></small>

      </span>
    </div>
  </>
  )
}

export default SignUp;