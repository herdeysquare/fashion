import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const toggleSignIn = () => {
    navigate('/SignIn');
  };
  const toggleCreate = () => {
    if (!password.trim() || !confirmPassword.trim()) {
      setErrorMessage('Please complete all fields!!!');
      return;
    }

    if (password === confirmPassword) {
      navigate('/Dashboard');
    } else {
      setPasswordMatch(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    setPasswordMatch(event.target.value === password);
  };

  return (
    <div className='login'>
      <span id='login'>
        <h2 id='h2'>Create your free account.</h2>
        <form>
          <label htmlFor='name'>Name<input id='box' type='text' required /></label>
          <label htmlFor='email'>Email<input id='box' type='email' required /></label>
          <label htmlFor='password'>Password<input id='box' type='password' value={password} onChange={handlePasswordChange} required minLength={8} /></label>
          <label htmlFor='confirmPassword'>Confirm Password<input id='box' type='password' value={confirmPassword} onChange={handleConfirmPasswordChange} required minLength={8} /></label>
          {!passwordMatch && <p id='notmatch'>Passwords do not match!!!</p>}
          {errorMessage && <p id='notmatch'>{errorMessage}</p>}
        </form>
        <button id='create' onClick={toggleCreate}>Create account</button>
        <small className='log'>Already have an account? <strong onClick={toggleSignIn} id='signin'>Sign in</strong></small>
      </span>
    </div>
  );
};

export default SignUp;
