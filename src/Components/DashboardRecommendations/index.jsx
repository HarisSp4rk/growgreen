import React, { useContext, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems';
import '../../Pages/Dashboard/DashboardStyles.css'
import { RecommendationsContext } from '../../Contexts/RecommendationsContext';
import '../DashboardGasTemperature/DashboardtemperatureStyles.css'
import '../DashboardFilter/DashboardFilterStyles.css'

const DashboardRecommendations = () => {
  const {recommendation, userGasesData} = useContext(RecommendationsContext);
  console.log(userGasesData)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='dashboardActivitySensors-container'>
      <div className='dashboardActivitySensors-heading'>
        <div className='dashboard-hamburger-icon' onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}><RxHamburgerMenu /></div>
        <h2>Recommendations</h2>
        <div>
          {/* <IoMdDownload />Download */}
        </div>
      </div>
      <div className='dashboard-mobile-menuItems' style={{ display: mobileMenuOpen ? 'flex' : 'none' }}>
        <div className='dashboardNavbar-menuItems'>
          <ul>
            {DashboardMenuItems.map((element, index) => {
              return <li key={index}> <NavLink to={'../' + element.link} className="dashboard-NavLinks"><span>{element.icon}</span><span>{element.name}</span></NavLink></li>
            })}
          </ul>
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer' style={{width:'100%', padding:'2rem', justifyContent:'center'}}>
          <p>{recommendation}</p>
          {/* <form action='https://forms.gle/jjeHGLFmJHn5u5c7A'>
            <button className='Request-NewDevice-button' >Request Device in your Area</button>
          </form> */}
          <button className='Request-NewDevice-button' onClick={()=>{window.open('https://forms.gle/jjeHGLFmJHn5u5c7A','_blank')}}>Request Device in your Area</button>
          {/* <h1>{userGasesData.NH4===null?'-':userGasesData.NH4}</h1> */}
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Temperature</h4>
          <h1>{userGasesData.temp===null?'-':userGasesData.temp}</h1>
        </div>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Humidity</h4>
          <h1>{userGasesData.humidity===null?'-':userGasesData.humidity}</h1>
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>CO2</h4>
          <h1>{userGasesData.CO2===null?'-':userGasesData.CO2}</h1>
        </div>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>CO</h4>
          <h1>{userGasesData.CO===null?'-':userGasesData.CO}</h1>
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>NH4</h4>
          <h1>{userGasesData.NH4===null?'-':userGasesData.NH4}</h1>
        </div>
      </div>
      
    </div>
  )
}

export default DashboardRecommendations