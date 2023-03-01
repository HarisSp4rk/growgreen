import React from 'react'
import './AboutUsStyles.css'
import ReportPic from '../../assets/Reports1.svg'
import Charts from '../../assets/Chart1.svg'
import bg from '../../assets/AboutUs-bg.svg'

const AboutUs = () => {
  return (
    <div className='aboutUs-container'>
            <div className='aboutUs-bg'>
            <img src={bg} alt="bg" />
            </div>
        <div className='aboutUs-left-side'>
            <div>
            <img className='reports-pic' src={ReportPic} alt="AboutUs" />
            </div>
            <div>
            <img className='charts-pic' src={Charts} alt="AboutUs" />
            </div>
        </div>
        <div className='aboutUs-right-side'>
            <h2>About Us</h2>
            <h1>We Provide Dashboard to know about atmosphere</h1>
            <p>Welcome to our web application, dedicated to providing you with real-time readings of air pollutants, temperature, and humidity in your local environment. Our goal is to help you stay informed about the quality of the air you breathe and to provide you with the necessary information to make informed decisions about your health and well-being.</p>
            <div style={{display:'flex', justifyContent:'center', alignItems:'cetner'}}>
            <button className='button1' style={{color:'white', border:'none'}} >View Dashboard</button>
            <button className='contactUs-button'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs