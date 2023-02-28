import React, { useEffect, useState } from 'react'
import { SensorsData } from './SensorsData'
import TabularData from './TabularData'
import './ActivitySensorsStyles.css'
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems'
import { NavLink } from 'react-router-dom'
import '../../Pages/Dashboard/DashboardStyles.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdDownload } from 'react-icons/io'
import { gql, useQuery } from '@apollo/client'
import '../../App.css'

const GET_SENSORS = gql`
query sensors{
  getdevicesstatus
}
`;

const DashboardActiveSensors = () => {
  const { loading, error, data } = useQuery(GET_SENSORS);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading) return <div style={{ marginTop: '10rem', height:'100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
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
        <TabularData SensorsData={error?SensorsData:data.getdevicesstatus} />
      </div>
    </div>
  )
}

export default DashboardActiveSensors