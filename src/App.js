import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ServiceSelection from './scenes/ServiceSelection';
import SlotSelection from './scenes/SlotSelection';
import AppointmentConfirmation from './scenes/AppointmentConfirmation';
import MyAppointments from './scenes/MyAppointments';
import { useLocation } from "react-router-dom";
import Topbar from './components/Topbar';

function App() {
  const location = useLocation();
  const isMakeAppointment = location.pathname.startsWith("/appointment");


  return (
    <div>
      {
        isMakeAppointment && <Topbar />
      }
      <Routes>
        <Route path="appointment/services" element={<ServiceSelection />} />
        <Route path="appointment/slots/:serviceId" element={<SlotSelection />} />
        <Route path="appointment/confirmation/:serviceId" element={<AppointmentConfirmation />} />
        <Route path="/myappointments" element={<MyAppointments />} />
      </Routes>
      <Navbar/>
    </div>
  );
} 

export default App;
