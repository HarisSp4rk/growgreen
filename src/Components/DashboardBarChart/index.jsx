import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const DashboardBarChart = ({ title, barChartData }) => {
  const [barData, setBarData] = useState([]);
  useEffect(() => {
    let temp = [];
    title === 'median' ?
      barChartData.forEach((element) => {
        temp.push({
          Median: element.avg_percentage.values['50.0'] === null ? 0 : element.avg_percentage.values['50.0'],
          Date: element.key_as_string.split('T')[0]
        })

      }) : title === 'average' ?
        barChartData.forEach((element) => {
          temp.push({
            Average: element.avg_percentage.value === null ? 0 : element.avg_percentage.value,
            Date: element.key_as_string.split('T')[0]
          })

        }) : null
    temp = title === 'median' ? (temp.filter(value => !!value.Median)) : title === 'average' ? (temp.filter(value => !!value.Average)) : null;
    setBarData(temp)
  }, [barChartData])
  return (
    <div style={{fontSize:'0.6rem'}}>
      <BarChart width={440} height={300} data={barData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={title === "median" ? "Median" : "Average"} fill="rgba(27, 89, 248, 0.7)" />
      </BarChart>
    </div>
  )
}

export default DashboardBarChart