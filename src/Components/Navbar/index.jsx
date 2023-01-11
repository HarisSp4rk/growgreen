import React from 'react'
import './NavbarStyles.css'
import logo from '../../assets/logo.svg'
import { MenuItems } from './MenuItems'

const Navbar = () => {
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'> <img className='navbar-logoImg' src={logo}  alt="GrowGreen-logo" />Grow Green</h1>
        <ul className='nav-menu'>
          {MenuItems.map((element, index)=>{
            return <li key={index} > <a className={element.cName} href='/'>{element.icon?element.icon:null}{element.title}</a> </li>
          })}
        </ul>
    </nav>
  )
}

export default Navbar