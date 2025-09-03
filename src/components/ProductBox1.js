import React from 'react';

const ProductBox3 = ({ title, images = [], price, rating, linkText, className = '' }) => {
  const fallbackImage = 'https://via.placeholder.com/400x288?text=Product+Image';
  const thumbnailFallback = 'https://via.placeholder.com/100x100?text=Thumbnail';

  return (
    <div
      className={`relative bg-white rounded-xl border-4 border-teal-200 shadow-lg hover:shadow-2xl transition-all duration-200 transform hover:scale-102 w-full max-w-[90vw] 2xs:max-w-[20rem] xs:max-w-[22rem] sm:max-w-[24rem] md:max-w-[26rem] lg:max-w-[28rem] mx-auto overflow-hidden ${className} md:flex`}
    >
      {/* Image Section */}
      <div className="flex-1 p-3 2xs:p-4 xs:p-5 sm:p-6 md:p-4">
        {/* Featured Image */}
        <div className="relative group h-40 2xs:h-44 xs:h-48 sm:h-56 md:h-64">
          <img
            src={images[0]?.src || fallbackImage}
            alt={images[0]?.alt || 'Featured Product'}
            className="w-full h-full object-cover rounded-md transition-all duration-200 group-hover:scale-105 group-hover:ring-4 group-hover:ring-amber-400"
            onError={(e) => (e.target.src = fallbackImage)}
          />
          <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-15 rounded-md transition-opacity duration-200"></div>
        </div>
        {/* Thumbnail Row */}
        <div className="flex space-x-2 mt-2 2xs:mt-3 xs:mt-4">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="relative group flex-1 h-12 2xs:h-14 xs:h-16 sm:h-20">
              <img
                src={images[idx + 1]?.src || thumbnailFallback}
                alt={images[idx + 1]?.alt || `Thumbnail ${idx + 1}`}
                className="w-full h-full object-cover rounded-md transition-all duration-200 group-hover:scale-110 group-hover:ring-2 group-hover:ring-amber-300"
                onError={(e) => (e.target.src = thumbnailFallback)}
              />
              <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-10 rounded-md transition-opacity duration-200"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Panel (Side on md+, Bottom on sm and below) */}
      <div
        className="md:w-1/3 md:bg-teal-900/90 md:p-4 md:flex md:flex-col md:justify-between sm:bg-gradient-to-t sm:from-teal-900/80 sm:to-transparent sm:absolute sm:bottom-0 sm:left-0 sm:w-full sm:p-3 2xs:p-4 xs:p-5"
      >
        <div>
          <h3 className="text-xs 2xs:text-sm xs:text-base sm:text-lg md:text-base font-bold tracking-tight text-white mb-1 2xs:mb-1.5 xs:mb-2 sm:mb-3 md:mb-2 line-clamp-2">{title || 'Product Title'}</h3>
          <div className="flex items-center mb-1 2xs:mb-1.5 xs:mb-2 sm:mb-3 md:mb-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 2xs:w-3.5 2xs:h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 ${i < Math.round(rating || 0) ? 'fill-current' : 'fill-none stroke-current'}`}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                  />
                </svg>
              ))}
            </div>
            <span className="ml-1 2xs:ml-1.5 xs:ml-2 text-[0.65rem] 2xs:text-xs xs:text-xs sm:text-sm md:text-xs text-teal-200">{(rating || 0).toFixed(1)}</span>
          </div>
          <p className="text-sm 2xs:text-base xs:text-lg sm:text-xl md:text-base font-bold tracking-tight text-white mb-1 2xs:mb-2 xs:mb-3 sm:mb-4 md:mb-2">${(price || 0).toFixed(2)}</p>
        </div>
        <a
          href="#"
          className="inline-block bg-amber-500 text-white px-2 2xs:px-3 xs:px-4 sm:px-6 md:px-4 py-1 xs:py-1.5 sm:py-2 md:py-1.5 rounded-full text-[0.65rem] 2xs:text-xs xs:text-xs sm:text-sm md:text-xs font-bold tracking-tight transition-all duration-200 hover:bg-amber-600 hover:ring-2 hover:ring-amber-500 hover:scale-110 animate-pulse-once"
        >
          {linkText || 'Shop Now'}
        </a>
      </div>
    </div>
  );
};

export default ProductBox3;