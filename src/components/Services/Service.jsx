import ServiceCard from "./ServiceCard";
import styles from "../../styles";

const Service = () => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <p className={`${styles.overline} text-primary-600`}>
          Our Services
        </p>
        <h2 className={`${styles.heading1} text-neutral-900 max-w-2xl mx-auto`}>
          We are Experienced in making you very Beautiful
        </h2>
      </div>
      <ServiceCard />
    </div>
  </section>
);

export default Service;
