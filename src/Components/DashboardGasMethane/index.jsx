import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { DashboardMenuItems } from '../DashboardNavbar/DashboardNavebarMenuItems';
import '../../Pages/Dashboard/DashboardStyles.css'
import '../DashboardGasTemperature/DashboardTemperatureStyles.css'
import { dummy_data } from './MethaneData';
import DashboardLineChart from '../DashboardLineChart';
import DashboardBarChart from '../DashboardBarChart';
import { gql, useQuery } from '@apollo/client';

const Methane_Data = gql`
query temperature($by: Int!){
  getmethane(by: $by)
}
`;

const DashboardMethane = () => {
  const [by, setBy] = useState(3);
  const [MethaneData, setMethaneData] = useState(dummy_data)
  const { loading, error, data } = useQuery(Methane_Data, {
    variables: { by },
  });
  useEffect(() => {
    loading ? console.log('loading...') : console.log(data)
    if (!loading) {
      setMethaneData(data)
    }
  }, [data])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (loading) return <div style={{ marginTop: '10rem', height:'100vh' }} className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  return (
    <div className='dashboardActivitySensors-container'>
      <div className='dashboardActivitySensors-heading'>
        <div className='dashboard-hamburger-icon' onClick={() => { setMobileMenuOpen(!mobileMenuOpen) }}><RxHamburgerMenu /></div>
        <h2>Methane</h2>
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
          <h1>{MethaneData.getmethane.median.aggregations.avg_price.values['50.0'].toFixed(4)}</h1>
        </div>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Total Records</h4>
          <h1>{MethaneData.getmethane.median.aggregations.count_documents.value}</h1>
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>

        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Median Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="median" barChartData={MethaneData.getmethane.mediangraph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Median LineChart</span>
            </h5>
            <DashboardLineChart title="median" array={MethaneData.getmethane.mediangraph.aggregations.group_by_month.buckets} />
          </div>
        </div>


      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Average of Data</h4>
          <h1>{MethaneData.getmethane.average.aggregations.avg_price.value.toFixed(4)}</h1>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Average Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="average" barChartData={MethaneData.getmethane.averagegrapph.aggregations.group_by_month.buckets} />
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
            <DashboardLineChart title={'average'} array={MethaneData.getmethane.averagegrapph.aggregations.group_by_month.buckets} />
          </div>
        </div>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Average PPM</h4>
          <h1>{MethaneData.getmethane.avergeppm.aggregations.avg_price.value.toFixed(0)}</h1>
        </div>
      </div>
      <div className='DashboardGasTemperature-container'>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Average PPM Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="average" barChartData={MethaneData.getmethane.averageppmgraph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Average PPM LineChart</span>
            </h5>
            <DashboardLineChart title={'average'} array={MethaneData.getmethane.averageppmgraph.aggregations.group_by_month.buckets} />
          </div>
        </div>
      </div>

      <div className='DashboardGasTemperature-container'>
        <div className='DashboardGasTemperature-innerContainer'>
          <h4>Median PPM</h4>
          <h1>{MethaneData.getmethane.medianppm.aggregations.avg_price.values['50.0'].toFixed(0)}</h1>
        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>
              <span>Median PPM Barchart</span>
            </h5>
            <div className='reports-Activitybarchart'>
              <DashboardBarChart title="median" barChartData={MethaneData.getmethane.medianppmgraph.aggregations.group_by_month.buckets} />
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
              <DashboardLineChart title={'median'} array={MethaneData.getmethane.medianppmgraph.aggregations.group_by_month.buckets} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DashboardMethane