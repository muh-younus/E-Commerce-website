import React from 'react';
import ProductBox1 from './ProductBox1';

const ProductSection2 = () => {
  const products = [
    {
      title: 'Wireless Tech',
      images: [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE2PVfL12phKkq_ilmUcFlUfDwRshqJWNhw&s', alt: 'Smart Phone' },
        { src: 'https://coruzant.com/wp-content/uploads/2024/06/gadgets-20-05-24-E-Hero.webp', alt: 'Watches' },
        { src: 'https://coruzant.com/wp-content/uploads/2024/06/gadgets-20-05-24-E-Hero.webp', alt: 'Headphones' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTwCxtMez2d11t_YlmM0U-g959zcQqKLxtyHnun3ckY41QyGYBK8SLx4F_9vw_M2qJ_a4&usqp=CAU', alt: 'Tablets' },
      ],
      price: 299.99,
      rating: 4.5,
      linkText: 'Discover more',
    },
    {
      title: 'Toys for All Ages',
      images: [
        { src: 'https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890.jpg', alt: 'Ride on' },
        { src: 'https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890.jpg', alt: 'Building & Construction Toys' },
        { src: 'https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890.jpg', alt: 'Dolls' },
        { src: 'https://png.pngtree.com/thumb_back/fh260/background/20230714/pngtree-gadgets-in-a-striking-3d-dim-environment-image_3859890.jpg', alt: 'Swimming Pool' },
      ],
      price: 29.99,
      rating: 4.3,
      linkText: 'See all',
    },
    {
      title: 'Level Up Your Beauty',
      images: [
        { src: 'https://www.shutterstock.com/shutterstock/videos/3789433811/thumb/1.jpg?ip=x480', alt: 'Makeup' },
        { src: 'https://www.shutterstock.com/shutterstock/videos/3789433811/thumb/1.jpg?ip=x480', alt: 'Brushes' },
        { src: 'https://www.shutterstock.com/shutterstock/videos/3789433811/thumb/1.jpg?ip=x480', alt: 'Sponges' },
        { src: 'https://www.shutterstock.com/shutterstock/videos/3789433811/thumb/1.jpg?ip=x480', alt: 'Mirrors' },
      ],
      price: 39.99,
      rating: 4.4,
      linkText: 'See more',
    },
    {
      title: 'Most-Loved Travel Essentials',
      images: [
        { src: 'https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-office-essentials-technology-and-gadgets-illustration-featuring-laptop-printer-camera-tablet-image_3748458.jpg', alt: 'Backpack' },
        { src: 'https://www.shutterstock.com/shutterstock/videos/3789433811/thumb/1.jpg?ip=x480', alt: 'Suitcases' },
        { src: 'https://www.shutterstock.com/shutterstock/videos/3789433811/thumb/1.jpg?ip=x480', alt: 'Accessories' },
        { src: 'https://coruzant.com/wp-content/uploads/2024/06/gadgets-20-05-24-E-Hero.webp', alt: 'Handbags' },
      ],
      price: 59.99,
      rating: 4.6,
      linkText: 'Discover more',
    },
   
    
  ];

  return (
    <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 min-[360px]:gap-4 sm:gap-6 md:gap-8 p-3 min-[360px]:p-4 sm:p-6 md:p-8 bg-teal-100 border-t-4 border-amber-100 mb-6 sm:mb-8 md:mb-12">
      {products.map((product, idx) => (
        <ProductBox1
          key={idx}
          title={product.title}
          images={product.images}
          price={product.price}
          rating={product.rating}
          linkText={product.linkText}
          className="hover:z-10"
        />
      ))}
    </div>
  );
};

export default ProductSection2;