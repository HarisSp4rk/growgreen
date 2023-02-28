import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import DashboardNavbar from '../../Components/DashboardNavbar'
import './DashboardStyles.css'

const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate('/login')
        }
    }, [])
    return (
        <div className='Dashboard-container'>
            <div className='Dashboard-sideMenu'>
                <DashboardNavbar />
            </div>
            <div className='Dashboard-main'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard