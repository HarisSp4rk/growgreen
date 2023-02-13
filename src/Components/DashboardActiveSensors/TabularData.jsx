import React from 'react'

const TabularData = ({ SensorsData }) => {
    return (
        <div className='ActiveSensors-TabularData-container'>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Sensor Type</th>
                        <th>Available</th>
                    </tr>
                </thead>
                <tbody>
                    {SensorsData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.sensor_type}</td>
                            <td className='ActiveSensors-Availability' ><div style={{ backgroundColor:item.available==="1"?'rgb(29 218 29)':item.available==="0"?'red':null}}></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabularData