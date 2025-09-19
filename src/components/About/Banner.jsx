import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-40 h-40 border border-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-32 h-32 border border-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-24 h-24 border border-yellow-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="w-full flex sm:py-32 py-24 sm:px-0 px-6 justify-center flex-col items-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <span className="text-3xl mr-4">🕉️</span>
          <p className="text-yellow-400 text-center font-sans text-[15px] font-normal uppercase tracking-widest">
            Sacred Story About Beautivine
          </p>
          <span className="text-3xl ml-4">🕉️</span>
        </div>
        
        <h1 className="text-white text-center heading-luxury sm:text-[60px] text-[45px] leading-[120%] tracking-tight max-w-[800px] mb-8">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            The Divine Journey
          </span>
          <br />
          <span className="text-white">
            Behind Beautivine's Sacred Touch
          </span>
        </h1>
        
        <p className="text-gray-300 text-center text-luxury text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Rooted in ancient Ayurvedic wisdom and inspired by the timeless beauty traditions of India, 
          Beautivine was born from a vision to honor the divine feminine energy within every soul.
        </p>
        
        <NavLink to="/Reservation">
          <button
            type="button"
            className="flex justify-center items-center py-4 sm:px-8 px-6 bg-gradient-to-r from-yellow-400 to-orange-500 sm:mt-8 mt-6 rounded-xl group relative overflow-hidden divine-glow transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ease-out group-hover:w-full"></div>
            <span className="text-black text-center font-sans sm:text-[14px] text-[12px] font-semibold tracking-widest leading-[125%] uppercase relative z-10">
              Begin Your Divine Journey
            </span>
          </button>
        </NavLink>
        
        {/* Floating decorative elements */}
        <div className="absolute top-24 left-12 text-yellow-400 text-2xl animate-bounce delay-300">🌸</div>
        <div className="absolute bottom-16 right-16 text-orange-400 text-xl animate-bounce delay-700">✨</div>
        <div className="absolute top-1/3 right-8 text-yellow-300 text-lg animate-bounce delay-1000">🪷</div>
      </div>
    </div>
  );
};

export default Banner;