import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import ReservationProvider from './contexts/ReservationProvider';


ReactDOM.createRoot(
 document.getElementById("root"),
)
 .render(
    <ReservationProvider>
    <BrowserRouter>
    <Navigate to="/appointment/services" replace />
      <App />
    </BrowserRouter>
  </ReservationProvider>
 );