import React from 'react'
import './DevicesPlacedStyle.css'
import DevicesPlacedToCollectData from '../../assets/DevicesPlaced.svg'

const DevicesPlaced = () => {
  return (
    <div className='DevicesPlaced-container'>
        <h1>We placed our devices in many areas to collect data</h1>
        <img src={DevicesPlacedToCollectData} alt="Devices Placed" />
    </div>
  )
}

export default DevicesPlaced