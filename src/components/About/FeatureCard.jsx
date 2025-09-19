import { values } from "../../data";
import styles from "../../styles";

const FeatureCard = () => (
  <div className="space-y-12">
    {values.map((value, index) => (
      <div
        key={value.id}
        className={`flex flex-col lg:flex-row gap-8 items-center ${
          index % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-primary-50 rounded-2xl flex items-center justify-center border border-primary-100">
            <img
              src={value.avatar}
              alt={value.title}
              className="w-12 h-12 object-contain"
            />
          </div>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h3 className={`${styles.heading3} text-neutral-900 mb-4`}>
            {value.title}
          </h3>
          <p className={`${styles.bodyLarge} text-neutral-600 max-w-lg ${index % 2 === 1 ? "lg:ml-auto" : ""}`}>
            {value.description}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default FeatureCard;
