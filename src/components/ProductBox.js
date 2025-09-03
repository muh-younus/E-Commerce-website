import React from 'react';

const ProductBox = ({ title, image, price, rating, linkText, className = '' }) => {
  const fallbackImage = 'https://via.placeholder.com/400x288?text=Product+Image';

  return (
    <div
      className={`relative bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-103 w-full max-w-[90vw] 2xs:max-w-[20rem] xs:max-w-[22rem] sm:max-w-[24rem] md:max-w-[26rem] lg:max-w-[28rem] mx-auto overflow-hidden ${className}`}
    >
      {/* Product Image */}
      <div className="relative group h-[40vw] 2xs:h-[42vw] xs:h-[44vw] sm:h-[48vw] md:h-[50vw] lg:h-[18rem] max-h-72">
        <img
          src={image?.src || fallbackImage}
          alt={image?.alt || 'Product'}
          className="w-full h-full object-cover rounded-t-2xl transition-all duration-300 group-hover:scale-105 group-hover:ring-4 group-hover:ring-amber-300"
          onError={(e) => (e.target.src = fallbackImage)}
        />
        <div className="absolute inset-0 bg-teal-900 opacity-0 group-hover:opacity-20 rounded-t-2xl transition-opacity duration-300"></div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 p-2 2xs:p-3 xs:p-4 sm:p-5 md:p-6 w-full bg-gradient-to-t from-teal-900/80 to-transparent">
        <h3 className="text-xs 2xs:text-sm xs:text-base sm:text-lg font-bold text-white mb-1 2xs:mb-1.5 xs:mb-2 line-clamp-2">{title || 'Product Title'}</h3>
        <div className="flex items-center mb-1 2xs:mb-1.5 xs:mb-2 sm:mb-3">
          <div className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 2xs:w-3.5 2xs:h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 ${i < Math.round(rating || 0) ? 'fill-current' : 'fill-none stroke-current'}`}
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
          <span className="ml-1 2xs:ml-1.5 xs:ml-2 text-[0.65rem] 2xs:text-xs xs:text-xs sm:text-sm text-teal-200">{(rating || 0).toFixed(1)}</span>
        </div>
        <p className="text-sm 2xs:text-base xs:text-lg sm:text-xl font-semibold text-white mb-1 2xs:mb-2 xs:mb-3 sm:mb-4">${(price || 0).toFixed(2)}</p>
        <a
          href="#"
          className="inline-block bg-amber-500 text-white px-2 2xs:px-3 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-full text-[0.65rem] 2xs:text-xs xs:text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-amber-600 hover:ring-2 hover:ring-amber-300 hover:scale-105 animate-pulse-once"
        >
          {linkText || 'Shop Now'}
        </a>
      </div>
    </div>
  );
};

export default ProductBox;