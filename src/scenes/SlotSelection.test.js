import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
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

        render(
            <MemoryRouter>
                <ReservationContext.Provider value={{ reservation: mockReservation, setReservation: mockSetReservation }}>
                    <SlotSelection />
                </ReservationContext.Provider>
            </MemoryRouter>
        );

        expect(screen.getByText(/Proximos turnos disponibles/i)).toBeInTheDocument();
    });

    test('renders correct number of buttons', () => {
        const mockSetReservation = jest.fn();
        const reservation = {
            serviceId: 1,
            serviceName: 'Some service',
            timeSlot: null
        };

        render(
            <MemoryRouter initialEntries={['/services/1']}>
                <ReservationContext.Provider value={{ reservation, setReservation: mockSetReservation }}>
                    <Routes>
                        <Route path="/services/:serviceId" element={<SlotSelection />} />
                    </Routes>
                </ReservationContext.Provider>
            </MemoryRouter>
        );

        const buttons = screen.getAllByRole('button');

        expect(buttons.length).toBe(6);
    });
});