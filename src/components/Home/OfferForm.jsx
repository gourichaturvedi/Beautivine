import { Input } from "@material-tailwind/react";

const OfferForm = () => (
  <div className="card-modern max-w-lg mx-auto">
    <div className="p-8">
      <div className="text-center mb-8">
        <h3 className="heading3 text-white mb-2">
          <span className="gradient-text">
            Sacred Booking
          </span>
        </h3>
        <p className="text-luxury">Begin your divine beauty journey</p>
      </div>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Your Sacred Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors duration-200"
            placeholder="Enter your name"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Divine Contact Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors duration-200"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone for Sacred Connection</label>
          <input
            type="tel"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors duration-200"
            placeholder="Enter your phone number"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Desired Sacred Service</label>
          <select className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors duration-200">
            <option value="">Select a service</option>
            <option value="herbal-glow">Herbal Glow Facials</option>
            <option value="ayurvedic-massage">Ayurvedic Body Massage</option>
            <option value="geothermal-spa">Geothermal Spa Therapy</option>
            <option value="steam-sauna">Steam & Sauna Detox</option>
            <option value="bridal-makeup">Bridal & Glam Makeup</option>
            <option value="hair-style">Hair & Style Lounge</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Sacred Notes for Our Practitioners</label>
          <textarea
            rows="4"
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors duration-200 resize-none"
            placeholder="Any special requests or notes..."
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full btn-primary text-base py-4 group"
        >
          <span className="font-ui font-semibold uppercase tracking-wide group-hover:scale-105 transition-transform duration-300">
            ✨ Book Divine Experience ✨
          </span>
        </button>
        
        <p className="text-gray-500 text-center text-xs">
          Our practitioners will connect with you within 24 hours
        </p>
      </form>
    </div>
  </div>
);

export default OfferForm;