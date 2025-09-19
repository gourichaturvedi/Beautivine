import { NavLink } from "react-router-dom";
import { stories } from "../../data";

const BlogCard = ({ story }) => (
  <article className="card-modern group">
    <div className="overflow-hidden rounded-t-xl">
      <img
        src={story.icon}
        alt={story.title}
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <p className="subheading text-xs mb-3">
        {story.caption}
      </p>
      <h3 className="text-white font-display text-xl font-semibold leading-tight mb-3 group-hover:text-amber-400 transition-colors duration-300">
        {story.title}
      </h3>
      <p className="text-luxury text-sm leading-relaxed">
        {story.desc}
      </p>
    </div>
  </article>
);

const Latest = () => (
  <section className="bg-gradient-to-b from-gray-800 to-gray-900 section-padding relative">
    {/* Background Pattern */}
    <div className="decorativePattern"></div>
    
    <div className="container-responsive relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center mb-6">
          <span className="text-2xl mr-4">📜</span>
          <span className="subheading">
            Sacred Wisdom Blog
          </span>
          <span className="text-2xl ml-4">📜</span>
        </div>
        
        <h2 className="heading2 text-center mb-6">
          <span className="gradient-text">
            Latest Divine
          </span>
          <br />
          <span className="text-white">Wellness Insights</span>
        </h2>
        
        <p className="bodyLarge text-center max-w-2xl mx-auto">
          Discover ancient wisdom and modern beauty secrets through our curated articles on Ayurvedic wellness
        </p>
      </div>
      
      <div className="gridResponsive mb-12">
        {stories.slice(0, 3).map((story) => (
          <BlogCard key={story.id} story={story} />
        ))}
      </div>
      
      <div className="text-center">
        <NavLink to="/Blog">
          <button className="btn-primary text-base px-8 py-4">
            <span className="font-ui font-semibold uppercase tracking-wide">
              Explore Sacred Wisdom
            </span>
          </button>
        </NavLink>
      </div>
    </div>
  </section>
);

export default Latest;