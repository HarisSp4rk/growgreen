import React from 'react'
import AboutUs from '../../Components/AboutUs'
import DevicesPlaced from '../../Components/DevicesPlaced'
import HaveAnyQuery from '../../Components/HaveAnyQuery'
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
            <DevicesPlaced/>
            <HaveAnyQuery/>
            </div>
        </div>
    )
}

export default LandingPage