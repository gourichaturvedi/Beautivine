const TestimonialCard = ({ content, author, location, image, emoji }) => (
  <div className="cardTestimonial max-w-lg">
    <div className="relative mb-6">
      <blockquote className="text-white text-lg leading-relaxed">
        "{content}"
      </blockquote>
      <div className="absolute -top-2 -left-2 text-amber-400 text-4xl opacity-30">"”</div>
    </div>
    
    <div className="flex items-center">
      <img
        src={image}
        alt={author}
        className="w-16 h-16 rounded-full border-2 border-amber-500/50 mr-4 object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-400 text-sm">★</span>
          ))}
        </div>
        <h4 className="text-white font-display text-lg font-semibold">
          {author}
        </h4>
        <p className="text-gray-400 text-sm">
          {location}
        </p>
      </div>
      <div className="text-2xl opacity-60">
        {emoji}
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <section className="bg-gradient-to-b from-gray-800 to-gray-900 section-padding relative">
    {/* Background Pattern */}
    <div className="absolute inset-0 bg-pattern opacity-5"></div>
    
    <div className="container-responsive relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-6">
          <span className="text-2xl mr-4">🪷</span>
          <span className="subheading">
            Sacred Testimonials
          </span>
          <span className="text-2xl ml-4">🪷</span>
        </div>
        
        <h2 className="heading2 text-center mb-6">
          <span className="gradient-text">
            Divine Experiences
          </span>
          <br />
          <span className="text-white">Our Guests Share</span>
        </h2>
        
        <p className="bodyLarge text-center max-w-2xl mx-auto">
          Discover the transformative journeys of those who have experienced the divine touch of Beautivine
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <TestimonialCard
          content="Beautivine transformed my entire approach to self-care. The Ayurvedic treatments are genuinely divine – I feel like I've discovered my inner goddess. The sacred atmosphere and expert care make every visit a spiritual journey."
          author="Priya Sharma"
          location="Mumbai, India"
          image="https://images.unsplash.com/photo-1494790108755-2616b612b1e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          emoji="🌸"
        />
        
        <TestimonialCard
          content="The bridal package at Beautivine was absolutely magical. They honored traditional rituals while giving me a modern, luxurious experience. I felt like a divine goddess on my wedding day – truly the divine touch of beauty!"
          author="Aria Patel"
          location="London, UK"
          image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
          emoji="✨"
        />
      </div>
    </div>
  </section>
);

export default Testimonials;