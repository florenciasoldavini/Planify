import styles from './ServiceCard.module.css';

function ServiceCard({ service, selectedService, setSelectedService}) {

  const handleClick = () => {
    if (selectedService.name === service.name) {
      setSelectedService({
        id: "",
        name: "",
    });
      return;
    } 
    setSelectedService(service);
  };

  return (
    <div className={styles.serviceCard}>
      <p>{service.name}</p>
      <p>{service.description}</p>
        <button className={styles.btn} onClick={handleClick}>{selectedService.name === service.name ? "Seleccionado" : "Seleccionar"}</button>
    </div>
  );
};

export default ServiceCard;