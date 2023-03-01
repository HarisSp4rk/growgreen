import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/Landing Page'
import LoginPage from './Pages/Login Page'
import SignUpPage from './Pages/SignUp Page';
import './App.css'
import Dashboard from './Pages/Dashboard';
import DashboardReports from './Components/DashboardReports';
import DashboardFilter from './Components/DashboardFilter';
import DashboardCorelations from './Components/DashboardCorelations';
import DashboardActiveSensors from './Components/DashboardActiveSensors';
import DashboardActiveSensorsDetails from './Components/DashboardActiveSensorsDetails';
import DashboardTemperature from './Components/DashboardGasTemperature';
import DashboardCO2 from './Components/DashboardGasCO2';
import DashboardCO from './Components/DashboardGasCO';
import DashboardHumidity from './Components/DashboardGasHumidity';
import DashboardMethane from './Components/DashboardGasMethane';
import { RecommendationsContext } from './Contexts/RecommendationsContext';
import DashboardRecommendations from './Components/DashboardRecommendations';
import return_string from './Pages/Landing Page/Function';
import axios from 'axios';

const App = () => {
  const [recommendation, setRecommendation] = useState("")
  const [userGasesData, setUserGasesData] = useState({})
  const fetchDataForRecommendation = async (lat, long) => {
    console.log("Your Latitude:", lat)
    console.log("Your Longitude: ", long)
    await axios.post(
      `${import.meta.env.VITE_API_URL}/api/services/v1/recommend`,
      {
        "long": Number(long),
        "lat": Number(lat)
      })
      .then(response => {
        console.log(response.data)
        setRecommendation(return_string({
          temp: (response.data.temperature.aggregations.avg_price.values['50.0']), //temperature
          humidity: (response.data.humidity.aggregations.avg_price.values['50.0']),//humidity
          CO2: (response.data.carbondioxide.aggregations.avg_ppm.values['50.0']), //Co2
          CO: (response.data.carbonmonoxide.aggregations.avg_ppm.values['50.0']), //Co
          NH4: (response.data.methane.aggregations.avg_ppm.values['50.0']) //methane
        }))
        setUserGasesData({...userGasesData,
          temp: (response.data.temperature.aggregations.avg_price.values['50.0']), //temperature
          humidity: (response.data.humidity.aggregations.avg_price.values['50.0']),//humidity
          CO2: (response.data.carbondioxide.aggregations.avg_ppm.values['50.0']), //Co2
          CO: (response.data.carbonmonoxide.aggregations.avg_ppm.values['50.0']), //Co
          NH4: (response.data.methane.aggregations.avg_ppm.values['50.0']) //methane
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {

      fetchDataForRecommendation(position.coords.latitude, position.coords.longitude);
    });
  }, [])

  return (
    <div className='App'>
      <RecommendationsContext.Provider value={{ recommendation, userGasesData }} >
        <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard/" element={<Dashboard />} >
              <Route path='reports' element={<DashboardReports />} />
              <Route path='filter' element={<DashboardFilter />} />
              <Route path='corelations' element={<DashboardCorelations />} />
              <Route path='activesensors' element={<DashboardActiveSensors />} />
              <Route path='sensordetails' element={<DashboardActiveSensorsDetails />} />
              <Route path='temperature' element={<DashboardTemperature />} />
              <Route path='co2' element={<DashboardCO2 />} />
              <Route path='co' element={<DashboardCO />} />
              <Route path='humidity' element={<DashboardHumidity />} />
              <Route path='methane' element={<DashboardMethane />} />
              <Route path='recommendations' element={<DashboardRecommendations />} />
            </Route>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </RecommendationsContext.Provider>
    </div>
  )
}

export default App