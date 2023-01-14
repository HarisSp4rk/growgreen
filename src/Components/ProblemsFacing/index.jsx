import React from 'react'
import ProblemFacingSlider from './ProblemFacingSlider'
import bg from '../../assets/Problem_facing_background.svg'

const ProblemFacing = () => {
  return (
    <div>
        <div className='problemfacing-backgroundImage'>
        <img src={bg} alt="Problemfacing-Pic" />
        </div>
        <h1 className='ProblemFacing-heading'>Problems Facing by Society</h1>
        <ProblemFacingSlider/>
    </div>
  )
}

export default ProblemFacing