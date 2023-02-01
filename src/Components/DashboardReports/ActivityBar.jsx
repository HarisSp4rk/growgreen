import React from 'react'

const ActivityBar = ({percentage}) => {
  return (
    <div className='ActivityBar-container'><div style={{height:`${percentage}%`}}></div></div>
  )
}

export default ActivityBar