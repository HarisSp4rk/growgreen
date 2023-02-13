import React from 'react'
import AlertProgressBar from './AlertProgressBar'


const ReportsAlert = ({ title, data, backcolor, frontcolor, alertImg }) => {
    return (
        <div className='ReportsAlert-container'>
            <div className='ReportsAlert-innerdiv'>
                <h5>{title}</h5>
                {data.map((element, index) => {
                    return <div key={index} className='ReportsAlert-eachRow'>
                        <img src={alertImg} alt="" />
                        <div className='ReportsAlert-progressbar'>
                            <h6>{element.Area}</h6>
                            <AlertProgressBar percentage={element.percentage} backcolor={backcolor} frontcolor={frontcolor}/>
                        </div>
                        <span><h4>{element.correctness}%</h4>Correct</span>
                    </div>

                })}
            </div>
        </div>
    )
}

export default ReportsAlert