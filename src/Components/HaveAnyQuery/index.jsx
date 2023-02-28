import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HaveAnyQueryStyles.css'

const HaveAnyQuery = () => {
  const navigate = useNavigate();

  return (
    <div className='HaveAnyQuery-container'>
        <div className='HaveAnyQuery-innerDiv1'>
            <h2>Have any Query?</h2>
            <h1>Let’s experience our Dashboard</h1>
        </div>
        <div className='HaveAnyQuery-innerDiv2'>
            <button onClick={()=>{navigate('/dashboard/reports')}} className='button1'>View Dashboard</button>
            <button className='contactUs-button'>Contact Us</button>
        </div>
    </div>
  )
}

export default HaveAnyQuery