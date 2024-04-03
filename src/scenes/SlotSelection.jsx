import React from 'react';
import NavigationButtons from "../components/NavigationButtons";
import slotsData from "../mockData/slots.json";
import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from './SlotSelection.module.css';

function SlotSelection() {
  const { serviceId } = useParams();
  const slots = slotsData.slots.filter(slot => slot.serviceId === parseInt(serviceId));
  const dates = slots[0].dates;
  const [selectedSlot, setSelectedSlot] = useState({
    date: "",
    time: ""
  });

  console.log(selectedSlot);

  const handleClick = (date, time) => {
    setSelectedSlot({
      date,
      time
    });
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
                <button onClick={() => handleClick(timeSlot.date, time)}>{time}</button>
              </div>
            ))}
          </div>
        </div>
      ))}
      <NavigationButtons serviceId={serviceId}/>
    </div>
  );
};

export default SlotSelection;
