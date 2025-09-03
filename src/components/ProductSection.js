import React from 'react';
import ProductBox from './ProductBox';

const ProductSection = () => {
  const products = [
    {
      title: 'Shop Deals in Fashion',
      image: { 
        src: 'https://www.shutterstock.com/image-photo/fashion-model-girl-full-length-260nw-1507738709.jpg', 
        alt: 'Fashion Item' 
      },
      price: 49.99,
      rating: 4.2,
      linkText: 'See all deals',
    },
    {
      title: 'Get Your Game On',
      image: { 
        src: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWluZyUyMHBjfGVufDB8fDB8fHww', 
        alt: 'Gaming PC' 
      },
      price: 799.99,
      rating: 4.7,
      linkText: 'Shop gaming',
    },
    {
      title: 'Small Gifts Under $20',
      image: { 
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxkESaI6Ex-gRjkDzN2CoGG3C5qxYcn5biyQ&s', 
        alt: 'Gift' 
      },
      price: 19.99,
      rating: 4.0,
      linkText: 'Shop now',
    },
    {
      title: 'New Home Arrivals Under $50',
      image: { 
        src: 'https://media.istockphoto.com/id/1182454657/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=qw37MGIiTL_jML3_Tbm4bM-jNLCrocSWj7DanhBr_bY=', 
        alt: 'Home Decor' 
      },
      price: 39.99,
      rating: 4.5,
      linkText: 'Shop the latest from home',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8 bg-gradient-to-b from-teal-50 to-white mb-12">
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

export default ProductSection;