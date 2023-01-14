import React from 'react'
import './ProblemsFacingStyles.css'
import { ProblemsData1, ProblemsData2 } from './ProblemsData'

const ProblemFacingSlider = () => {
  return (
    <div>
      <div className='problemFacing-container'>
        <div className='problemFacing-slider animate' >
          <div className='problemFacing-inner-divs '>
            {ProblemsData1.map((element, index) => {
              return (
                <div key={index}>
                  <img src={element.picture} alt={element.innerText} />
                  <p><span>{element.innerText}</span></p>
                </div>
              )
            })}
          </div>
          <div className='problemFacing-inner-divs'>
            {ProblemsData1.map((element, index) => {
              return (
                <div key={index}>
                  <img src={element.picture} alt={element.innerText} />
                  <p><span>{element.innerText}</span></p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='problemFacing-container'>
        <div className='problemFacing-slider animate' style={{animationDirection:'reverse'}}>
          <div className='problemFacing-inner-divs '>
            {ProblemsData2.map((element, index) => {
              return (
                <div key={index}>
                  <img src={element.picture} alt={element.innerText} />
                  <p><span>{element.innerText}</span></p>
                </div>
              )
            })}
          </div>
          <div className='problemFacing-inner-divs'>
            {ProblemsData2.map((element, index) => {
              return (
                <div key={index}>
                  <img src={element.picture} alt={element.innerText} />
                  <p><span>{element.innerText}</span></p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemFacingSlider