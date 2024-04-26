import React, { useState } from 'react'
import '../Components/Card.css'

const Card = (props) => {
  const [start, setStart] = useState(0);

  const btn = () => {
    setStart(start - 1);
  };
  const btn1 = () => {
    setStart(start + 1);
  };



  return (
    <div className="card">
      <div className="card-body">
        <img src={props.img} alt="" id='tailoring' />
        <div className='card-title'>
          <span>$20k</span>
          <div id='button'>
            <button className='btn' onClick={btn}>-</button>{start}
            <button className='btn' onClick={btn1}>+</button>
            <p>{props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card