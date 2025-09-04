import React from 'react';

function BestSellers({ addToCart }) {
  const bestSellers = [
    { id: 101, name: 'Charger', price: 19.99, image: 'https://static.vecteezy.com/system/resources/previews/004/718/186/non_2x/mobile-charger-and-usb-cable-on-yellow-background-photo.jpg' },
    { id: 102, name: 'Screen Protector', price: 9.99, image: 'https://spigen.com.sg/cdn/shop/files/iPhone-13-Pro-Max-Screen-Protector-Full-Coverage-HD-_value_Product-ven_-168332970.jpg?v=1720803995' },
    { id: 103, name: 'Stylus Pen', price: 14.99, image: 'https://img.freepik.com/free-photo/close-up-blue-pen_23-2150835532.jpg?semt=ais_incoming&w=740&q=80' },
    { id: 104, name: 'Pen Drive', price: 12.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74yNsTHF4XnjDdPLsbv4-rcKGdm10tQs6Nw&s' },
    { id: 105, name: 'Printer', price: 99.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0aMH0eGB-aXiwHrsDdUkYsoJKp1oWCukdA&s' },
    { id: 106, name: 'Mouse Pad', price: 7.99, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2V8ZW58MHx8MHx8fDA%3D' },
  ];

  return (
    <div className="mt-8 p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-900 animate-slideInFromLeft">Best Sellers in Computer & Accessories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {bestSellers.map((product, index) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg transform transition-all duration-500 ease-out hover:bounce animate-slideIn"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded mb-2 transition-transform duration-300 hover:rotate-3"
            />
            <h3 className="text-sm font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600">
              {product.name}
            </h3>
            <p className="text-gray-600 text-sm">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 text-yellow-400 font-semibold transition-all duration-300 hover:text-yellow-600 hover:pulse focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        .hover\\:bounce:hover {
          animation: bounce 0.4s ease-in-out;
        }
        .hover\\:pulse:hover {
          animation: pulse 0.3s ease-in-out;
        }
        .hover\\:rotate-3:hover {
          transform: rotate(3deg);
        }
      `}</style>
    </div>
  );
}

export default BestSellers;