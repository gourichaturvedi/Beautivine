const BenefitCard = ({ title, content }) => {
  return (
    <div className="card-modern group">
      <div className="p-8">
        {/* Icon */}
        <div className="w-16 h-16 mb-6 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500 rounded-full group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl">✨</span>
        </div>
        
        {/* Content */}
        <h3 className="text-white font-display text-xl font-semibold mb-4 leading-tight">
          {title}
        </h3>
        
        <p className="text-luxury leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;