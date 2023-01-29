import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Pages/Landing Page'
import './App.css'
import LoginPage from './Pages/Login Page'

const App = () => {
  return (
    <div className='App'>
      {/* <Navbar/>
      <LandingPage/>  */}
      <LoginPage/>
    </div>
  )
}

export default App