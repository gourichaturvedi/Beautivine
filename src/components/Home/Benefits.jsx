import BenefitCard from "./BenefitCard";
import { benefits } from "../../data";

const Benefits = () => (
  <section className="sectionDark relative">
    {/* Subtle Background Pattern */}
    <div className="decorativePattern"></div>
    
    <div className="container-responsive relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-6">
          <span className="text-2xl mr-4">🕉️</span>
          <span className="subheading">
            Divine Benefits of Beautivine
          </span>
          <span className="text-2xl ml-4">🕉️</span>
        </div>
        
        <h2 className="heading2 text-center mb-6">
          <span className="gradient-text">
            Sacred Wellness
          </span>
          <br />
          <span className="text-white">Benefits You'll Experience</span>
        </h2>
        
        <p className="bodyLarge text-center max-w-3xl mx-auto">
          Discover the transformative power of ancient Ayurvedic wisdom combined with modern luxury. 
          Each treatment is designed to nurture your body, mind, and spirit.
        </p>
      </div>
      
      <div className="gridResponsive">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} {...benefit} />
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;