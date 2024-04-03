import { useLocation } from "react-router-dom";
import styles from './Topbar.module.css';

function Topbar() {
 const location = useLocation();

 const steps = [
    "/appointment/services",
    "/appointment/slots",
    "/appointment/confirmation",
 ];

 const currentStepIndex = steps.findIndex(step => location.pathname.startsWith(step));
 const totalSteps = steps.length;

 // Determine the page title based on the current step index
 const pageTitles = [
    "Seleccionar servicio",
    "Seleccionar horario",
    "Confirmar turno",
 ];

 const pageTitle = currentStepIndex !== -1 ? pageTitles[currentStepIndex] : null;

 const progressPercentage = (currentStepIndex + 1) / totalSteps * 100;

 return (
    <div className={styles.topbar}>
      {pageTitle && <h4>{pageTitle}</h4>}
      <div className={styles.progressbar}>
        <div className={styles.progress} style={{ width: `${progressPercentage}%` }}></div>
      </div>
    </div>
 );
}

export default Topbar;