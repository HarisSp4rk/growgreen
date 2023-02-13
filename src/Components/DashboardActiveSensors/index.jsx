import React from 'react'
import { IoMdDownload } from 'react-icons/io'
import { SensorsData } from './SensorsData'
import TabularData from './TabularData'
import './ActivitySensorsStyles.css'


const DashboardActiveSensors = () => {
  return (
    <div className='dashboardActivitySensors-container'>
      <div className='dashboardActivitySensors-heading'>
        <h2>Active Sensors</h2>
        {/* <button><IoMdDownload />Download</button> */}
      </div>
      <div className='dashboardActivitySensors-Table'>
        <TabularData SensorsData={SensorsData}/>
      </div>
    </div>
  )
}

export default DashboardActiveSensors