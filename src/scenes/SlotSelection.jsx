import styles from './SlotSelection.module.css';
import slotsData from "../mockData/slots.json";
import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import ReservationContext from '../contexts/ReservationContext';
import NavigationButtons from "../components/NavigationButtons";

function SlotSelection() {
  const { serviceId } = useParams();
  const { reservation, setReservation } = useContext(ReservationContext);
  const slots = slotsData.slots.filter(slot => slot.serviceId === parseInt(serviceId));
  const dates = slots[0]?.dates;

  console.log("RENDERING SLOT SELECTION", useParams())

  const handleClick = (date, time) => {
    if (reservation.timeSlot === `${date} - ${time}`) {
      setReservation({ ...reservation, timeSlot: null });
      return;
    }

    setReservation({ ...reservation, timeSlot: `${date} - ${time}` });
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    const options = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <div>
      <div className={styles.slotSelection}>
        <h2>Proximos turnos disponibles</h2>
        <div className={styles.containerTimeSlots}>
          {dates?.map(timeSlot => (
            <div className={styles.containerDates} key={timeSlot.date}>
              <h3>{formatDate(timeSlot.date)}</h3>
              <div className={styles.containerTimes} >
                {timeSlot.availableTimesSlots.map(time => (
                  <div key={time}>
                    <button
                      className={`${styles.btn} ${reservation.timeSlot === `${formatDate(timeSlot.date)} - ${time}` ? styles.btnSelected : styles.btn}`}
                      onClick={() => handleClick(formatDate(timeSlot.date), time)}>
                      {time}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {!reservation.timeSlot ?
        <p>Por favor seleccione un turno</p> :
        <p>Turno seleccionado: {reservation.timeSlot}</p>
      }
      <NavigationButtons serviceId={serviceId} selectedTimeSlot={reservation.timeSlot} />
    </div>
  );
};

export default SlotSelection;
