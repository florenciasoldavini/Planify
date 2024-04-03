import NavigationButtons from "../components/NavigationButtons";
import { useParams } from "react-router-dom";

function AppointmentConfirmation () {
  const { serviceId } = useParams();

  return (
    <div>
      <h1>Appointment Confirmation</h1>
      <NavigationButtons serviceId={serviceId}/>
    </div>
  );
}; 

export default AppointmentConfirmation;