import styles from './NavigationButtons.module.css';
import { Link } from "react-router-dom";
import { useLocation, generatePath } from "react-router-dom";

function NavigationButtons({ serviceId, selectedTimeSlot }) {
    const location = useLocation();
    const currentPath = location.pathname;

    const steps = [
        "/appointment/services",
        "/appointment/slots/:serviceId",
        "/appointment/confirmation/:serviceId",
    ];

    const getCurrentStepIndex = () => {
        return steps.findIndex(step => {
            const stepPath = step.replace(":serviceId", "");
            return currentPath.startsWith(stepPath);
        });
    };

    const currentStepIndex = getCurrentStepIndex();

    const nextStep = currentStepIndex + 1 < steps.length ? generatePath(steps[currentStepIndex + 1], { serviceId }) : null;
    const prevStep = currentStepIndex - 1 >= 0 ? generatePath(steps[currentStepIndex - 1], { serviceId }) : null;

    const disableNextButton = currentPath.startsWith("/appointment/slots") && (!selectedTimeSlot);

    return (
        <div className={styles.navigationButtons}>
            <div className={styles.containerPrev}>
                {prevStep && (
                    <Link to={prevStep}>
                        <button className={styles.btn}>Anterior</button>
                    </Link>
                )}
            </div>
            <div className={styles.containerNext}>
                    <Link to={nextStep}>
                        <button className={styles.btn} disabled={disableNextButton}>
                            {!nextStep ? "Confirmar" : "Siguiente"}
                        </button>
                    </Link>
            </div>
        </div>
    );
};

export default NavigationButtons;