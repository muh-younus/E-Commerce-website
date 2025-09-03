import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const categories = ['All', 'Books', 'Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Toys'];
  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'UR', name: 'Urdu' },
    { code: 'KO', name: 'Korean' },
    { code: 'ES', name: 'Spanish' },
    { code: 'FR', name: 'French' },
    { code: 'DE', name: 'German' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery} in category: ${selectedCategory}`);
      // Add search functionality here
    }
  };

  return (
    <nav className="bg-teal-900 text-white p-4 flex items-center justify-between flex-wrap shadow-2xl sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center px-4 py-2 group">
        <div className="w-36 h-12 bg-[url('https://via.placeholder.com/144x48?text=Logo')] bg-contain bg-no-repeat transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex-grow max-w-3xl mx-4 flex items-center bg-white text-gray-900 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      >
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-gray-50 text-gray-800 p-3 rounded-l-full text-sm focus:outline-none focus:ring-2 focus:ring-coral-500 transition duration-200"
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
          className="flex-grow p-3 text-sm outline-none placeholder-gray-400 transition-all duration-200 focus:ring-2 focus:ring-coral-500"
        />
        <button
          type="submit"
          className="bg-coral-500 p-3 rounded-r-full hover:bg-coral-600 transition-all duration-300 flex items-center justify-center"
        >
          <i className="fas fa-search text-gray-800 transform transition-transform duration-300 hover:scale-110"></i>
        </button>
      </form>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <div
          className="relative"
          onMouseEnter={() => setIsLanguageOpen(true)}
          onMouseLeave={() => setIsLanguageOpen(false)}
        >
          <div className="flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 group">
            <i className="fas fa-globe text-teal-200 mr-2 transform transition-transform duration-300 group-hover:rotate-12"></i>
            <span className="text-sm font-medium">{selectedLanguage}</span>
          </div>
          {isLanguageOpen && (
            <div className="absolute bg-teal-800 rounded-lg shadow-xl mt-2 z-10 w-36 animate-fade-in-down">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguage(lang.code);
                    setIsLanguageOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-teal-700 transition-all duration-200 hover:pl-6"
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Account */}
        <div
          className="relative"
          onMouseEnter={() => setIsAccountOpen(true)}
          onMouseLeave={() => setIsAccountOpen(false)}
        >
          <div className="flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 group">
            <i className="fas fa-user text-teal-200 mr-2 transform transition-transform duration-300 group-hover:scale-110"></i>
            <span className="text-sm font-medium">Account</span>
            <i className="fas fa-chevron-down ml-1 text-teal-200 transform transition-transform duration-300 group-hover:rotate-180"></i>
          </div>
          {isAccountOpen && (
            <div className="absolute bg-teal-800 rounded-lg shadow-xl mt-2 z-10 w-48 animate-fade-in-down">
              <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-teal-700 transition-all duration-200 hover:pl-6">
                Your Profile
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-teal-700 transition-all duration-200 hover:pl-6">
                Your Orders
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-teal-700 transition-all duration-200 hover:pl-6">
                Wishlist
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-teal-700 transition-all duration-200 hover:pl-6">
                Sign Out
              </button>
            </div>
          )}
        </div>

        {/* Cart */}
        <div className="flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 group">
          <i className="fas fa-shopping-cart text-teal-200 mr-2 transform transition-transform duration-300 group-hover:scale-110"></i>
          <span className="text-sm font-medium">Cart</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;