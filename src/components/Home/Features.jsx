import styles from "../../styles";
import { NavLink } from "react-router-dom";

const Features = () => (
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
        <div className={`${styles.cardBase} group`}>
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Spa & Massage Services"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 className={`${styles.heading3} mb-4`}>Spa & Massage</h3>
          <p className={`${styles.bodyMedium} mb-6 text-neutral-600`}>
            Tense, tight muscles call for a massage. In the right hands your aches
            and pains can be massaged away within minutes. If you can't seem to kick
            sore shoulders and aching joints, you need to get yourself to a massage
            salon.
          </p>
          <NavLink to="/Blog">
            <button type="button" className={`${styles.btnSecondary}`}>
              Read More
            </button>
          </NavLink>
        </div>
        
        <div className={`${styles.cardBase} group`}>
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Hair & Beauty Services"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 className={`${styles.heading3} mb-4`}>Hair & Beauty</h3>
          <p className={`${styles.bodyMedium} mb-6 text-neutral-600`}>
            Whether you prefer to splurge on regular hair appointments or like to
            chop and change to suit your location and your budget, one thing is for
            certain - we all need a good trim every so often and a hair salon is the
            place to do it.
          </p>
          <NavLink to="/Blog">
            <button type="button" className={`${styles.btnSecondary}`}>
              Read More
            </button>
          </NavLink>
        </div>
        
        <div className={`${styles.cardBase} group`}>
          <div className="relative overflow-hidden rounded-lg mb-6">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Body Treatment Services"
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <h3 className={`${styles.heading3} mb-4`}>Body Treatments</h3>
          <p className={`${styles.bodyMedium} mb-6 text-neutral-600`}>
            From tanning to exfoliation treatments, mud wraps to massages, if you're
            looking to treat your body to some serious pampering, booking into a
            beauty salon is the first step in your journey to utter relaxation.
          </p>
          <NavLink to="/Blog">
            <button type="button" className={`${styles.btnSecondary}`}>
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
