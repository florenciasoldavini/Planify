import styles from './SlotSelection.module.css';
import slotsData from "../mockData/slots.json";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ReservationContext from '../contexts/ReservationContext';
import NavigationButtons from "../components/NavigationButtons";



function SlotSelection() {
  const { serviceId } = useParams();
  const { reservation, setReservation } = useContext(ReservationContext);
  const slots = slotsData.slots.filter(slot => slot.serviceId === parseInt(serviceId));
  const dates = slots[0].dates;

  const handleClick = (date, time) => {
    if (reservation.timeSlot === `${date} - ${time}`) { 
      setReservation({ ...reservation, timeSlot: null });
      return;
    }

    setReservation({ ...reservation, timeSlot: `${date} - ${time}` });
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  return (
    <div className={styles.slotSelection}>
      <h1>Proximos turnos disponibles</h1>
      {dates.map(timeSlot => (
        <div key={timeSlot.date}>
          <h2>{formatDate(timeSlot.date)}</h2>
          <div className={styles.timeSlots} >
            {timeSlot.availableTimesSlots.map(time => (
              <div key={time}>
                <button onClick={() => handleClick(formatDate(timeSlot.date), time)}>{time}</button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <NavigationButtons serviceId={serviceId} selectedTimeSlot={reservation.timeSlot}/>
    </div>
  );
};

export default SlotSelection;
