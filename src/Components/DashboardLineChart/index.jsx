import React from 'react'
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { useEffect, useState } from 'react';
import './LineChartStyles.css'

const DashboardLineChart = ({title,  array }) => {
  const [lineChartData, setLineChartData] = useState([])
  useEffect(() => {
    let lineData = []

    array.forEach((element) => {
      let temp = {}
      // temp.date=element.key_as_string;
      temp.date = element.key_as_string;
      title==='median'?(
        temp.Median = element.avg_percentage.values['50.0'] == null ? 0 : element.avg_percentage.values['50.0']
        ):
      title==='average'?(
        temp.Average = element.avg_percentage.value == null ? 0 : element.avg_percentage.value
        ):null
      lineData.push(temp)
    })
    lineData = title==='median'?(lineData.filter(value => !!value.Median)):title==='average'?(lineData.filter(value => !!value.Average)):null;

    setLineChartData(lineData)
  }, [array])
  return (
    <div className='DashboardLineChart-container'>
      <ResponsiveContainer aspect={screen.width>1500?2:1.59}>
        <LineChart data={lineChartData}>
          <CartesianGrid />
          <XAxis dataKey="date"
            interval={'preserveStartEnd'} />
          <YAxis  />
          <Legend />
          <Tooltip />
          <Line dataKey={title==='median'?"Median":title==='average'?"Average":null}
            stroke="rgba(27, 89, 248, 0.8)" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DashboardLineChart