import React, { useState } from 'react'
import { useEffect } from 'react'
// import React, { Suspense, lazy } from 'react'
// const ReportsAlert = lazy(() => import('./ReportsAlert'))
import { IoMdDownload } from 'react-icons/io'
import ActivityBar from './ActivityBar'
import { ActivityData } from './ActivityData'
import './DashboardReportsStyles.css'
import ReportsAlert from './ReportsAlert'
import { DangerAlertData, SafeAlertData } from './ReportsAlertData'
import { reportsData } from './reportsData'
import { gql, useQuery } from '@apollo/client';
import safe from '../../assets/ReportsAlert/safe.jpg'
import danger from '../../assets/ReportsAlert/danger.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems'
import '../DashboardNavbar/DashboardNavbar.css'
import '../../Pages/Dashboard/DashboardStyles.css'
import '../../App.css'
import DownloadCSVModal from '../../Modals/DownloadCSVModal'


const GET_SENSORS = gql`
query dashboard($by: Int!, $sensor_type: String!){
  getonlinedevices
  getdashboard(by: $by)
  getgraph(sensor_type: $sensor_type)
}
`;


const DashboardReports = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const [by, setBy] = useState(1)
  const [sensor_type, setSensorType] = useState("temperature")
  const [mappingReportsData, setMappingReportsData] = useState(reportsData)
  const [mappingBarChartData, setMappingBarChartData] = useState(ActivityData)
  // const { loading, error, data } = useQuery(GET_SENSORS);
  const { loading, error, data } = useQuery(GET_SENSORS, {
    variables: { by, sensor_type },
  });
  useEffect(() => {
    loading ? console.log('loading...') : console.log(data)
    if (!loading) {
      console.log(data)
      let temperature = data.getdashboard.temperature.aggregations.avg_price.values['50.0'];
      let CO2 = data.getdashboard.carbondioxide.aggregations.avg_price.values['50.0'];
      let CO = data.getdashboard.carbonmonoxide.aggregations.avg_price.values['50.0'];
      let humidity = data.getdashboard.humidity.aggregations.avg_price.values['50.0'];
      let methane = data.getdashboard.methane.aggregations.avg_price.values['50.0'];
      let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      let temp = []
      console.log(data.getgraph.buckets.length)
      for (let i = 0; i < data.getgraph.buckets.length; i++) {
        temp.push({ month: months[parseInt(data.getgraph.buckets[i].key_as_string.split("-")[1], 10) - 1], percentage: data.getgraph.buckets[i].avg_percentage.value == null ? 0 : data.getgraph.buckets[i].avg_percentage.value })
      }
      console.log(temp)
      setMappingBarChartData(temp)
      // let month_index = parseInt(data.getgraph.buckets[0].key_as_string.split("-")[1], 10) - 1;
      // let temp = [...ActivityBar]
      // months.forEach((element, index)=>{
      //   temp.month===element?temp.percentage=data.getgraph.buckets[index+1].key_as_string.split("-"):null;
      // })
      // console.log()
      // console.log("The current month is " + months[month_index]);
      // console.log(Date(data.getgraph.buckets[0].key_as_string).getMonth())
      setMappingReportsData([
        {
          title: 'Active Sensors',
          value: '27',
          extra: '/80',
          url:'../activesensors'
        },
        {
          title: 'Temperature',
          value: temperature.toFixed(0) + ' C',
          url:'../temperature'
        },
        {
          title: 'Humidity',
          value: humidity.toFixed(1) + '%',
          url:'../humidity'
        },
        {
          title: 'C02',
          value: (CO2.toFixed(3)) + '%',
          url:'../co2'
        },
        {
          title: 'C0',
          value: (CO.toFixed(3)) + '%',
          url:'../co'
        },
        {
          title: 'CH4',
          value: (methane.toFixed(3)) + '%',
          url:'../methane'
        },
      ])
      
      
    }
  }, [data])

  // useEffect(()=>{
  //   loading?console.log('loading...'):console.log(data)

  // },[by])

  if (loading) return <div style={{ marginTop: '10rem', height: '100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  // if (error) return <p>Error : {error.message}</p>;
  return (
    <div className='dashboardReports-container'>
      {isOpen && <DownloadCSVModal setIsOpen={setIsOpen}/>}
      <div className='dashboardReports-heading'>
        <div className='dashboard-hamburger-icon' onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}><RxHamburgerMenu /></div>
        <h2>Reports</h2>
        <button onClick={()=>{setIsOpen(true)}}><IoMdDownload />Download</button>
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
      <div className='dashboardReports-Activity'>
        <div className='dashboardReports-dropdowninner'>
          <div className='dashboardReports-dropdownDiv'>
            <select onChange={(e) => { setBy(Number(e.target.value)); }} value={by}>
              <option value="1">Past 24 Hours</option>
              <option value="2">Past 3 Days</option>
              <option value="3">Past Week</option>
              <option value="4">Past Month</option>
              <option value="5">Past 3 Months</option>
            </select>
          </div>

          <div className='dashboardReports-ActiveSensors'>
            {mappingReportsData.map((element, index) => {
              return (
                element.title === 'Active Sensors' ?
                  <div key={index} onClick={() => { navigate(element.url) }}>
                    <h5>{element.title}</h5>
                    <h1>{data ? data.getonlinedevices.online_devices : element.value}<span>{data ? '/' + data.getonlinedevices.total_devices : element.extra}</span></h1>
                  </div> :
                  <div key={index} onClick={() => { navigate(element.url) }}>
                    <h5>{element.title}</h5>
                    <h1>{element.value}<span>{element.extra}</span></h1>
                  </div>
              )
            })}

          </div>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Activity</span>
              <select onChange={(e) => { setSensorType(e.target.value) }} value={sensor_type}>
                <option value="temperature">Temperature</option>
                <option value="carbondioxide">CO2</option>
                <option value="carbonmonoxide">CO</option>
                <option value="humidity">Humidity</option>
                <option value="methane">Methane</option>
              </select>
            </h5>
            <div className='reports-Activitybarchart'>
              <div className='barchart-upper-container'>
                <div className='barchart-percentage-container'>
                  <span>100%</span>
                  <span>75%</span>
                  <span>50%</span>
                  <span>25%</span>
                  <span>0%</span>
                </div>
                <div className='barchart-all-bars-container'>
                  {/* <ActivityBar month={element.month} percentage={element.percentage}/> */}
                  {mappingBarChartData.map((element, index) => {
                    return (
                      <ActivityBar key={index} sensor_type={sensor_type} percentage={element.percentage} />
                    )
                  })}
                </div>
              </div>
              <div className='barchart-bottom-container'>
                <span ></span>
                {mappingBarChartData.map((element, index) => {
                  return <span key={index}>{element.month}</span>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='dashboardReports-Alert'>
        {/* <Suspense fallback={<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}> */}
        <ReportsAlert title="Danger Alert" data={DangerAlertData} backcolor='linear-gradient(143.13deg, #ffbe1a44 5.36%, #ff408044 94.64%)' frontcolor='linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)' alertImg={danger} />
        <ReportsAlert title="Safe Alert" data={SafeAlertData} backcolor='linear-gradient(270deg, #2FEA9B44 15.5%, #7FDD5344 85.5%)' frontcolor=' linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)' alertImg={safe} />
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default DashboardReports