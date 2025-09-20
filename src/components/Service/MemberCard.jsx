import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faBookOpen,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";

const MemberCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    note: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment request:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 shadow-2xl hover:border-amber-500/30 transition-all duration-300">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center mb-4">
          <span className="text-xl mr-2">✨</span>
          <h3 className="text-white font-display text-xl font-semibold">
            Divine Appointment Form
          </h3>
          <span className="text-xl ml-2">✨</span>
        </div>
        <p className="text-gray-400 text-sm">
          Share your details and let us craft your sacred beauty experience
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400">
            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Sacred Name"
            className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400">
            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@domain.com"
            className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Phone Field */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400">
            <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your Contact Number"
            className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300"
            required
          />
        </div>

        {/* Service Field */}
        <div className="relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-400">
            <FontAwesomeIcon icon={faBookOpen} className="w-4 h-4" />
          </div>
          <select
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300 appearance-none"
            required
          >
            <option value="" className="text-gray-400">Select Your Divine Service</option>
            <option value="ayurvedic-facial" className="text-white">Ayurvedic Facial Treatment</option>
            <option value="herbal-body-wrap" className="text-white">Sacred Herbal Body Wrap</option>
            <option value="divine-massage" className="text-white">Divine Relaxation Massage</option>
            <option value="bridal-package" className="text-white">Royal Bridal Package</option>
            <option value="hair-care" className="text-white">Traditional Hair Care</option>
            <option value="wellness-consultation" className="text-white">Wellness Consultation</option>
            <option value="custom-package" className="text-white">Custom Divine Package</option>
          </select>
        </div>

        {/* Note Field */}
        <div className="relative">
          <div className="absolute left-4 top-6 text-amber-400">
            <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
          </div>
          <textarea
            name="note"
            value={formData.note}
            onChange={handleInputChange}
            placeholder="Share any special requests or preferences for your divine experience..."
            rows="4"
            className="w-full pl-12 pr-4 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-all duration-300 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-4 px-6 rounded-xl hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 group relative overflow-hidden"
        >
          <div className="absolute inset-0 w-0 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative z-10 flex items-center justify-center">
            <span className="mr-2">🌸</span>
            <span className="uppercase tracking-widest text-sm font-bold">
              Book Sacred Experience
            </span>
            <span className="ml-2">🌸</span>
          </span>
        </button>
      </form>

      {/* Additional Info */}
      <div className="mt-6 text-center">
        <p className="text-gray-400 text-xs">
          Our team will contact you within 24 hours to confirm your divine appointment
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
