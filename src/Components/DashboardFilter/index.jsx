import React, { useEffect, useState } from 'react'
import { IoMdDownload } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems';
import './DashboardFilterStyles.css'
import '../DashboardReports/DashboardReportsStyles.css'
import '../../Pages/Dashboard/DashboardStyles.css'
import '../DashboardGasTemperature/DashboardTemperatureStyles.css'

import { Circle, CircleMarker, MapContainer, Marker, Popup, TileLayer, Tooltip } from 'react-leaflet';

import '../DashboardActiveSensorsDetails/ActiveSennsorDetailsStyles.css'
import 'leaflet/dist/leaflet.css';

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { filterLocationsData } from './FiltersData';
import { gql, useQuery } from '@apollo/client';

const icon = L.icon({
  iconRetinaUrl: iconMarker,
  iconUrl: iconRetina,
  shadowUrl: iconShadow
});

const Filter_Data = gql`
query filter($area:Int!, $sensor:String!){
  getfilterss(area: $area,sensor: $sensor)
  }
`;

const DashboardFilter = () => {
  const [area, setArea] = useState(1)
  const [sensor, setSensor] = useState("carbondioxide")
  const { loading, error, data } = useQuery(Filter_Data, {
    variables: { area, sensor },
  });
  useEffect(() => {
    if (!loading) {
      console.log(data)
    }
    console.log(typeof (area))
    console.log(error)
  })
  const data1 = {
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
            <select name="area" id="area" value={area} onChange={(e) => setArea(Number(e.target.value))} >
              {filterLocationsData.map((element, index) => {
                return <option key={index} style={{ textTransform: 'capitalize' }} value={index + 1}>Area: {element.name}</option>
              })}
            </select>
          </div>
          <div className='DashboardFilter-dropdown-innerContainer'>
            <select name="sensor" id="sensor" value={sensor} onChange={(e) => { setSensor(e.target.value) }} >
              <option value="carbondioxide">Gas: CO2</option>
              <option value="temperature">Gas: Temperature</option>
              <option value="carbonmonoxide">Gas: CO</option>
              <option value="humidity">Gas: Humidity</option>
              <option value="methane">Gas: Methane</option>
            </select>
          </div>
        </div>
        {error ?
          <form action='https://forms.gle/jjeHGLFmJHn5u5c7A'>
            <button className='Request-NewDevice-button' >Request Device in your Area</button>
          </form>
          : !loading ?
            <>
              <div className='DashboardActiveSensorDetails-openStreets'>
                <MapContainer style={{ height: '100%', width: '100%' }} center={[data.getfilterss.devices[0].data.lat, data.getfilterss.devices[0].data.long]} zoom={11}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  {data.getfilterss.devices.map((element, index) => {
                    return (
                      <Marker key={index} alt='marker' position={[element.data.lat, element.data.long]} icon={icon}>
                        <Popup>
                          <div className='filter-MarkerText'> Sensor Type <b>{sensor}</b> </div>
                          <div className='filter-MarkerText'> Alt <b>{element.data.alt}</b> </div>
                          <div className='filter-MarkerText'> Lat <b>{element.data.lat}</b> </div>
                          <div className='filter-MarkerText'> Long <b>{element.data.long}</b> </div>
                          <div className='filter-MarkerText'> Percentage <b>{(element.data.percentage * 100).toFixed(2)}%</b> </div>
                          <div className='filter-MarkerText'> PPM <b>{element.data.ppm}</b> </div>
                          <div className='filter-MarkerText'> Value <b>{element.data.value}</b> </div>
                          <div className='filter-MarkerText'> Last Heart Beat <b>{element.Last_heart_beat}</b> </div>
                        </Popup>
                      </Marker>
                    )
                  })}

                  <Circle center={[data.getfilterss.devices[0].data.lat, data.getfilterss.devices[0].data.long]} pathOptions={{ color: 'red' }} radius={3200}>
                  </Circle>
                </MapContainer>
              </div>
              <div className='DashboardGasTemperature-container'>
                {['temperature', 'humidity'].includes(sensor) ? null :
                  <div className='DashboardGasTemperature-innerContainer'>
                    <h4>Median PPM</h4>
                    <h1>{data.getfilterss.analytics.aggregations.avg_ppm.values['50.0'].toFixed(4)}</h1>
                  </div>}
                <div className='DashboardGasTemperature-innerContainer'>
                  <h4>{sensor!=='temperature'?'Percentage':'Temperature'}</h4>
                  <h1>{['temperature', 'humidity'].includes(sensor) ? (data.getfilterss.analytics.aggregations.avg_price.values['50.0']).toFixed(1) : (data.getfilterss.analytics.aggregations.avg_price.values['50.0']).toFixed(4)}{sensor!=='temperature'?'%':' C'}</h1>
                </div>
              </div>
            </>
            :
            <div style={{ margin: 'auto' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        }
      </div>
    </div>
  )
}

export default DashboardFilter