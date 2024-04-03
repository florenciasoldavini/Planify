import styles from './ServiceCard.module.css';

function ServiceCard({ service, reservation, setReservation}) {

  const handleClick = () => {
    if (reservation.serviceName === service.name) {
      setReservation({ ...reservation, 
        serviceId: null, 
        serviceName: null
      });
      return;
    } 
    setReservation({ ...reservation, 
      serviceId: service.id, 
      serviceName: service.name 
    });
  };

  return (
    <div className={styles.serviceCard}>
      <h4>{service.name}</h4>
      <p>{service.description}</p>
        <button className={styles.btn} onClick={handleClick}>{reservation.serviceName === service.name ? "Seleccionado" : "Seleccionar"}</button>
    </div>
  );
};

export default ServiceCard;