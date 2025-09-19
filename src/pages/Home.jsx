import {
  About,
  Appointment,
  Banner,
  Benefits,
  Features,
  Latest,
  Testimonials,
  BeautivineServices,
  SpecialOffers,
} from "../components/Home";

import styles from "../styles";

const Home = () => (
  <div className="w-full bg-gray-900 overflow-hidden">
    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <Banner />
      </div>
    </div>

    <div className={`${styles.flexStart} `}>
      <div className={` ${styles.boxWidth}`}>
        <BeautivineServices />
        <SpecialOffers />
        <About />
        <Benefits />
        <Testimonials />
        <Latest />
        <Appointment />
      </div>
    </div>
  </div>
);

export default Home;
