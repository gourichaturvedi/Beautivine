const styles = {
  // Layout & Positioning
  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetween: "flex justify-between items-center",

  // Responsive Padding & Margins
  paddingX: "px-4 sm:px-6 lg:px-8",
  paddingY: "py-8 sm:py-12 lg:py-16",
  padding: "px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16",
  sectionPadding: "py-16 md:py-24",

  marginX: "mx-4 sm:mx-6 lg:mx-8",
  marginY: "my-8 sm:my-12 lg:my-16",

  // Container
  boxWidth: "max-w-7xl w-full mx-auto",
  containerResponsive: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",

  // Typography - Modern & Refined
  heading1: "font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white",
  heading2: "font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white",
  heading3: "font-display text-2xl md:text-3xl font-semibold tracking-tight text-white",
  heading4: "font-display text-xl md:text-2xl font-semibold tracking-tight text-gray-900",
  
  subheading: "font-ui text-sm md:text-base font-medium uppercase tracking-widest text-amber-500",
  bodyLarge: "font-body text-lg md:text-xl text-gray-300 leading-relaxed",
  bodyText: "font-body text-base text-gray-400 leading-relaxed",
  bodySmall: "font-body text-sm text-gray-500 leading-relaxed",

  // Stage/Process Typography
  stageTitle: "font-ui text-base md:text-lg font-semibold text-gray-900 leading-relaxed",
  stageDesc: "font-body text-sm md:text-base text-gray-600 leading-relaxed max-w-md",

  // Service Typography
  serviceItem: "font-display text-lg md:text-xl font-semibold text-gray-900 leading-tight",
  serviceDesc: "font-body text-sm md:text-base text-gray-600 leading-relaxed",

  // Interactive Elements
  socialIcon: "w-5 h-5 text-gray-600 hover:text-amber-500 transition-colors duration-200 cursor-pointer",
  
  // Buttons - Modern Design
  btnPrimary: "btn-primary focus-ring",
  btnSecondary: "btn-secondary focus-ring",
  btnGhost: "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-gray-300 border border-gray-600 rounded-lg hover:border-amber-500 hover:text-amber-500 transition-all duration-300 focus-ring",

  // Cards & Containers
  cardModern: "card-modern",
  cardFeature: "bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:border-amber-500/50 transition-all duration-300",
  cardTestimonial: "bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 hover:border-amber-500/30 transition-all duration-300",

  // Background Variants
  bgPrimary: "bg-gray-900",
  bgSecondary: "bg-gray-800",
  bgTertiary: "bg-gray-700",
  bgGradient: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
  bgGradientLight: "bg-gradient-to-br from-gray-100 to-gray-50",

  // Section Styling
  sectionDark: "bg-gray-900 section-padding",
  sectionLight: "bg-gray-50 section-padding",
  sectionGradient: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 section-padding relative",

  // Decorative Elements
  decorativePattern: "absolute inset-0 bg-pattern opacity-30",
  subtleGlow: "subtle-glow",
  
  // Animation Classes
  animateFloat: "animate-float",
  animateFloatDelayed: "animate-float-delayed",
  animateFloatSlow: "animate-float-slow",
  
  // Hover Effects
  hoverScale: "transform transition-transform duration-300 hover:scale-105",
  hoverGlow: "transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20",
  
  // Layout Components
  gridResponsive: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  gridTwoCol: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
  
  // Form Elements
  inputModern: "w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none transition-colors duration-200",
  
  // Footer
  footerSection: "text-white font-display text-xl font-semibold mb-4",
  footerLink: "text-gray-400 hover:text-amber-500 transition-colors duration-200 text-sm",

  // Legacy Support (for existing components)
  features: "cardFeature",
  heading2: "heading3",
  paragraph: "bodyText",
  bt: "btnGhost",
  btSpan: "font-ui text-sm font-semibold uppercase tracking-widest",
  footers: "footerSection",
  coloredBg: "bg-gray-50 section-padding",
};

export default styles;
