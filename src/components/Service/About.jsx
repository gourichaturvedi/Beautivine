import Stage from "./Stage";

const About = () => (
  <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    {/* Background decorative elements */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-1/4 w-40 h-40 border border-yellow-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-32 h-32 border border-orange-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/6 w-24 h-24 border border-yellow-300 rounded-full animate-pulse delay-500"></div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-8">
          {/* Sacred service badge */}
          <div className="inline-flex items-center mb-6 group">
            <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">🔮</span>
            <span className="text-amber-400 uppercase tracking-widest text-sm font-medium">
              Divine Service Experience
            </span>
            <span className="text-2xl ml-3 group-hover:scale-110 transition-transform duration-300">🔮</span>
          </div>
          
          <h2 className="text-white font-display text-4xl md:text-5xl font-semibold leading-[120%] tracking-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Sacred Beauty
            </span>
            <br />
            <span className="text-white">
              Rituals Explained
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Discover the divine artistry behind our beauty services. Each treatment at Beautivine is a sacred journey 
            that honors ancient Ayurvedic wisdom while embracing modern luxury, creating transformative experiences 
            that nurture both your outer beauty and inner radiance.
          </p>
          
          {/* Methodology Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <span className="text-2xl mr-3">✨</span>
              <h3 className="text-white font-display text-2xl font-semibold">
                Our Sacred Methodology
              </h3>
            </div>
            
            <Stage />
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Sacred beauty treatments at Beautivine"
            className="relative z-10 w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
          />
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 text-amber-400 text-2xl animate-float delay-300">🌸</div>
          <div className="absolute -bottom-4 -right-4 text-amber-300 text-xl animate-float-delayed">🌿</div>
          <div className="absolute top-1/3 -right-8 text-orange-400 text-lg animate-float-slow">✨</div>
        </div>
      </div>
    </div>
    
    {/* Floating decorative elements */}
    <div className="absolute top-24 left-12 text-yellow-400 text-2xl animate-bounce delay-300">🪷</div>
    <div className="absolute bottom-16 right-16 text-orange-400 text-xl animate-bounce delay-700">💫</div>
    <div className="absolute top-1/3 right-8 text-yellow-300 text-lg animate-bounce delay-1000">🕉️</div>
  </section>
);

export default About;
