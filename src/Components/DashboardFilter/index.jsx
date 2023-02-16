import React, { useState } from 'react'
import { IoMdDownload } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems';
import './DashboardFilterStyles.css'
import '../DashboardReports/DashboardReportsStyles.css'
import '../../Pages/Dashboard/DashboardStyles.css'
import { Circle, CircleMarker, MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';

import '../DashboardActiveSensorsDetails/ActiveSennsorDetailsStyles.css'
import 'leaflet/dist/leaflet.css';

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const icon = L.icon({
  iconRetinaUrl: iconMarker,
  iconUrl: iconRetina,
  shadowUrl: iconShadow
});

const DashboardFilter = () => {
  const data = {
    "name": "default_gulshan",
    "coordinates": "0101000020E610000025CFF57D38C85040B1C05774EBED3840",
    "long": 67.12845,
    "lat": 24.929375,
    "lastonline": "New Device"
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className='dashboardReports-container'>
      <div className='dashboardReports-heading'>
        <div className='dashboard-hamburger-icon' onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}><RxHamburgerMenu /></div>
        <h2>Filter</h2>
        <div>
          {/* <button><IoMdDownload />Download</button> */}
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

      <div className='DashboardFilter-container'>
        <div className='DashboardFilter-dropdown-filter'>
          <div className='DashboardFilter-dropdown-innerContainer'>
            <div>
              Location: Karachi
            </div>

          </div>
          <div className='DashboardFilter-dropdown-innerContainer'>
            <select name="Location" id="Location">
              <option value="">Area: Gulshan</option>
              <option value="">Area: North karachi</option>
              <option value="">Area: Saddar</option>
            </select>
          </div>
          <div className='DashboardFilter-dropdown-innerContainer'>
            <select name="Location" id="Location">
              <option value="">Gas: CO2</option>
              <option value="">Gas: Temperature</option>
              <option value="">Gas: CO</option>
              <option value="">Gas: Humidity</option>
              <option value="">Gas: Methane</option>
            </select>
          </div>
        </div>
        <div className='DashboardActiveSensorDetails-openStreets'>

          <MapContainer style={{ height: '100%', width: '100%' }} center={[data.lat, data.long]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker alt='marker' position={[data.lat, data.long]} icon={icon}>
              <Popup>
                Sensor Type <br /> <b>{data.name}</b>
              </Popup>
            </Marker>
            <Marker alt='marker' position={[data.lat + 0.01, data.long + 0.01]} icon={icon}>
              <Popup>
                Sensor Type <br /> <b>{data.name}</b>
              </Popup>
            </Marker>
            <Marker alt='marker' position={[data.lat + 0.001, data.long - 0.01]} icon={icon}>
              <Popup>
                Sensor Type <br /> <b>{data.name}</b>
              </Popup>
            </Marker>
            <Circle center={[data.lat, data.long]} pathOptions={{ color: 'red' }} radius={1500}>
            </Circle>
          </MapContainer>
        </div>
      </div>
    </div>
  )
}

export default DashboardFilter