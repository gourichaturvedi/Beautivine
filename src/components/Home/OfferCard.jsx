const OfferCard = () => (
  <div className="p-6">
    <div className="space-y-6">
      {/* Contact Information */}
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </div>
          <div>
            <h3 className="text-gray-900 font-ui font-bold text-sm uppercase tracking-wide">
              Mail Us:
            </h3>
            <p className="text-gray-700 font-ui text-sm">
              support@beautivine.com
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </div>
          <div>
            <h3 className="text-gray-900 font-ui font-bold text-sm uppercase tracking-wide">
              Call Us:
            </h3>
            <p className="text-gray-700 font-ui text-sm">
              +91 9090343490
            </p>
          </div>
        </div>
      </div>
      
      {/* Special Offer Badge */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-6 text-center">
        <h3 className="text-white font-ui font-bold text-lg uppercase tracking-wide mb-2">
          - Get Flat -
        </h3>
        <div className="text-4xl font-bold gradient-text mb-2">
          50%
        </div>
        <p className="text-white font-ui font-bold text-lg uppercase tracking-wide">
          Discount
        </p>
      </div>
    </div>
  </div>
);

export default OfferCard;
