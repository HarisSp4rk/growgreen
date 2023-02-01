import React from 'react'
// import React, { Suspense, lazy } from 'react'
// const ReportsAlert = lazy(() => import('./ReportsAlert'))
import { IoMdDownload } from 'react-icons/io'
import ActivityBar from './ActivityBar'
import { ActivityData } from './ActivityData'
import './DashboardReportsStyles.css'
import ReportsAlert from './ReportsAlert'
import { DangerAlertData, SafeAlertData } from './ReportsAlertData'
import { reportsData } from './reportsData'

const DashboardReports = () => {
  return (
    <div className='dashboardReports-container'>
      <div className='dashboardReports-heading'>
        <h2>Reports</h2>
        <button><IoMdDownload />Download</button>
      </div>
      <div className='dashboardReports-Activity'>
        <div className='dashboardReports-ActiveSensors'>
          {reportsData.map((element, index) => {
            return (
              <div key={index}>
                <h5>{element.title}</h5>
                <h1>{element.value}<span>{element.extra}</span></h1>
              </div>
            )
          })}

        </div>
        <div className='dashboardReports-barChart'>
          <div className='reports-innerbarchartdiv'>
            <h5>Activity</h5>
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
                  {ActivityData.map((element, index) => {
                    return (
                      <ActivityBar key={index} percentage={element.percentage} />
                    )
                  })}
                </div>
              </div>
              <div className='barchart-bottom-container'>
                {ActivityData.map((element, index) => {
                  return <span key={index}>{element.month}</span>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='dashboardReports-Alert'>
        {/* <Suspense fallback={<div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}> */}
          <ReportsAlert title="Danger Alert" data={DangerAlertData} backcolor='linear-gradient(143.13deg, #ffbe1a44 5.36%, #ff408044 94.64%)' frontcolor='linear-gradient(143.13deg, #FFBF1A 5.36%, #FF4080 94.64%)' />
          <ReportsAlert title="Safe Alert" data={SafeAlertData} backcolor='linear-gradient(270deg, #2FEA9B44 15.5%, #7FDD5344 85.5%)' frontcolor=' linear-gradient(270deg, #2FEA9B 15.5%, #7FDD53 85.5%)' />
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default DashboardReports