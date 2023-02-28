import {AiOutlineRise} from 'react-icons/ai'
import {BsFillLightningChargeFill} from 'react-icons/bs'
import {HiUsers} from 'react-icons/hi'
import { MdAssignment, MdAir, MdOutlineLocalFireDepartment } from "react-icons/md"
import {IoSettingsSharp} from 'react-icons/io5'
import {GoSignOut} from 'react-icons/go'
import {FaTemperatureHigh} from 'react-icons/fa'
import {WiHumidity} from 'react-icons/wi'


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
        name: 'Temperature', 
        icon: <FaTemperatureHigh/>,
        link: 'temperature'
    },
    {
        name: 'CO2', 
        icon: <MdAir/>,
        link: 'co2'
    },
    {
        name: 'CO', 
        icon: <MdAir/>,
        link: 'co'
    },
    {
        name: 'Humidity', 
        icon: <WiHumidity/>,
        link: 'humidity'
    },
    {
        name: 'Methane', 
        icon: <MdOutlineLocalFireDepartment/>,
        link: 'methane'
    },
    {
        name: 'Recommendations', 
        icon: <IoSettingsSharp/>,
        link: 'recommendations'
    },
    {
        name: 'Sign Out', 
        icon: <GoSignOut/>,
        link: '../../#home'
    }
]