import { CgProfile } from 'react-icons/cg';
import { Link } from "react-router-dom";

export const MenuItems = [
    {
        title: "Home",
        url: "home",
        cName: "nav-links",
    },
    {
        title: "Dashboard",
        url: "/dashboard",
        cName: "nav-links",
        tag:<Link to={'/dashboard'} className='nav-links'>Dashboard</Link>
    },
    {
        title: "About Us",
        url: "aboutUs",
        cName: "nav-links",
    },
    {
        title: "Log In",
        url: "/login",
        cName: "nav-link-login",
        tag: <Link to={'/login'} className='nav-link-login' ><CgProfile style={{fontSize: '1.5rem',position:' relative',top: '0.3rem',marginRight: '0.2rem'}}/>Log In</Link>,
        icon:<CgProfile style={{fontSize: '1.5rem',position:' relative',top: '0.3rem',marginRight: '0.2rem'}}/>
    },
]