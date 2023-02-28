import React from 'react'

const ActivityBar = ({sensor_type, percentage}) => {
  return (
    <>
    <div className='ActivityBar-container'><div className='ActivityBar-innerContainer' style={{height:(['carbonmonoxide']).includes(sensor_type)?`${percentage.toFixed(3)*20000}%`:(['carbondioxide']).includes(sensor_type)?`${percentage.toFixed(3)*1000}%`:(['methane']).includes(sensor_type)?`${percentage.toFixed(3)*1000}%`:`${percentage}%`}}></div></div>
    </>
  )
}

export default ActivityBar