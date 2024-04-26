import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Change = () => {
const navigate = useNavigate();
  const [openFirstPage, setOpenFirstPage] = useState(false);

  const toggleState = () => {
    setOpenFirstPage(!openFirstPage);
    navigate('/');
}


  return (
    <div className='login'>
      <span id='login'>
      <h2>Change password</h2>
      <form action="">
        <label htmlFor="text"> Email<input id="box" type="text" /></label>
      </form>
      <button id='create' onClick={toggleState}>Send request</button>
      </span>
    </div>
  )
}

export default Change