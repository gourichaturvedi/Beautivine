import MemberCard from "./MemberCard";

const Membership = () => (
  <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-16 left-1/4 w-32 h-32 border border-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-24 right-1/4 w-24 h-24 border border-orange-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/6 w-20 h-20 border border-yellow-300 rounded-full animate-pulse delay-500"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col justify-center lg:items-start items-center space-y-6">
          {/* Sacred appointment badge */}
          <div className="inline-flex items-center mb-4 group">
            <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">📅</span>
            <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">
              Schedule Your Divine Experience
            </span>
            <span className="text-2xl ml-3 group-hover:scale-110 transition-transform duration-300">📅</span>
          </div>
          
          <h2 className="text-white text-center lg:text-left font-display text-4xl md:text-5xl font-semibold leading-[120%] tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Sacred Appointment
            </span>
            <br />
            <span className="text-white">
              Booking
            </span>
          </h2>
          
          <p className="text-gray-300 text-center lg:text-left text-lg leading-relaxed max-w-lg">
            Begin your transformative journey with Beautivine. Reserve your sacred moment where ancient Ayurvedic wisdom meets modern luxury, crafting a divine experience tailored just for you.
          </p>
          
          {/* Sacred booking info */}
          <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 px-6 py-4 rounded-xl border border-yellow-400/30">
            <p className="text-yellow-400 font-sans text-center lg:text-left text-sm font-semibold mb-1">
              ✨ Sacred Hours ✨
            </p>
            <p className="text-gray-300 text-center lg:text-left text-sm">
              Daily: 9:00 AM - 8:00 PM
            </p>
          </div>
        </div>
        
        <MemberCard />
      </div>
    </div>
    
    {/* Floating decorative elements */}
    <div className="absolute top-24 left-12 text-yellow-400 text-2xl animate-bounce delay-300">🌸</div>
    <div className="absolute bottom-16 right-16 text-orange-400 text-xl animate-bounce delay-700">✨</div>
    <div className="absolute top-1/3 right-8 text-yellow-300 text-lg animate-bounce delay-1000">🪷</div>
  </section>
);

export default Membership;
