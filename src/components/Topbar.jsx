import { useLocation } from "react-router-dom";
import styles from './Topbar.module.css';

function Topbar () {
const location = useLocation();
const isServiceSelection = location.pathname === "/appointment/services";
const isSlotSelection = location.pathname.startsWith("/appointment/slots");
const isAppointmentConfirmation = location.pathname.startsWith("/appointment/confirmation")

  return (
    <div className={styles.topbar}>
      {
        isServiceSelection && <p>Seleccionar servicio</p>
      }
      {
        isSlotSelection && <p>Seleccionar horario</p>
      }
      {
        isAppointmentConfirmation && <p>Confirmar turno</p>
      }
      <div className={styles.progressbar}>
        <div className={styles.progress}></div>
      </div>
    </div>
  );
}; 

export default Topbar;