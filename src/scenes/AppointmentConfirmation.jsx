import styles from "./AppointmentConfirmation.module.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ReservationContext from '../contexts/ReservationContext';
import NavigationButtons from "../components/NavigationButtons";

function AppointmentConfirmation() {
  const { serviceId } = useParams();
  const { reservation } = useContext(ReservationContext);

  return (
    <div>
      <div className={styles.appointmentConfirmation}>
        <h4>{reservation.serviceName}</h4>
        <p>{reservation.timeSlot}</p>
      </div>
      <NavigationButtons serviceId={serviceId} />
    </div>
  );
};

export default AppointmentConfirmation;