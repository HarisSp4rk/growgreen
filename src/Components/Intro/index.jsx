import React, { useContext, useEffect } from 'react'
import { RecommendationsContext } from '../../Contexts/RecommendationsContext'
import './IntroStyles.css'
import '../../App.css'

const Intro = () => {
    const {recommendation} = useContext(RecommendationsContext);
    useEffect(()=>{
        window.scrollTo({
            top: 50,
            behavior: 'smooth',
        });
    },[])
    
    return (
        <div className='intro-top-text'>
            <div className='recommendation-container'><div><span>{recommendation}</span></div></div>
            <h2>A Project For </h2>
            <h1>Sensing Climate Change And Environment Variables</h1>
            {/* <div className='intro-image'>
                <button className='button1'>View Dashboard</button>
                <button className='button2'>Sign Up</button>
                <img className='hero-image' src={HeroImage} alt="HeroImg" />
                <div className='intro-image-inner-divs intro-image-div1'>
                    <div className='small-circle'></div>
                    <div className='intro-image-right-side-text '>A revolutionary change that is going to take Pakistan one step closer to being a smart city.</div>
                </div>
                <div className='intro-image-inner-divs intro-image-div2'>
                    <div className='small-circle'></div>
                    <div className='intro-image-right-side-text '>We installed Sensors in different parts of the city to collect data.</div>
                </div>
            </div> */}
            <div className='intro-image'>
                <button className='button1'>View Dashboard</button>
            <button className='button2'>Sign Up</button>
            <div className='intro-image-inner-divs intro-image-div1'>
                <div className='small-circle'></div>
                <div className='intro-image-right-side-text '>A revolutionary change that is going to take Pakistan one step closer to being a smart city.</div>
            </div>
            <div className='intro-image-inner-divs intro-image-div2'>
                <div className='small-circle'></div>
                <div className='intro-image-right-side-text '>We installed Sensors in different parts of the city to collect data.</div>
            </div>
            </div>
            <div className='intro-bottom-text'>
                Sensors are installed in different parts of the city to collect
                data related to temperature, humidity and levels of harmful gasses (CO2, CH4, NH3, etc).
                We will use the data collected to visualize different concentrations of pollutants and levels of temperature and humidity in our city areas.
            </div>
        </div>
    )
}

export default Intro