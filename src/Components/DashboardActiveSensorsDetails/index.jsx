import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import './ActiveSennsorDetailsStyles.css'
import 'leaflet/dist/leaflet.css';
import '../DashboardFilter/DashboardFilterStyles.css'

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import { gql, useQuery } from '@apollo/client';
import '../../App.css'

const icon = L.icon({
    iconRetinaUrl: iconMarker,
    iconUrl: iconRetina,
    shadowUrl: iconShadow
});

const GET_SENSOR_DETAILS = gql`
query sensorDetails ($id:ID! , $sensor_type: String!){
    devicebyId(id: $id, sensor_type:$sensor_type){
        id
        sensor_type
        group
    }
    }
`;

const DashboardActiveSensorsDetails = () => {
    // const data = {
    //     "name": "default_gulshan",
    //     "coordinates": "0101000020E610000025CFF57D38C85040B1C05774EBED3840",
    //     "long": 67.12845,
    //     "lat": 24.929375,
    //     "lastonline": "New Device"

    // }
    const location = useLocation();
    const [id, setId] = useState(location.state.id)
    const [sensor_type, setSensorType] = useState(location.state.sensor_type)
    const { loading, error, data } = useQuery(GET_SENSOR_DETAILS, {
        variables: { id, sensor_type },
    });
    const [sensorData, setSensorData] = useState({ id: '', name: '', sensor_type: '', last_heart_beat: 0, long: 0, lat: '', data: null })
    useEffect(() => {
        console.log(data)
        let temp = { ...sensorData }
        console.log(temp)
        if (!loading) {
            temp.id = location.state.id;
            temp.sensor_type = location.state.sensor_type;
            temp.name = data.devicebyId.group.name;
            temp.name.includes('default_') ? temp.name = temp.name.split('_')[1] : null;
            temp.lat = data.devicebyId.group.lastheartbeat.data.lat;
            temp.long = data.devicebyId.group.lastheartbeat.data.long;
            let timee = (data.devicebyId.group.lastheartbeat.Last_heart_beat).split("T");
            console.log(timee, 'asdf')
            temp.last_heart_beat = timee[0] + ' ' + timee[1].slice(0, 8);
            temp.data = data.devicebyId.group.lastheartbeat.data;
            setSensorData(temp)
        }
    }, [data])
    // console.log(location.state.id)
    if (loading) return <div style={{ marginTop: '10rem', height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

    return (
        <div className='dashboardActivitySensors-container'>
            <div className='dashboardActivitySensors-heading'>
                <h2>Sensor Details</h2>
            </div>
            <div className='DashboardActiveSensorsDetails-inner-container'>
                <div className='DashboardActiveSensorsDetails-inner-elements'>
                    <div>Sensor Id: </div><div>{location.state.id}</div>
                </div>
                <div className='DashboardActiveSensorsDetails-inner-elements'>
                    <div>Sensor Type: </div><div>{location.state.sensor_type}</div>
                </div>
                <div className='DashboardActiveSensorsDetails-inner-elements'>
                    <div>Location: </div><div style={{ textTransform: 'capitalize', color: sensorData.name === '' ? 'red' : null }}>{sensorData.name === '' ? 'Error' : sensorData.name}</div>
                </div>
                <div className='DashboardActiveSensorsDetails-inner-elements'>
                    <div>Last Heart Beat: </div><div>{sensorData.last_heart_beat}</div>
                </div>
                {sensorData.long !== 0 & location.state.available ? <div className='DashboardActiveSensorDetails-openStreets'>

                    <MapContainer style={{ height: '100%', width: '100%' }} center={[sensorData.lat, sensorData.long]} zoom={13} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker alt='marker' position={[sensorData.lat, sensorData.long]} icon={icon}>
                            <Popup>
                                alt: <b>{sensorData.data.alt} </b> <br />
                                lat: <b>{sensorData.data.lat} </b> <br />
                                long: <b>{sensorData.data.long} </b> <br />
                                percentage: <b>{sensorData.data.percentage} </b> <br />
                                ppm: <b>{sensorData.data.ppm} </b> <br />
                                value: <b>{sensorData.data.value} </b> <br />
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                    : !location.state.available ?
                        <form action='https://forms.gle/dZMeX5ofW82iu8qSA'>
                            <button className='Request-NewDevice-button' >Report Inactive Sensor</button>
                        </form>
                        :
                        <div style={{ marginTop: '10rem', height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                }

            </div>
        </div>
    )
}

export default DashboardActiveSensorsDetails