import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HeroSection = () => {
  const slides = [
    {
      headline: 'Discover Amazing Deals!',
      subtext: 'Shop the latest electronics with up to 50% off.',
      cta: 'Shop Now',
      bg: 'bg-gradient-to-r from-teal-900 to-teal-700',
    },
    {
      headline: 'New Arrivals Await!',
      subtext: 'Explore fresh styles in fashion and home decor.',
      cta: 'Browse Collection',
      bg: 'bg-gradient-to-r from-teal-800 to-teal-600',
    },
    {
      headline: 'Exclusive Prime Offers!',
      subtext: 'Unlock special discounts with your membership.',
      cta: 'Join Prime',
      bg: 'bg-gradient-to-r from-teal-700 to-teal-500',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-80 sm:h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 ${slide.bg} flex items-center justify-center transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-10'
              : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="text-center text-white px-4 sm:px-6">
            <h1
              className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {slide.headline}
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-6 transition-all duration-500 ease-in-out delay-100 ${
                index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {slide.subtext}
            </p>
            <a
              href="#"
              className="inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:bg-amber-600 hover:ring-2 hover:ring-amber-300 hover:scale-105 animate-pulse-once"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center">
        <button
          onClick={goToPrevSlide}
          className="bg-teal-800 bg-opacity-70 p-2 sm:p-3 rounded-full text-white hover:bg-opacity-90 hover:ring-2 hover:ring-amber-300 transition-all duration-300 group focus:outline-none"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-base sm:text-xl transform transition-transform duration-300 group-hover:scale-125"></i>
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center">
        <button
          onClick={goToNextSlide}
          className="bg-teal-800 bg-opacity-70 p-2 sm:p-3 rounded-full text-white hover:bg-opacity-90 hover:ring-2 hover:ring-amber-300 transition-all duration-300 group focus:outline-none"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-base sm:text-xl transform transition-transform duration-300 group-hover:scale-125"></i>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 flex space-x-1 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-amber-500 scale-150'
                : 'bg-teal-200 opacity-50 hover:scale-110'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;