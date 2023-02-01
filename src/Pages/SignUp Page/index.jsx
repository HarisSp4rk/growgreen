import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SideImg from '../../assets/Login/login.svg'
import logo from '../../assets/Login/LoginLogo.svg'
import { gql,  useMutation } from '@apollo/client';
import './SignUpStyles.css'


const User_Register = gql`
  mutation UserRegister ($name: String!,$email: String!,$password: String!, $confirmPassword: String!){
    register(registerInput: {
        name: $name,
        password: $password,
        confirmPassword: $confirmPassword,
        email: $email
    }) {
        id
        token
        name
        email
    }
}


`;

const SignUpPage = () => {
  const [register, { data, loading, error }] = useMutation(User_Register);
  useEffect(()=>{console.log(data)},[data])
  const [signUpData, setSignUpData] = useState({name:'', email:'', password:'', confirmPassword:''})

  const handleChange = (e) => {
    e.target.name==='signUp-email'?setSignUpData({...signUpData, email:e.target.value} ):e.target.name==='signUp-name'? setSignUpData({...signUpData, name:e.target.value} ): e.target.name==='signUp-confirmPassword'? setSignUpData({...signUpData, confirmPassword:e.target.value} ):setSignUpData({...signUpData, password:e.target.value} );
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await register({ variables: { name:signUpData.name, password: signUpData.password, confirmPassword: signUpData.confirmPassword, email: signUpData.email  } });
      console.log(signUpData)
      console.log(error, '123123')
      console.log(loading)
    } catch (error) {
      console.log((error.message))
    }
    console.log(signUpData);
  }
  if (loading) return <p>Loading...</p>;
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
          <div className='signUp-JoinFree'>
            Already have an account? <Link to={'/login'}>Log In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage