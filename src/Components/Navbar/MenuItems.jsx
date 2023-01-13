import { CgProfile } from 'react-icons/cg';

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
        icon:<CgProfile style={{fontSize: '1.5rem',position:' relative',top: '0.3rem',marginRight: '0.2rem'}}/>
    },
]