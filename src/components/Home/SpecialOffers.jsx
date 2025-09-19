import { NavLink } from "react-router-dom";

const SpecialOffers = () => (
  <section className="sectionGradient">
    {/* Subtle Background Elements */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 left-10 w-32 h-32 border border-amber-500/30 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-400/20 rounded-full animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-amber-300/15 rounded-full animate-float-slow"></div>
    </div>

    <div className="container-responsive relative z-10">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-6">
          <span className="text-3xl mr-4">🎉</span>
          <h2 className="subheading font-bold text-lg">
            Festive Season Offers
          </h2>
          <span className="text-3xl ml-4">🎉</span>
        </div>
        
        <h1 className="heading1 mb-8">
          <span className="gradient-text">
            Divine Beauty
          </span>
          <br />
          <span className="text-white">Awaits You</span>
        </h1>
        
        <div className="inline-block bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-8 py-4 rounded-2xl border border-amber-500/30 mb-8">
          <p className="text-xl md:text-2xl text-amber-100 font-semibold">
            ✨ This festive season, discover the divine side of beauty.
          </p>
        </div>
      </div>

      {/* Main Offer Card */}
      <div className="card-modern max-w-5xl mx-auto mb-12">
        <div className="p-10 text-center">
          <div className="mb-8">
            <span className="text-6xl block mb-4">🌸</span>
            <h3 className="heading2 mb-4">
              <span className="gradient-text">
                Up to 50% OFF
              </span>
            </h3>
            <p className="text-xl text-amber-100 mb-2">
              on Beautivine's signature services
            </p>
            <p className="text-luxury text-lg">
              Limited time festive offer - Book now!
            </p>
          </div>

          {/* Featured Services */}
          <div className="gridResponsive mb-8">
            <div className="cardFeature text-center">
              <span className="text-3xl block mb-3">🌺</span>
              <h4 className="text-white font-bold mb-2">Herbal Glow Facials</h4>
              <p className="text-gray-400 text-sm mb-2">Traditional sandalwood & turmeric</p>
              <p className="text-amber-400 font-bold">
                <span className="line-through text-gray-500">$89</span> $45
              </p>
            </div>
            
            <div className="cardFeature text-center">
              <span className="text-3xl block mb-3">💆</span>
              <h4 className="text-white font-bold mb-2">Ayurvedic Massage</h4>
              <p className="text-gray-400 text-sm mb-2">Ancient healing oil therapy</p>
              <p className="text-amber-400 font-bold">
                <span className="line-through text-gray-500">$125</span> $63
              </p>
            </div>
            
            <div className="cardFeature text-center">
              <span className="text-3xl block mb-3">💄</span>
              <h4 className="text-white font-bold mb-2">Bridal Makeup</h4>
              <p className="text-gray-400 text-sm mb-2">Regal transformations</p>
              <p className="text-amber-400 font-bold">
                <span className="line-through text-gray-500">$150</span> $75
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <NavLink to="/Reservation">
              <button className="btn-primary text-lg px-8 py-4 group">
                <span className="font-ui font-bold uppercase tracking-wide">
                  🎯 Claim Your Offer Now
                </span>
              </button>
            </NavLink>
            
            <NavLink to="/Services">
              <button className="btn-secondary text-lg px-8 py-4">
                <span className="font-ui font-semibold uppercase tracking-wide">
                  View All Services
                </span>
              </button>
            </NavLink>
          </div>
          
          <p className="text-gray-500 text-sm">
            * Offer valid until the end of festive season. Terms and conditions apply.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="flex justify-center space-x-8 text-3xl opacity-40">
        <span className="animate-float">🪷</span>
        <span className="animate-float-delayed">✨</span>
        <span className="animate-float-slow">🌿</span>
        <span className="animate-float delay-700">🔥</span>
        <span className="animate-float-delayed delay-900">💫</span>
      </div>
    </div>
  </section>
);

export default SpecialOffers;