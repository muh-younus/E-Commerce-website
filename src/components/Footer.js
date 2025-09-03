import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="first-panel bg-gray-700 py-3 sm:py-4 text-center cursor-pointer transition-colors duration-300 hover:bg-gray-600">
        <p className="text-xs sm:text-sm">Back to top</p>
      </div>
      <div className="second-panel max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        <div className="para">
          <h6 className="text-base sm:text-lg font-bold mb-2">Get to Know Us</h6>
          <ul className="space-y-1 sm:space-y-2">
            {['Careers', 'Blog', 'About Amazon', 'Investor Relations', 'Amazon Device', 'Amazon Science'].map((item, index) => (
              <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                <a href="#" className="text-xs sm:text-sm transition-colors duration-300 hover:text-yellow-400">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="para">
          <h6 className="text-base sm:text-lg font-bold mb-2">Make Money with Us</h6>
          <ul className="space-y-1 sm:space-y-2">
            {[
              'Sell products on Amazon',
              'Sell on Amazon Business',
              'Sell apps on Amazon',
              'Become an Affiliate',
              'Advertise Your Products',
              'Self-Publish with Us',
              'Host an Amazon Hub',
              'See More Make Money with Us',
            ].map((item, index) => (
              <li key={index} className="flex items-center transition-transform duration-300 hover:translate-x-1">
                <a href="#" className="text-xs sm:text-sm transition-colors duration-300 hover:text-yellow-400">{item}</a>
                {item === 'See More Make Money with Us' && (
                  <i className="fas fa-angle-right ml-1 text-xs sm:text-sm"></i>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="para">
          <h6 className="text-base sm:text-lg font-bold mb-2">Amazon Payment Products</h6>
          <ul className="space-y-1 sm:space-y-2">
            {['Amazon Business Card', 'Shop with Points', 'Reload Your Balance', 'Amazon Currency Converter'].map((item, index) => (
              <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                <a href="#" className="text-xs sm:text-sm transition-colors duration-300 hover:text-yellow-400">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="para">
          <h6 className="text-base sm:text-lg font-bold mb-2">Let Us Help You</h6>
          <ul className="space-y-1 sm:space-y-2">
            {['Amazon and COVID-19', 'Your Orders', 'Shipping Rates & Policies', 'Returns & Replacements', 'Manage Your Content and Devices', 'Help'].map((item, index) => (
              <li key={index} className="transition-transform duration-300 hover:translate-x-1">
                <a href="#" className="text-xs sm:text-sm transition-colors duration-300 hover:text-yellow-400">{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="line border-gray-600" />
      <div className="last-section11 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="img11 transition-transform duration-300 hover:scale-105">
          <img src="/logo.png" alt="Amazon Logo" className="h-6 sm:h-8" />
        </div>
        <div className="button flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-2 sm:mt-0">
          <div className="div11 border border-gray-600 px-2 py-1 sm:p-2 rounded flex items-center text-xs sm:text-sm transition-transform duration-300 hover:scale-105 hover:border-white">
            <i className="fas fa-globe mr-1 sm:mr-2 text-xs sm:text-sm"></i>
            <span>English</span>
            <i className="fas fa-angle-down ml-1 text-xs sm:text-sm"></i>
          </div>
          <div className="div111 border border-gray-600 px-2 py-1 sm:p-2 rounded flex items-center text-xs sm:text-sm transition-transform duration-300 hover:scale-105 hover:border-white">
            <p>$</p>
            <span className="ml-1">USD - U.S. Dollar</span>
            <i className="fas fa-angle-down ml-1 text-xs sm:text-sm"></i>
          </div>
          <div className="div12 border border-gray-600 px-2 py-1 sm:p-2 rounded flex items-center text-xs sm:text-sm transition-transform duration-300 hover:scale-105 hover:border-white">
            <img src="/flag.jpeg" alt="Flag" className="w-3 sm:w-4 h-2 sm:h-3 mr-1 sm:mr-2" />
            <span>United States</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;