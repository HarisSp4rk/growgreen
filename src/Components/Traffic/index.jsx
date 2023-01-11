import React from 'react'
import TrafficBar from '../TrafficBar/TrafficBar'
import { FlagsData } from './FlagsData'
import './TrafficStyles.css'
import bg from '../../assets/Asthma.svg'


const Traffic = () => {
    return (
        <div className='description-container'>
            <div className='traffic-bg' >
                <img src={bg} alt="bg" />
            </div>
            <div className='description-container-left-side'>
                <h1>Where Traffic Fumes Lead To Asthma</h1>
                <div className='all-traffic-bars'>
                    {FlagsData.map((element, index) => {
                        return <TrafficBar key={index} flag={element.flag} traffic={element.traffic} />
                    })}
                </div>
            </div>
            <div className='description-container-right-side'>
                <h1>4</h1>
                <h2>Million</h2>
                <p>Annual number of children developing asthma due to traffic pollution</p>
            </div>
        </div>

    )
}

export default Traffic