import React from 'react'
import './FooterStyles.css'
import logo from '../../assets/logo.svg'
import { CgPhone } from 'react-icons/cg'
import { AiFillMessage } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import { BsChevronDown } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-top'>
        <h1 className='navbar-logo footer-logo'> <img className='navbar-logoImg' src={logo} alt="GrowGreen-logo" />Grow Green</h1>
        <p>Sensors are installed in different parts of the city to collect <br />
          data related to temperature, humidity and levels of harmful gasses (CO2, CH4, NH3, etc).</p>
        <div>
          <i><CgPhone /></i>
          <i><AiFillMessage /></i>
          <i><SiDiscord /></i>
        </div>
      </div>
      <div className='footer-mid'>
        <div>
          <h4>Explore <i><BsChevronDown /></i></h4>
          <a href="">Home</a>
          <a href="">Our Signals</a>
          <a href="">Affiliates</a>
        </div>
        <div>
          <h4>Quick Links <i><BsChevronDown /></i></h4>
          <a href="">FAQ</a>
          <a href="">Resources</a>
          <a href="">Get Started</a>
        </div>
        <div>
          <h4>Legal <i><BsChevronDown /></i></h4>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Disclaimer</a>
        </div>
        <div>
          <h4>Subscribe to Our Mailing List</h4>
          <input type="text" placeholder='Email' />
          <button>Subscribe</button>
        </div>
      </div>
      <div className='footer-bottom'>
        © All Copyrights Reserved. Grow Green 2022 - 2023
      </div>
    </div>
  )
}

export default Footer