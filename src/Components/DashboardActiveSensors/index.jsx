import React, { useState } from 'react'
import { SensorsData } from './SensorsData'
import TabularData from './TabularData'
import './ActivitySensorsStyles.css'
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems'
import { NavLink } from 'react-router-dom'
import '../../Pages/Dashboard/DashboardStyles.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdDownload } from 'react-icons/io'

const DashboardActiveSensors = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='dashboardActivitySensors-container'>
      <div className='dashboardActivitySensors-heading'>
        <div className='dashboard-hamburger-icon' onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}><RxHamburgerMenu /></div>
        <h2>Active Sensors</h2>
        <div>
          {/* <IoMdDownload />Download */}
          </div>
      </div>
      <div className='dashboard-mobile-menuItems' style={{ display: mobileMenuOpen ? 'flex' : 'none' }}>
        <div className='dashboardNavbar-menuItems'>
          <ul>
            {DashboardMenuItems.map((element, index) => {
              return <li key={index}> <NavLink to={'../' + element.link} className="dashboard-NavLinks"><span>{element.icon}</span><span>{element.name}</span></NavLink></li>
            })}
          </ul>
        </div>
      </div>
      <div className='dashboardActivitySensors-Table'>
        <TabularData SensorsData={SensorsData} />
      </div>
    </div>
  )
}

export default DashboardActiveSensors