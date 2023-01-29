import React from 'react'
import { useState } from 'react'
import SideImg from '../../assets/Login/login.svg'
import logo from '../../assets/Login/LoginLogo.svg'
import { Link } from "react-router-dom";
import './loginStyles.css'

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    e.target.name === 'login-email' ? setLoginData({ ...loginData, email: e.target.value }) : setLoginData({ ...loginData, password: e.target.value });
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
          <Link to="/"><img src={logo} alt="" /></Link>
        </div>
        <div className='login-innerdiv'>
          <form onSubmit={handleSubmit}>
            <h3>Welcome back</h3>
            <h1>Login to your account</h1>

            <div className='login-input'>
              <label htmlFor="login-email">Email</label>
              <input type="email" name="login-email" id="login-email" onChange={handleChange} placeholder='Enter Email' required />
            </div>
            <div className='login-input'>
              <label htmlFor="login-password">Password</label>
              <input type="password" name="login-password" id="login-password" onChange={handleChange} placeholder='Enter Password' required />
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
            Dont have an account? <Link to={'/signup'}>Join free today</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage