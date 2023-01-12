import React, { useState } from 'react'
import './NavbarStyles.css'
import logo from '../../assets/logo.svg'
import { MenuItems } from './MenuItems'
import {RxHamburgerMenu} from 'react-icons/rx'
import {GrFormClose} from 'react-icons/gr'


const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className='NavbarItems'>
        <h1 className='navbar-logo'> <img className='navbar-logoImg' src={logo}  alt="GrowGreen-logo" />Grow Green</h1>
        <div className='menu-icons' onClick={()=>{setClicked(!clicked)}}>
          { clicked ? <GrFormClose/> : <RxHamburgerMenu/> }
        </div>
        <ul className={clicked?'nav-menu active':'nav-menu'}>
          {MenuItems.map((element, index)=>{
            return <li key={index} > <a className={element.cName} href='/'>{element.icon?element.icon:null}{element.title}</a> </li>
          })}
        </ul>
    </nav>
  )
}

export default Navbar