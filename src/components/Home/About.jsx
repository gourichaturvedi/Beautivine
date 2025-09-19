import styles from "../../styles";

const About = () => (
  <section className="sectionGradient">
    <div className="container-responsive">
      <div className="gridTwoCol items-center">
        {/* Content Section */}
        <div className="space-y-8">
          <div className="inline-flex items-center">
            <span className="text-2xl mr-3">🕉️</span>
            <span className="subheading">
              About Beautivine
            </span>
          </div>
          
          <h2 className="heading2">
            <span className="gradient-text">
              Divine Beauty
            </span>
            <br />
            <span className="text-white">
              in Your Own Skin
            </span>
          </h2>
          
          <p className="bodyLarge max-w-2xl">
            At Beautivine, we honor the ancient wisdom of Ayurvedic beauty rituals while embracing modern luxury. 
            Our divine touch transforms not just how you look, but how you feel about yourself – radiating inner beauty through sacred self-care.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="cardFeature text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-white font-display text-lg font-semibold mb-2">Natural Ingredients</h3>
              <p className="text-gray-300 text-sm">100% pure and organic</p>
            </div>
            
            <div className="cardFeature text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🕉️</span>
              </div>
              <h3 className="text-white font-display text-lg font-semibold mb-2">Ancient Wisdom</h3>
              <p className="text-gray-300 text-sm">Ayurvedic traditions</p>
            </div>
            
            <div className="cardFeature text-center group">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-white font-display text-lg font-semibold mb-2">Divine Results</h3>
              <p className="text-gray-300 text-sm">Transformative experience</p>
            </div>
          </div>
        </div>
        
        {/* Image Section */}
        <div className="relative mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Spa and beauty treatments at Beautivine"
            className="relative z-10 w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
          />
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 text-amber-400 text-2xl animate-float delay-300">🌸</div>
          <div className="absolute -bottom-4 -right-4 text-amber-300 text-xl animate-float-delayed">🌿</div>
          <div className="absolute top-1/3 -right-8 text-orange-400 text-lg animate-float-slow">✨</div>
        </div>
      </div>
    </div>
  </section>
);

export default About;