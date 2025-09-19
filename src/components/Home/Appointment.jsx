import OfferCard from "./OfferCard";
import OfferForm from "./OfferForm";

const Appointment = () => (
  <section className="sectionGradient">
    <div className="container-responsive">
      <div className="gridTwoCol items-center gap-16">
        {/* Content Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center">
            <span className="text-2xl mr-3">🎯</span>
            <span className="subheading">
              Divine Appointment Offer
            </span>
          </div>
          
          <h2 className="heading2">
            <span className="gradient-text">
              Sacred Beauty
            </span>
            <br />
            <span className="text-white">Awaits Your Booking</span>
          </h2>
          
          <p className="bodyLarge max-w-2xl">
            Experience the divine transformation that awaits you at Beautivine. Book your sacred beauty journey today 
            and discover why thousands trust us with their wellness and beauty rituals. Let ancient wisdom meet modern luxury.
          </p>
          
          <div className="card-modern">
            <OfferCard />
          </div>
        </div>
        
        {/* Form Section */}
        <div>
          <OfferForm />
        </div>
      </div>
    </div>
  </section>
);

export default Appointment;