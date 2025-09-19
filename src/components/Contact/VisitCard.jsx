import styles from "../../styles";
import { Visits } from "../../data";

const VisitCard = () => (
  <div className="space-y-6 mt-8">
    {Visits.map((visit) => (
      <div key={visit.id} className="flex gap-4 items-start">
        <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mt-1">
          <span className="text-primary-600 text-lg">✓</span>
        </div>
        <div className="space-y-2">
          <h4 className={`${styles.heading5} text-neutral-900`}>
            {visit.title}
          </h4>
          <p className={`${styles.bodyMedium} text-neutral-600`}>
            {visit.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default VisitCard;
