import { Link } from "react-router-dom";
import { useLocation, generatePath } from "react-router-dom";

function NavigationButtons({ serviceId }) {
    const location = useLocation();
    const currentPath = location.pathname;

    const steps = [
        "/appointment/services",
        "/appointment/slots/:serviceId",
        "/appointment/confirmation/:serviceId",
        "/myappointments"
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

    return (
        <div>
            {prevStep && (
                <button>
                    <Link to={prevStep}>Anterior</Link>
                </button>
            )}
            {nextStep && (
                <button>
                    <Link to={nextStep}>{nextStep === "/myappointments" ? "Confirmar" : "Siguiente"}</Link>
                </button>
            )}
        </div>
    );
};

export default NavigationButtons;
