import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ReservationProvider from './contexts/ReservationProvider';

function Root() {

 return (
    <ReservationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReservationProvider>
 );
}

ReactDOM.createRoot(document.getElementById("root"))
 .render(<Root />);
