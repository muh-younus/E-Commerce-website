import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SubNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["Today's Deals", 'Customer Service', 'Registry', 'Gift Cards', 'Sell'];

  return (
    <div className="bg-teal-900 text-white flex items-center p-4 flex-wrap shadow-xl sticky top-14 z-40">
      {/* All Menu Button */}
      <div
        className="relative flex items-center px-4 py-2 rounded-lg transition-all duration-300 hover:bg-teal-800 hover:ring-2 hover:ring-amber-300 group"
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <i className="fas fa-bars text-teal-200 mr-2 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-amber-300"></i>
        <span className="text-sm font-medium transition-colors duration-300 group-hover:text-amber-300">All</span>
        {isMenuOpen && (
          <div className="absolute bg-teal-800 rounded-lg shadow-2xl top-full left-0 z-50 w-48 animate-fade-in-down">
            {['Departments', 'New Releases', 'Movers & Shakers', 'Amazon Prime', 'Your Lists'].map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-teal-700 hover:text-amber-300 transition-all duration-200 hover:pl-6"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Links */}
      <div className="flex flex-grow space-x-6 ml-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href="#"
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-teal-800 hover:text-amber-300 hover:ring-2 hover:ring-amber-300 group"
          >
            <span className="transform transition-transform duration-300 group-hover:scale-105">{link}</span>
          </a>
        ))}
      </div>

      {/* Deal */}
      <a
        href="#"
        className="px-4 py-2 rounded-lg text-sm font-medium bg-amber-500 text-white transition-all duration-300 hover:bg-amber-600 hover:ring-2 hover:ring-amber-300 group"
      >
        <span className="transform transition-transform duration-300 group-hover:scale-105">
          Shop Deals in Electronics
        </span>
      </a>
    </div>
  );
};

export default SubNavbar;