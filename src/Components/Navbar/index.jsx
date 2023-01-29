import React, { useState } from 'react'
import './NavbarStyles.css'
import logo from '../../assets/logo.svg'
import { MenuItems } from './MenuItems'
import {RxHamburgerMenu} from 'react-icons/rx'
import {GrFormClose} from 'react-icons/gr'
import { Link } from 'react-scroll'


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
            return <li style={{cursor:'pointer'}} key={index} > {element.title!=='Log In'?<Link to={element.url} spy={true} smooth={true} offset={50} duration={500} className={element.cName} >{element.icon?element.icon:null}{element.title}</Link>:element.tag }</li>
          })}
        </ul>
    </nav>
  )
}

export default Navbar