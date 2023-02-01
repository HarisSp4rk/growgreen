import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/Landing Page'
import LoginPage from './Pages/Login Page'
import SignUpPage from './Pages/SignUp Page';
import './App.css'
import Dashboard from './Pages/Dashboard';
import DashboardReports from './Components/DashboardReports';
import DashboardFilter from './Components/DashboardFilter';
import DashboardRecommendations from './Components/DashboardRecommendations';
import DashboardCorelations from './Components/DashboardCorelations';
import DashboardSettings from './Components/DashboardSettings';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard/" element={<Dashboard/>} >
            <Route index element={<DashboardReports/>}/> 
            <Route path='reports' element={<DashboardReports/>}/> 
            <Route path='filter' element={<DashboardFilter/>}/> 
            <Route path='corelations' element={<DashboardCorelations/>}/> 
            <Route path='recommendations' element={<DashboardRecommendations/>}/> 
            <Route path='settings' element={<DashboardSettings/>}/> 
          </Route>
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App