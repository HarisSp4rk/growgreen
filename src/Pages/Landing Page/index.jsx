import axios from 'axios'
import React, { useEffect } from 'react'
import AboutUs from '../../Components/AboutUs'
import DevicesPlaced from '../../Components/DevicesPlaced'
import Footer from '../../Components/Footer'
import HaveAnyQuery from '../../Components/HaveAnyQuery'
import Intro from '../../Components/Intro'
import Navbar from '../../Components/Navbar'
import ProblemFacing from '../../Components/ProblemsFacing'
import Traffic from '../../Components/Traffic'


const LandingPage = () => {
    useEffect(() => {
        axios.post(
            'https://55eb-111-88-125-36.eu.ngrok.io/api/services/v1/recommend',
         {
           "long": 67.0167,
            "lat": 24.8532
        })
            .then(response => {
                console.log(response.data)
                // do something with JSON response data
            })
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
        });
    }, [])
    return (
        <div >
            <Navbar />
            <div id='home'>
                <Intro />
            </div>
            <div id='aboutUs'>
                <AboutUs />
                <Traffic />
                <ProblemFacing />
                <DevicesPlaced />
                <HaveAnyQuery />
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage