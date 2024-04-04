import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ServiceSelection from './ServiceSelection';
import ReservationContext from '../contexts/ReservationContext';

describe('ServiceSelection', () => {
 test('renders ServiceSelection without crashing', () => {
    const mockReservation = {
      serviceId: null, 
    };
    const mockSetReservation = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: mockSetReservation }}>
          <ServiceSelection />
        </ReservationContext.Provider>
      </MemoryRouter>
    );

    expect(getByText(/Categorias/i)).toBeInTheDocument();
 });

 test('displays NavigationButtons when a service is selected', () => {
    const mockReservation = {
      serviceId: '1', 
    };
    
    const mockSetReservation = jest.fn();

    const { getByText } = render(
      <MemoryRouter>
        <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: mockSetReservation }}>
          <ServiceSelection />
        </ReservationContext.Provider>
      </MemoryRouter>
    );

    expect(getByText(/Siguiente/i)).toBeInTheDocument();
 });
});