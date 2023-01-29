import React from 'react'
import { useState } from 'react'
import SideImg from '../../assets/Login/login.svg'
import logo from '../../assets/login/LoginLogo.svg'
import './loginStyles.css'

const LoginPage = () => {
  const [loginData, setLoginData] = useState({email:'', password:''})

  const handleChange = (e) => {
    e.target.name==='login-email'?setLoginData({...loginData, email:'asdf'} ): setLoginData({...loginData, password:'asdf'} );
    console.log(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData)
  }
  return (
    <div className='login-container'>
      <div className='login-container-leftSide' style={{ backgroundImage: `url(${SideImg})` }}>
        {/* <img src={SideImg} alt="Image" /> */}
      </div>
      <div className='login-container-rightSide'>
        <div className='login-logoImg'>
          <img src={logo} alt="" />
        </div>
        <div className='login-innerdiv'>
          <form onSubmit={handleSubmit}>
            <h3>Welcome back</h3>
            <h1>Login to your account</h1>

            <div className='login-input'>
              <label htmlFor="login-email">Email</label>
              <input type="text" name="login-email" id="login-email" onChange={handleChange} placeholder='Enter Email' required/>
            </div>
            <div className='login-input'>
              <label htmlFor="login-password">Password</label>
              <input type="password" name="login-password" id="login-password" onChange={handleChange} placeholder='Enter Password' />
            </div>
            <div className='login-checkBox'>
              <div>
                <input type="checkbox" name="login-checkbox" id="login-checkbox" />
                <label htmlFor="login-checkbox">Remember me</label>
              </div>
              <div>
                <a href="">Forget Password?</a>
              </div>
            </div>
          <button type="submit" >Login Now</button>
          </form>
          <div className='login-JoinFree'>
            Dont have an account? <a href="">Join free today</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage