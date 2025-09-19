import FeatureCard from "./FeatureCard";
import styles from "../../styles";

const Features = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-4 mb-16">
          <p className={`${styles.overline} text-primary-600`}>
            Our Values
          </p>
          <h2 className={`${styles.heading1} text-neutral-900 max-w-2xl mx-auto`}>
            The work values we thrive for
          </h2>
        </div>
        <FeatureCard />
      </div>
    </section>
  );
};

export default Features;
