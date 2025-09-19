import Banner from "../components/Blog/Banner";
import Story from "../components/Blog/Story";
import styles from "../styles";
const Reservation = () => (
  <div className="w-full bg-gray-900 overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
        <Story />
      </div>
    </div>
  </div>
);

export default Reservation;
