import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ServiceSelection from './scenes/ServiceSelection';
import SlotSelection from './scenes/SlotSelection';
import AppointmentConfirmation from './scenes/AppointmentConfirmation';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/services" element={<ServiceSelection />} />
        <Route path="/slots" element={<SlotSelection />} />
        <Route path="/confirmation" element={<AppointmentConfirmation />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
