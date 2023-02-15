import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './ActiveSennsorDetailsStyles.css'
import 'leaflet/dist/leaflet.css';

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

const icon = L.icon({ 
    iconRetinaUrl: iconMarker, 
    iconUrl: iconRetina, 
    shadowUrl: iconShadow 
});

const DashboardActiveSensorsDetails = () => {
    const data = {
        "name": "default_gulshan",
        "coordinates": "0101000020E610000025CFF57D38C85040B1C05774EBED3840",
        "long": 67.12845,
        "lat": 24.929375,
        "lastonline": "New Device"

    }
    const location = useLocation();
    // console.log(location.state.id)
    return (
        <div className='dashboardActivitySensors-container'>
            <div className='dashboardActivitySensors-heading'>
                <h2>Sensor Details</h2>
            </div>
            <div className='DashboardActiveSensorsDetails-inner-container'>
                <div className='DashboardActiveSensorsDetails-inner-elements'>
                    <div>Sensor Id : </div><div>{location.state.id}</div>
                </div>
                <div className='DashboardActiveSensorsDetails-inner-elements'>
                    <div>Location : </div><div>{data.name}</div>
                </div>
                <div className='DashboardActiveSensorDetails-openStreets'>

                    <MapContainer style={{ height: '100%', width: '100%' }} center={[data.lat, data.long]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker alt='marker' position={[data.lat, data.long]} icon={icon}>
                            <Popup>
                                Sensor Type <br /> <b>{location.state.sensor_type}</b>
                            </Popup>
                        </Marker>

                    </MapContainer>
                </div>

            </div>
        </div>
    )
}

export default DashboardActiveSensorsDetails