import styles from "../../styles";
import { Stages } from "../../data";

const Stage = () => (
  <div className="flex flex-col">
    {Stages.map((stage) => (
      <div key={stage.id} className="flex flex-row">
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-4 mt-1">
          <span className="text-primary-600 text-lg">✓</span>
        </div>
        <div className="flex flex-col">
          <h4 className={styles.stageTitle}>{stage.title}</h4>
          <p className={styles.stageDesc}>{stage.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Stage;
