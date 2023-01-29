import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import LandingPage from './Pages/Landing Page'


import './App.css'
import LoginPage from './Pages/Login Page'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
        {/* <Navbar/>
        <LandingPage/>  */}
        {/* <LoginPage/> */}
      </BrowserRouter>
    </div>
  )
}

export default App