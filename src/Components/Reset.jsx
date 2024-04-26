import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Reset = () => {

const navigate = useNavigate();
const [openResetPage, setOpenResetPage] = useState(false);


const changeState = () => {
  setOpenResetPage(!openResetPage);
  navigate('/SignIn');}

  return (
    <div className='login'>
      <span id='login'>
        <h2>Reset password</h2>
        <form action="">
                <label htmlFor="text"> Password<input id="box" type="password" /></label>
                <label htmlFor="text"> Confirm Password<input id="box" type="password" /></label>
            </form>
            <button id='create' onClick={changeState}>Reset password</button>
            </span>
        </div>
  )
}

export default Reset