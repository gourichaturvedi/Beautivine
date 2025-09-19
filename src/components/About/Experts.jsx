import ExpertCard from "./ExpertCard";
import styles from "../../styles";

const Experts = () => {
  return (
    <section className="py-20 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-4 mb-16">
          <p className={`${styles.overline} text-primary-600`}>
            Meet our Experts
          </p>
          <h2 className={`${styles.heading1} text-neutral-900 max-w-2xl mx-auto`}>
            The amazing women behind Beautivine
          </h2>
        </div>
        <ExpertCard />
      </div>
    </section>
  );
};

export default Experts;
