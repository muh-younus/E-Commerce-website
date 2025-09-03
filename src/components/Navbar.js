import React, { useState, useEffect, useRef } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ cartCount, toggleCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languageRef = useRef(null);
  const accountRef = useRef(null);

  const categories = ['All', 'Books', 'Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Toys'];
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'UR', name: 'Urdu' },
    { code: 'KO', name: 'Korean' },
    { code: 'ES', name: 'Spanish' },
    { code: 'FR', name: 'French' },
    { code: 'DE', name: 'German' },
  ];

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageRef.current &&
        !languageRef.current.contains(event.target) &&
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
        setIsAccountOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery} in category: ${selectedCategory}`);
      // Add search functionality here
    }
  };

  // Handle keyboard navigation for dropdowns
  const handleKeyDown = (e, setOpen) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setIsLanguageOpen(false);
      setIsAccountOpen(false);
    }
  };

  return (
    <nav className="bg-teal-900 text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Logo */}
        <div className="flex items-center px-2 sm:px-4 py-2 group hover-scale transition-transform duration-300">
          <img
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/08/E-Commerce-Logo-Design-PNG.png"
            alt="Logo"
            className="h-10 sm:h-20 w-auto"
          />
        </div>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex-grow max-w-3xl w-full sm:w-auto flex items-center bg-white text-gray-900 rounded-full overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg"
          role="search"
          aria-label="Search products"
        >
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-gray-100 text-gray-800 p-2 sm:p-3 text-xs sm:text-sm rounded-l-full focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            aria-label="Select product category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="flex-grow p-2 sm:p-3 text-xs sm:text-sm outline-none placeholder-gray-400 transition-all duration-300 focus:ring-2 focus:ring-yellow-400"
            aria-label="Search input"
          />
          <button
            type="submit"
            className="bg-yellow-400 p-2 sm:p-3 rounded-r-full hover:bg-yellow-500 transition-colors duration-300 flex items-center justify-center"
            aria-label="Submit search"
          >
            <i className="fas fa-search text-gray-800 text-xs sm:text-sm hover-scale transition-transform duration-300"></i>
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
          {/* Language Selector */}
          <div
            ref={languageRef}
            className="relative"
            onClick={() => {
              setIsLanguageOpen((prev) => !prev);
              setIsAccountOpen(false); // Close other dropdown
            }}
            onKeyDown={(e) => handleKeyDown(e, setIsLanguageOpen)}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            aria-expanded={isLanguageOpen}
            aria-label="Language selector"
          >
            <div className="flex items-center px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 group hover-scale">
              <i className="fas fa-globe text-teal-200 mr-1 sm:mr-2 text-xs sm:text-sm transition-transform duration-300 group-hover:rotate-12"></i>
              <span className="text-xs sm:text-sm font-medium">{selectedLanguage}</span>
            </div>
            {isLanguageOpen && (
              <div className="absolute right-0 bg-teal-800 rounded-lg shadow-lg mt-1 sm:mt-2 z-20 w-32 sm:w-36 transition-all duration-300 opacity-100 transform translate-y-0">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang.code);
                      setIsLanguageOpen(false);
                    }}
                    className="block w-full text-left px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white hover:bg-teal-700 hover:pl-5 sm:hover:pl-6 transition-all duration-200"
                    aria-label={`Select ${lang.name} language`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Account */}
          <div
            ref={accountRef}
            className="relative"
            onClick={() => {
              setIsAccountOpen((prev) => !prev);
              setIsLanguageOpen(false); // Close other dropdown
            }}
            onKeyDown={(e) => handleKeyDown(e, setIsAccountOpen)}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
            aria-expanded={isAccountOpen}
            aria-label="Account menu"
          >
            <div className="flex items-center px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 group hover-scale">
              <i className="fas fa-user text-teal-200 mr-1 sm:mr-2 text-xs sm:text-sm transition-transform duration-300 group-hover:scale-110"></i>
              <span className="text-xs sm:text-sm font-medium">Account</span>
              <i className="fas fa-chevron-down ml-1 text-teal-200 text-xs sm:text-sm transition-transform duration-300 group-hover:rotate-180"></i>
            </div>
            {isAccountOpen && (
              <div className="absolute right-0 bg-teal-800 rounded-lg shadow-lg mt-1 sm:mt-2 z-20 w-40 sm:w-48 transition-all duration-300 opacity-100 transform translate-y-0">
                <button
                  className="block w-full text-left px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white hover:bg-teal-700 hover:pl-5 sm:hover:pl-6 transition-all duration-200"
                  aria-label="View your profile"
                >
                  Your Profile
                </button>
                <button
                  className="block w-full text-left px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white hover:bg-teal-700 hover:pl-5 sm:hover:pl-6 transition-all duration-200"
                  aria-label="View your orders"
                >
                  Your Orders
                </button>
                <button
                  className="block w-full text-left px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white hover:bg-teal-700 hover:pl-5 sm:hover:pl-6 transition-all duration-200"
                  aria-label="View your wishlist"
                >
                  Wishlist
                </button>
                <button
                  className="block w-full text-left px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-white hover:bg-teal-700 hover:pl-5 sm:hover:pl-6 transition-all duration-200"
                  aria-label="Sign out"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>

          {/* Cart */}
          <div
            onClick={toggleCart}
            className="flex items-center px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 group hover-scale relative"
            role="button"
            aria-label={`View cart with ${cartCount} items`}
          >
            <i className="fas fa-shopping-cart text-teal-200 mr-1 sm:mr-2 text-xs sm:text-sm transition-transform duration-300 group-hover:scale-110"></i>
            <span className="text-xs sm:text-sm font-medium">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-yellow-400 text-gray-800 text-xs font-bold rounded-full h-4 sm:h-5 w-4 sm:w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;