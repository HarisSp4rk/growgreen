import {AiOutlineRise} from 'react-icons/ai'
import {BsFillLightningChargeFill} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import { MdAssignment } from "react-icons/md"
import {IoSettingsSharp} from 'react-icons/io5'
import {GoSignOut} from 'react-icons/go'


export const DashboardMenuItems = [
    {
        name: 'Reports', 
        icon: <AiOutlineRise/>,
        link: 'reports'
    },
    {
        name: 'Filter', 
        icon: <BsFillLightningChargeFill/>,
        link: 'filter'
    },
    {
        name: 'Co-Relations', 
        icon: <HiUsers/>,
        link: 'corelations'
    },
    {
        name: 'Active Sensors', 
        icon: <MdAssignment/>,
        link: 'activesensors'
    },
    {
        name: 'Settings', 
        icon: <IoSettingsSharp/>,
        link: 'settings'
    },
    {
        name: 'Sign Out', 
        icon: <GoSignOut/>,
        link: 'xyz'
    }
]