import React from 'react'
import AboutUs from '../../Components/AboutUs'
import Intro from '../../Components/Intro'
import ProblemFacing from '../../Components/ProblemsFacing'
import Traffic from '../../Components/Traffic'

const LandingPage = () => {
    return (
        <div >
            <div id='home'>
            <Intro />
            </div>
            <div id='aboutUs'>
            <AboutUs/>
            <Traffic/>
            <ProblemFacing/>
            </div>
        </div>
    )
}

export default LandingPage