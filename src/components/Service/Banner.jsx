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
          <span className="text-3xl mr-4">📅</span>
          <p className="text-yellow-400 text-center font-sans text-[15px] font-normal uppercase tracking-widest">
            Sacred Appointment Booking
          </p>
          <span className="text-3xl ml-4">📅</span>
        </div>
        
        <h1 className="text-white text-center heading-luxury sm:text-[60px] text-[45px] leading-[120%] tracking-tight max-w-[800px] mb-8">
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            Book Your
          </span>
          <br />
          <span className="text-white">
            Divine Beauty Experience
          </span>
        </h1>
        
        <p className="text-gray-300 text-center text-luxury text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Reserve your sacred moment of transformation. Let our expert practitioners guide you through 
          an ancient wellness journey designed to elevate your natural beauty and inner radiance.
        </p>
        
        {/* Sacred appointment info */}
        <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 px-8 py-6 rounded-xl border border-yellow-400/30 mb-8">
          <p className="text-yellow-400 font-sans text-center text-lg font-semibold mb-2">
            ✨ Sacred Booking Hours ✨
          </p>
          <p className="text-gray-300 text-center text-sm">
            Daily: 9:00 AM - 8:00 PM | Email: support@beautivine.com
          </p>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-24 left-12 text-yellow-400 text-2xl animate-bounce delay-300">🌸</div>
        <div className="absolute bottom-16 right-16 text-orange-400 text-xl animate-bounce delay-700">✨</div>
        <div className="absolute top-1/3 right-8 text-yellow-300 text-lg animate-bounce delay-1000">🪷</div>
      </div>
    </div>
  );
};

export default Banner;