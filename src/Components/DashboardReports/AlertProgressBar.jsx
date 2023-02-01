import React from 'react'

const AlertProgressBar = ({percentage, backcolor, frontcolor}) => {
  return (
    <div className='alertProgressBar-container' style={{background:backcolor}}><div style={{width:`${percentage}%`, background:frontcolor}}></div></div>
  )
}

export default AlertProgressBar