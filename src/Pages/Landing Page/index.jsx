import React from 'react'
import AboutUs from '../../Components/AboutUs'
import Intro from '../../Components/Intro'
import Traffic from '../../Components/Traffic'

const LandingPage = () => {
    return (
        <div style={{ marginTop: '10rem' }}>
            <Intro />
            <AboutUs/>
            <Traffic/>
        </div>
    )
}

export default LandingPage