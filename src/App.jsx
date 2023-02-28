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
import DashboardSettings from './Components/DashboardSettings';
import DashboardActiveSensors from './Components/DashboardActiveSensors';
import DashboardActiveSensorsDetails from './Components/DashboardActiveSensorsDetails';
import DashboardTemperature from './Components/DashboardGasTemperature';
import DashboardCO2 from './Components/DashboardGasCO2';
import DashboardCO from './Components/DashboardGasCO';
import DashboardHumidity from './Components/DashboardGasHumidity';
import DashboardMethane from './Components/DashboardGasMethane';
import { RecommendationsContext } from './Contexts/RecommendationsContext';
import return_string from './Pages/Landing Page/Function';

const App = () => {
  const [recommendation, setRecommendation] = useState("hello world, hello world, hello asdfasdf asd fasd fas dfas df asdf asdf as df asdf asdf asd fas dfas df asd f asdf asdfas df asdf as dfa sdf asdf as df asdf as df")
  useEffect(()=>{
    setRecommendation(return_string({"temp":20, "humidity":20,"CO2":30,"NH4":22,"CO":44}))
  },[])
  return (
    <div className='App'>
      <RecommendationsContext.Provider value={{recommendation}} >
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
              <Route path='settings' element={<DashboardSettings />} />
            </Route>
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </RecommendationsContext.Provider>
    </div>
  )
}

export default App