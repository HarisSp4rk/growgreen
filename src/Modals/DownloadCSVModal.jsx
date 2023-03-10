import React, { useState } from 'react'
import { filterLocationsData } from '../Components/DashboardFilter/FiltersData';
import './DownloadCSVModalStyles.css'
import '../Components/DashboardFilter/DashboardFilterStyles.css'
import axios from 'axios';


const DownloadCSVModal = ({ setIsOpen }) => {
    const [noDeviceFound, setNoDeviceFound] = useState(false);
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({
            "sensor_type": e.target.sensor_type.value,
            "by": Number(e.target.RangeLimit.value),
            "area": Number(e.target.area.value)
        })
        setLoading(true);
        await axios.post(`${import.meta.env.VITE_API_URL}/api/services/v1/csv`,
            {
                "sensor_type": e.target.sensor_type.value,
                "by": Number(e.target.RangeLimit.value),
                "area": Number(e.target.area.value)
            },
            {
                responseType: 'blob'
            }
        )
            .then(response => {
                console.log(response.data)
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'data.csv');
                document.body.appendChild(link);
                link.click();
                setLoading(false);
                setIsOpen(false)
                console.log(response);
            })
            .catch(error => {
                setNoDeviceFound(true);
                setLoading(false);
                console.log('There was an error!', error);
                // setIsOpen(false)
                // alert('No Device Found at the Selected Area')

            });

    }
    const handleModalClose=()=>{
        setLoading(false)
        setNoDeviceFound(false)
        setIsOpen(false)
    }
    return (
        <div className='DownloadCSVModal-container' onClick={(e)=>{e.target.className==='DownloadCSVModal-container' ?handleModalClose():null}}>

            {
            noDeviceFound ?
                <div className='DownloadCSVModal-innerContainer' >
                    <div>No Device Found at the area you Currently Selected </div>
                </div> :
                loading ? <div className='DownloadCSVModal-innerContainer'>
                    <div>Downloading CSV ... <br /> (Its gonna take time because of large data set.)</div>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div> :
                    <form onSubmit={handleSubmit}>
                        <div className='DownloadCSVModal-innerContainer' >
                            <div>Download CSV</div>
                            <div className='DownloadCSV-inputSelect'>

                                <select name="sensor_type" id="sensor_type">
                                    <option value="temperature">Temperature</option>
                                    <option value="carbondioxide">CO2</option>
                                    <option value="carbonmonoxide">CO</option>
                                    <option value="humidity">Humidity</option>
                                    <option value="methane">Methane</option>
                                    <option value="allsensors">All Sensors</option>
                                </select>
                                <select name="RangeLimit" id="RangeLimit" >
                                    <option value="1">Past 24 Hours</option>
                                    <option value="2">Past 3 Days</option>
                                    <option value="3">Past Week</option>
                                    <option value="4">Past Month</option>
                                    <option value="5">Past 3 Months</option>
                                </select>
                                <select name="area" id="area" >
                                    {filterLocationsData.map((element, index) => {
                                        return <option key={index} style={{ textTransform: 'capitalize' }} value={index + 1}>Area: {element.name}</option>
                                    })}
                                </select>
                            </div>
                            <button className='Request-NewDevice-button' style={{ margin: 0 }} type="submit">Download</button>
                        </div>
                    </form>
            }
        </div>
    )
}

export default DownloadCSVModal