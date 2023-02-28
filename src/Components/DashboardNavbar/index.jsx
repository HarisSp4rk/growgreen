import React from 'react'
import logo from '../../assets/logo.svg'
import './DashboardNavbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { DashboardMenuItems } from './DashboardNavebarMenuItems'

const DashboardNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className='dashboardNavbar-container'>
      <div className='dashboardNavbar-logo' onClick={() => { navigate('../../#home') }}>
        <img src={logo} alt="" />
        <h2>Grow Green</h2>
      </div>
      <div className='dashboardNavbar-menuItems'>
        <ul>
          {DashboardMenuItems.map((element, index) => {
            return <li key={index}> <NavLink to={element.link} className="dashboard-NavLinks"><span>{element.icon}</span><span>{element.name}</span></NavLink></li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default DashboardNavbar