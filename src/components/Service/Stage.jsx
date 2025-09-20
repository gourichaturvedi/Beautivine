import { Stages } from "../../data";

const Stage = () => (
  <div className="space-y-6">
    {Stages.map((stage, index) => (
      <div key={stage.id} className="flex items-start group hover:transform hover:scale-105 transition-all duration-300">
        {/* Sacred Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:shadow-amber-500/25 transition-all duration-300">
          <span className="text-white text-lg font-bold">✓</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 space-y-2">
          <h4 className="text-white font-display text-lg md:text-xl font-semibold leading-tight group-hover:text-amber-400 transition-colors duration-300">
            {stage.title}
          </h4>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
            {stage.desc}
          </p>
        </div>
        
        {/* Sacred Number */}
        <div className="flex-shrink-0 ml-4">
          <div className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center border border-amber-500/30">
            <span className="text-amber-400 text-sm font-semibold">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Stage;
