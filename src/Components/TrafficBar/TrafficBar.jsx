import React from 'react'
import './TrafficBarStyles.css'
import Country1 from '../../assets/CountryFlags/Country1.svg'

const TrafficBar = ({flag, traffic}) => {
  return (
    <div className='trafficBar-container'>
        <img src={flag} alt="flag" />
        <div className='progress-bar' style={{width:`${(traffic*80)/600}%`}}>
            <div className='progress-bar-stats'>
                <div className='progress-bar-stats-inner-div'>{traffic}</div>
            </div>
        </div>
    </div>
  )
}

export default TrafficBar