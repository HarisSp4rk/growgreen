import React from 'react'

const ActivityBar = ({sensor_type, percentage}) => {
  return (
    <div className='ActivityBar-container'><div style={{height:(['methane','carbondioxide','carbonmonoxide']).includes(sensor_type)?`${percentage.toFixed(3)*10000}%`:`${percentage}%`}}></div></div>
  )
}

export default ActivityBar