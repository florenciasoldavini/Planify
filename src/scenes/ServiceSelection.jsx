import styles from './ServiceSelection.module.css';
import servicesData from '../mockData/services.json';
import React, { useState, useContext } from 'react';
import ReservationContext from '../contexts/ReservationContext';
import ServiceCard from '../components/ServiceCard';
import NavigationButtons from '../components/NavigationButtons';


function ServiceSelection() {
    const services = servicesData.services;
    const categories = [...new Set(services.map(service => service.category))];
    const [isMenuVisible, setIsMenuVisible] = useState({});
    const { reservation, setReservation } = useContext(ReservationContext);


    const handleClick = (category) => {
        setIsMenuVisible(prevState => ({
            ...prevState,
            [category]: !prevState[category]
        }));
    };

    return (
        <div>
            <div className={styles.serviceSelection}>
                <h2>Categorias</h2>
                <div className={styles.menu}>
                    {categories.map(category => (
                        <div key={category} className={styles.menuItem}>
                            <div className={styles.toggle}>
                                <h3>{category}</h3>
                                <button className={styles.btn} onClick={() => handleClick(category)}>
                                    {isMenuVisible[category] ? (
                                        <svg
                                            height="30px"
                                            width="30px"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="black"
                                            class="w-6 h-6">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 12h14" />
                                        </svg>
                                    ) : (
                                        <svg
                                            height="30px"
                                            width="30px"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2.5"
                                            stroke="black"
                                            class="w-6 h-6">
                                            <path strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {isMenuVisible[category] && (
                                <div className={styles.serviceList}>
                                    {services.filter(service => service.category === category).map(service => (
                                        <ServiceCard key={service.id} service={service} reservation={reservation} setReservation={setReservation} />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            {reservation.serviceId ? <NavigationButtons serviceId={reservation.serviceId} /> : <p>Para poder continuar por favor seleccione un servicio</p>}
        </div>
    );
};

export default ServiceSelection;
