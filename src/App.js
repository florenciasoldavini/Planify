import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import ServiceSelection from './scenes/ServiceSelection';
import SlotSelection from './scenes/SlotSelection';
import AppointmentConfirmation from './scenes/AppointmentConfirmation';
import MyAppointments from './scenes/MyAppointments';
import Topbar from './components/Topbar';


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMakeAppointment = location.pathname.startsWith("/appointment");

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/appointment/services", { replace: true });
    }
  }, [location, navigate]);
  return (
    <div className="app">
      <div className="main-content">
        {isMakeAppointment && <Topbar />}
        <Routes>
          <Route path="appointment/services" element={<ServiceSelection />} />
          <Route path="appointment/slots/:serviceId" element={<SlotSelection />} />
          <Route path="appointment/confirmation/:serviceId" element={<AppointmentConfirmation />} />
          <Route path="/myappointments" element={<MyAppointments />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
