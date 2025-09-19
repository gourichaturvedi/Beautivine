import styles from "../../styles";
import { services } from "../../data";
import { NavLink } from "react-router-dom";

const ServiceCard = () => (
  <div className="space-y-16">
    {services.map((service, index) => (
      <div
        key={service.id}
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        <div className={`relative overflow-hidden rounded-2xl ${
          index % 2 === 1 ? "lg:col-start-2" : ""
        }`}>
          <img
            src={service.avatar}
            alt={`${service.id} service`}
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        <div className={`space-y-8 ${
          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
        }`}>
          <div className="space-y-6">
            {service.experiences.map((experience, expIndex) => (
              <div
                key={experience.id}
                className={`pb-6 ${
                  expIndex !== service.experiences.length - 1 
                    ? "border-b border-neutral-200" 
                    : ""
                }`}
              >
                <h3 className={`${styles.heading4} text-neutral-900 mb-3`}>
                  {experience.item}
                </h3>
                <p className={`${styles.bodyMedium} text-neutral-600`}>
                  {experience.desc}
                </p>
              </div>
            ))}
          </div>
          
          <NavLink to="/Reservation">
            <button type="button" className={`${styles.btnPrimary}`}>
              Get an Appointment
            </button>
          </NavLink>
        </div>
      </div>
    ))}
  </div>
);

export default ServiceCard;
