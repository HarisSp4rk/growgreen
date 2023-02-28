import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems';
import '../../Pages/Dashboard/DashboardStyles.css'
import '../DashboardGasTemperature/DashboardTemperatureStyles.css'
import DashboardLineChart from '../DashboardLineChart';
import DashboardBarChart from '../DashboardBarChart';
import { dummy_data } from './COData';
import { gql, useQuery } from '@apollo/client';

const CO_Data = gql`
query temperature($by: Int!){
  getcarbonmonoxide(by: $by)
}
`;

const DashboardCO = () => {
  const [by, setBy] = useState(3)
  const [COData, setCOData] = useState(dummy_data);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { loading, error, data } = useQuery(CO_Data, {
    variables: { by },
  });
  useEffect(() => {
    loading ? console.log('loading...') : console.log(data)
    if (!loading) {
      setCOData(data)
    }
  }, [data])
  if (loading) return <div style={{ marginTop: '10rem', height:'100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

  return (
    <div className='dashboardActivitySensors-container'>
      <div className='dashboardActivitySensors-heading'>
        <div className='dashboard-hamburger-icon' onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}><RxHamburgerMenu /></div>
        <h2>Carbon Monoxide</h2>
        <div className='dropDown-TimePeriod'>
          {/* <IoMdDownload />Download */}
          <div className='dropDown-TimePeriod-innerDiv'>
            <select onChange={(e) => { setBy(Number(e.target.value)); }} value={by}>
              <option value="1">Past 24 Hours</option>
              <option value="2">Past 3 Days</option>
              <option value="3">Past Week</option>
              <option value="4">Past Month</option>
              <option value="5">Past 3 Months</option>
            </select>
          </div>
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
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Median of Data</h4>
          <h1>{COData.getcarbonmonoxide.median.aggregations.avg_price.values['50.0'].toFixed(4)}</h1>
        </div>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Total Records</h4>
          <h1>{COData.getcarbonmonoxide.median.aggregations.count_documents.value}</h1>
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>

        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Median Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="median" barChartData={COData.getcarbonmonoxide.mediangraph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Median LineChart</span>
            </h5>
            <DashboardLineChart title="median" array={COData.getcarbonmonoxide.mediangraph.aggregations.group_by_month.buckets} />
          </div>
        </div>


      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Average of Data</h4>
          <h1>{COData.getcarbonmonoxide.average.aggregations.avg_price.value.toFixed(4)}</h1>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Average Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="average" barChartData={COData.getcarbonmonoxide.averagegrapph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>

      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Average LineChart</span>
            </h5>
            <DashboardLineChart title={'average'} array={COData.getcarbonmonoxide.averagegrapph.aggregations.group_by_month.buckets} />
          </div>
        </div>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Average PPM</h4>
          <h1>{COData.getcarbonmonoxide.avergeppm.aggregations.avg_price.value.toFixed(0)}</h1>
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Average PPM Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="average" barChartData={COData.getcarbonmonoxide.averageppmgraph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Average PPM LineChart</span>
            </h5>
            <DashboardLineChart title={'average'} array={COData.getcarbonmonoxide.averageppmgraph.aggregations.group_by_month.buckets} />
          </div>
        </div>
      </div>

      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Median PPM</h4>
          <h1>{COData.getcarbonmonoxide.medianppm.aggregations.avg_price.values['50.0'].toFixed(0)}</h1>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Median PPM Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="median" barChartData={COData.getcarbonmonoxide.medianppmgraph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>

      </div>

      <div className='DashboardGasTemperature-container'>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Median PPM LineChart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardLineChart title={'median'} array={COData.getcarbonmonoxide.medianppmgraph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardCO