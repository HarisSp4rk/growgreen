import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardNavbar from '../../Components/DashboardNavbar'
import './DashboardStyles.css'

const Dashboard = () => {
    return (
        <div className='Dashboard-container'>  
            <div className='Dashboard-sideMenu'>
                <DashboardNavbar />
            </div>
            <div className='Dashboard-main'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard