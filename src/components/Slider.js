import React, { useRef, useState } from 'react';

const Slider = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const images = [
    'https://w0.peakpx.com/wallpaper/136/495/HD-wallpaper-earpods-iphone-apple-blue-earphones-laptop-latest-music-phone-pin.jpg',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
    'https://cdn.pixabay.com/photo/2021/05/02/14/53/perfume-6223754_1280.jpg',
    'https://img.freepik.com/free-photo/beautiful-engagement-ring-with-diamonds_23-2149509263.jpg',
    'https://media.istockphoto.com/id/92910038/photo/photo-of-a-diamond-tennis-bracelet.jpg?s=612x612&w=0&k=20&c=T3m7CxOVGOwO9QPNH2tzpgjjYaHHObQPiW066KZg0u8=',
    'https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?cs=srgb&dl=pexels-pixabay-277390.jpg&fm=jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTSKZsimua0sD099O4tq0uxefMJwI3nvlkA&s',
    'https://w0.peakpx.com/wallpaper/422/542/HD-wallpaper-metal-microphone-music-sound-device-electro-acoustics.jpg',
  ];

  const startDragging = (e) => {
    setIsDragging(true);
    const x = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setStartX(x);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
    // Reset scroll position to start of original images to maintain seamless loop
    if (scrollRef.current.scrollLeft >= scrollRef.current.scrollWidth / 2) {
      scrollRef.current.scrollLeft -= scrollRef.current.scrollWidth / 2;
    }
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const delta = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - delta;
  };

  return (
    <div className="mb-6 sm:mb-8 md:mb-12">
      <div className="flex justify-between items-center mb-2 px-2 sm:px-4 md:px-6">
        <h2 className="font-bold text-teal-900 text-sm 2xs:text-base sm:text-lg md:text-xl">Related to items you've viewed</h2>
        <a href="/" className="text-amber-500 hover:text-amber-600 hover:underline text-xs 2xs:text-sm sm:text-base">See more</a>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden space-x-3 2xs:space-x-4 sm:space-x-6 scrollbar-hide select-none cursor-grab active:cursor-grabbing auto-scroll"
        onMouseDown={startDragging}
        onMouseMove={onDrag}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onTouchStart={startDragging}
        onTouchMove={onDrag}
        onTouchEnd={stopDragging}
      >
        {/* Render images twice for seamless looping */}
        {[...images, ...images].map((src, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-32 2xs:w-36 sm:w-40 md:w-48 h-40 2xs:h-44 sm:h-52 md:h-64"
          >
            <img
              src={src}
              alt={`Item ${idx % images.length}`}
              className="w-full h-full object-cover rounded-md transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-amber-300 shadow-md hover:shadow-lg animate-fadeIn"
              style={{ animationDelay: `${(idx % images.length) * 100}ms` }}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/400x288?text=Item+Image')}
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes autoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .auto-scroll {
          animation: autoScroll 20s linear infinite;
          will-change: transform;
        }
        .auto-scroll:hover {
          animation-play-state: paused;
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};

export default Slider;