import { NavLink } from "react-router-dom";
import styles from "../../styles";

const Banner = () => (
  <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-pattern opacity-5"></div>
    
    {/* Floating Decorative Elements */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-20 w-32 h-32 border border-amber-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 border border-amber-400/15 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-amber-300/10 rounded-full animate-float-slow"></div>
    </div>

    <div className="container-responsive min-h-screen flex flex-col lg:flex-row items-center relative z-10">
      {/* Content Section */}
      <div className="flex-1 lg:pr-12 py-16 lg:py-24">
        {/* Welcome Badge */}
        <div className="inline-flex items-center mb-8 group">
          <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300">🌸</span>
          <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">
            Welcome to Divine Beauty
          </span>
          <span className="text-3xl ml-4 group-hover:scale-110 transition-transform duration-300">🌸</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
          <span className="text-white block">
            Experience the
          </span>
          <span className="gradient-text block">
            Divine Touch
          </span>
          <span className="text-white block text-4xl lg:text-5xl">
            of Beautivine
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl">
          Immerse yourself in ancient Ayurvedic wisdom blended with modern luxury. 
          Our sacred beauty rituals honor your divine essence while delivering 
          transformative results that radiate from within.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <NavLink to="/Reservation">
            <button className="btn-primary group">
              <span className="relative z-10">Book Sacred Experience</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </button>
          </NavLink>
          
          <NavLink to="/Services">
            <button className="btn-secondary">
              Explore Divine Services
            </button>
          </NavLink>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-xl">⭐</span>
            <span className="text-sm">5.0 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-xl">🏆</span>
            <span className="text-sm">Award Winning</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 text-xl">🌿</span>
            <span className="text-sm">100% Natural</span>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 lg:pl-12 py-16 lg:py-24">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Beautiful woman enjoying spa treatment at Beautivine"
            className="relative z-10 w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
          />
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-80 animate-bounce"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-60 animate-pulse"></div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;