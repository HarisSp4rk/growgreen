import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems';
import './DashboardCorelationsStyles.css'
const DashboardCorelations = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='dashboardActivitySensors-container'>
      <div className='dashboardActivitySensors-heading'>
        <div className='dashboard-hamburger-icon' onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}><RxHamburgerMenu /></div>
        <h2>Co-Relations</h2>
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
      <div className='DashboardCorelations-container'>

      <h1 style={{fontSize:'5rem',}}>Comming Soon ...</h1>
      </div>
    </div>
  )
}

export default DashboardCorelations