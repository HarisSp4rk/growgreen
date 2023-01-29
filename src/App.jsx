import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/Landing Page'
import LoginPage from './Pages/Login Page'
import SignUpPage from './Pages/SignUp Page';
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App