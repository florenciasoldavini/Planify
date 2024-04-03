import { useContext } from "react";
import { useParams } from "react-router-dom";
import ReservationContext from '../contexts/ReservationContext';
import NavigationButtons from "../components/NavigationButtons";

function AppointmentConfirmation () {
  const { serviceId } = useParams();
  const { reservation } = useContext(ReservationContext);

  return (
    <div>
      <h1>{reservation.serviceName}</h1>
      <p>{reservation.timeSlot}</p>
      <NavigationButtons serviceId={serviceId}/>
    </div>
  );
}; 

export default AppointmentConfirmation;