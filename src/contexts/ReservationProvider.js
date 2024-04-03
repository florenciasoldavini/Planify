import React, { useState } from 'react';
import ReservationContext from './ReservationContext';

const ReservationProvider = ({ children }) => {
   const [reservation, setReservation] = useState({
      serviceId: null,
      serviceName: null,
      timeSlot: null,
   });

   return (
      <ReservationContext.Provider value={{ reservation, setReservation }}>
         {children}
      </ReservationContext.Provider>
   );
};

export default ReservationProvider;