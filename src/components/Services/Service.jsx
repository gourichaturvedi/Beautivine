import { serviceCategories } from "../../data";
import styles from "../../styles";

const ServiceCategoryCard = ({ category }) => (
  <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:border-amber-500/30 transition-all duration-300">
    <div className="text-center mb-8">
      <span className="text-4xl mb-4 block">{category.icon}</span>
      <h3 className="text-white font-display text-2xl font-semibold mb-4">
        {category.title}
      </h3>
    </div>
    
    <div className="space-y-6">
      {category.services.map((service, index) => (
        <div key={index} className="border-b border-gray-700/50 pb-6 last:border-b-0 last:pb-0">
          <div className="flex justify-between items-start mb-3">
            <h4 className="text-amber-400 font-semibold text-lg">
              {service.name}
            </h4>
            <span className="text-amber-500 font-bold text-lg whitespace-nowrap ml-4">
              {service.price}
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const Service = () => (
  <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-1/4 w-40 h-40 border border-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-32 h-32 border border-orange-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/6 w-24 h-24 border border-yellow-300 rounded-full animate-pulse delay-500"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-6 group">
          <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">💄</span>
          <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">
            Complete Beauty Services
          </span>
          <span className="text-2xl ml-3 group-hover:scale-110 transition-transform duration-300">💄</span>
        </div>
        
        <h2 className="text-white font-display text-4xl md:text-5xl font-semibold leading-[120%] tracking-tight mb-6">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Professional Beauty
          </span>
          <br />
          <span className="text-white">
            Services & Treatments
          </span>
        </h2>
        
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Experience our comprehensive range of beauty and wellness services designed to enhance your natural beauty. 
          From hair styling to advanced skincare, we offer premium treatments at competitive prices.
        </p>
      </div>
      
      {/* Service Categories Grid */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {serviceCategories.map((category) => (
          <ServiceCategoryCard key={category.id} category={category} />
        ))}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 px-8 py-6 rounded-xl border border-yellow-400/30 inline-block">
          <p className="text-yellow-400 font-sans text-lg font-semibold mb-2">
            ✨ Ready for a transformation? ✨
          </p>
          <p className="text-gray-300 text-sm">
            Call +91 9090343490 to book your appointment
          </p>
        </div>
      </div>
    </div>
    
    {/* Floating decorative elements */}
    <div className="absolute top-24 left-12 text-yellow-400 text-2xl animate-bounce delay-300">💅</div>
    <div className="absolute bottom-16 right-16 text-orange-400 text-xl animate-bounce delay-700">✨</div>
    <div className="absolute top-1/3 right-8 text-yellow-300 text-lg animate-bounce delay-1000">💇‍♀️</div>
  </section>
);

export default Service;
