// src/components/ProductSection2.js
import React from 'react';
import ProductBox from './ProductBox';

const ProductSection1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Fashion Deals */}
      <ProductBox 
        title="Shop deals in fashion"
        images={[
          { src: './pant.jpg', text: 'Jeans under $50' },
          { src: './shirt.jpg', text: 'Tops under $25' },
          { src: './scart.jpg', text: 'Scarves' }, // Assuming scart is scarf
          { src: './shoes.jpg', text: 'Dresses under $30' }
        ]}
        linkText="See all deals"
      />

      {/* Gaming */}
      <div className="bg-white p-4 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="font-bold mb-2">Get your game on</h3>
        <img src="./pc1.jpg" alt="Gaming PC" className="w-full h-80 object-cover hover:scale-105 transition duration-300" />
        <p className="text-blue-500 hover:underline mt-2 cursor-pointer">Shop gaming</p>
      </div>

      {/* Gifts */}
      <div className="bg-white p-4 shadow-md hover:shadow-lg transition duration-300">
        <h3 className="font-bold mb-2">Small gifts under $20</h3>
        <img src="./amazon box.jpg" alt="Gift" className="w-full h-80 object-cover hover:scale-105 transition duration-300" />
        <p className="text-blue-500 hover:underline mt-2 cursor-pointer">Shop now</p>
      </div>

      {/* New Home */}
      <ProductBox 
        title="New home arrivals under $50"
        images={[
          { src: './pot1.jpg', text: 'Kitchen & dining' },
          { src: './tin.jpg', text: 'Home Improvement' },
          { src: './spin.jpg', text: 'Decor' },
          { src: './bath.jpg', text: 'Bedding & bath' }
        ]}
        linkText="Shop the latest from home"
      />
    </div>
  );
};

export default ProductSection1;