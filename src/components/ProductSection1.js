import React from 'react';
import ProductBox from './ProductBox';

const ProductSection1 = () => {
  const products = [
    {
      title: 'Shop Deals in Fashion',
      image: { src: 'https://thegadgetflow.com/wp-content/uploads/2020/12/Best-smart-home-gadgets-of-2020.jpeg', alt: 'Fashion Item' },
      price: 49.99,
      rating: 4.2,
      linkText: 'See all deals',
    },
    {
      title: 'Get Your Game On',
      image: { src: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D', alt: 'Gaming PC' },
      price: 799.99,
      rating: 4.7,
      linkText: 'Shop gaming',
    },
    {
      title: 'Small Gifts Under $20',
      image: { src: 'https://img.freepik.com/free-photo/pink-model-career-kit-arrangement_23-2150083964.jpg?semt=ais_hybrid&w=740&q=80', alt: 'Gift' },
      price: 19.99,
      rating: 4.0,
      linkText: 'Shop now',
    },
    {
      title: 'New Home Arrivals Under $50',
      image: { src: 'https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg', alt: 'Home Decor' },
      price: 39.99,
      rating: 4.5,
      linkText: 'Shop the latest from home',
    },
  ];

  return (
    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-3 min-[360px]:gap-4 sm:gap-6 md:gap-8 p-3 min-[360px]:p-4 sm:p-6 md:p-8 bg-gradient-to-b from-teal-50 to-white mb-6 sm:mb-8 md:mb-12">
      {products.map((product, idx) => (
        <ProductBox
          key={idx}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}
          linkText={product.linkText}
          className="hover:z-10"
        />
      ))}
    </div>
  );
};

export default ProductSection1;