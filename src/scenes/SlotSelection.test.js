import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SlotSelection from './SlotSelection';
import ReservationContext from '../contexts/ReservationContext';



describe('SlotSelection', () => {
    test('renders SlotSelection without crashing', () => {
        const mockReservation = {
            serviceId: '1',
            serviceName: 'Some service',
            timeSlot: null
        };

        const mockSetReservation = jest.fn();

        const { getByText } = render(
            <MemoryRouter>
                <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: mockSetReservation }}>
                    <SlotSelection />
                </ReservationContext.Provider>
            </MemoryRouter>
        );

        expect(getByText(/Proximos turnos disponibles/i)).toBeInTheDocument();
    });
});