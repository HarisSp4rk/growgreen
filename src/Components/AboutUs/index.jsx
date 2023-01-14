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
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            <div style={{display:'flex', justifyContent:'center', alignItems:'cetner'}}>
            <button className='button1' style={{color:'white', border:'none'}} >View Dashboard</button>
            <button className='contactUs-button'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs