import React from 'react';
import { render } from '@testing-library/react';
import ServiceSelection from './ServiceSelection';
import ReservationContext from '../contexts/ReservationContext';

test('renders ServiceSelection without crashing', () => {
 const mockReservation = {
    // Mock reservation object
 };
 const mockSetReservation = jest.fn();

 render(
    <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: mockSetReservation }}>
      <ServiceSelection />
    </ReservationContext.Provider>
 );
});