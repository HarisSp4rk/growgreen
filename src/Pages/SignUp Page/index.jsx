import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SideImg from '../../assets/Login/login.svg'
import logo from '../../assets/Login/LoginLogo.svg'
import './SignUpStyles.css'

const SignUpPage = () => {
  const [signUpData, setSignUpData] = useState({name:'', email:'', password:'', confirmPassword:''})

  const handleChange = (e) => {
    e.target.name==='signUp-email'?setSignUpData({...signUpData, email:e.target.value} ): setSignUpData({...signUpData, password:e.target.value} );
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUpData)
  }
  return (
    <div className='signUp-container'>
      <div className='signUp-container-leftSide' style={{ backgroundImage: `url(${SideImg})` }}>
      </div>
      <div className='signUp-container-rightSide'>
        <div className='signUp-logoImg'>
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className='signUp-innerdiv'>
          <form onSubmit={handleSubmit}>
            <h1>Sign Up your Account</h1>
            <div className='signUp-input'>
              <label htmlFor="signUp-name">Name</label>
              <input type="text" name="signUp-name" id="signUp-name" onChange={handleChange} placeholder='Enter Name' required/>
            </div>
            <div className='signUp-input'>
              <label htmlFor="signUp-email">Email</label>
              <input type="email" name="signUp-email" id="signUp-email" onChange={handleChange} placeholder='Enter Email' required/>
            </div>
            <div className='signUp-input'>
              <label htmlFor="signUp-password">Password</label>
              <input type="password" name="signUp-password" id="signUp-password" onChange={handleChange} placeholder='Enter Password' required/>
            </div>
            <div className='signUp-input'>
              <label htmlFor="signUp-confirmPassword">Confirm Password</label>
              <input type="confirmPassword" name="signUp-confirmPassword" id="signUp-confirmPassword" onChange={handleChange} placeholder='Enter Confirm Password' required/>
            </div>
          <button type="submit" >Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage