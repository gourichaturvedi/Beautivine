import { beautivineServices } from "../../data";
import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => (
  <div className="card-modern group">
    <div className="p-8">
      <div className="text-center mb-6">
        <span className="text-5xl mb-4 block group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </span>
        <h3 className="heading3 text-white mb-3">
          {service.title}
        </h3>
        <p className="text-luxury mb-4">
          {service.description}
        </p>
        <div className="text-2xl font-bold gradient-text">
          {service.price}
        </div>
      </div>
      
      <NavLink to="/Services" className="block">
        <button className="w-full btn-primary group-hover:scale-105 transition-transform duration-300">
          <span className="font-ui font-semibold">Learn More</span>
        </button>
      </NavLink>
    </div>
  </div>
);

const BeautivineServices = () => (
  <section className="sectionDark relative">
    <div className="decorativePattern"></div>
    
    <div className="container-responsive relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-6">
          <span className="text-2xl mr-3">✨</span>
          <h2 className="subheading">
            What We Offer
          </h2>
          <span className="text-2xl ml-3">✨</span>
        </div>
        
        <h1 className="heading1 mb-6">
          <span className="gradient-text">
            Divine Beauty
          </span>
          <br />
          <span className="text-white">Services</span>
        </h1>
        
        <p className="bodyLarge max-w-3xl mx-auto">
          Experience the divine touch of beauty with our Indian-inspired wellness treatments. 
          Each service is crafted to honor ancient traditions while embracing modern luxury.
        </p>
      </div>

      {/* Services Grid */}
      <div className="gridResponsive mb-16">
        {beautivineServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="card-modern max-w-2xl mx-auto">
          <div className="p-8 text-center">
            <h3 className="heading3 text-white mb-4">
              Ready to Experience Divine Beauty?
            </h3>
            <p className="text-luxury mb-6">
              Book your appointment today and discover the perfect blend of ancient wisdom and modern luxury.
            </p>
            <NavLink to="/Reservation">
              <button className="btn-primary text-base px-8 py-4">
                <span className="font-ui font-semibold uppercase tracking-wide">
                  Book Your Divine Experience
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BeautivineServices;