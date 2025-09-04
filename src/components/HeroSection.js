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
              ? 'opacity-100 translate-x-0 rotate-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-32 rotate-[-2deg]'
              : 'opacity-0 translate-x-32 rotate-[2deg]'
          } animate-slideInWithRotate`}
        >
          <div className="text-center text-white px-4 sm:px-6">
            <h1
              className={`text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-y-0 animate-fadeInWithScale' : 'opacity-0 translate-y-8'
              }`}
            >
              {slide.headline}
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl mb-4 sm:mb-6 transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-y-0 animate-fadeInWithScale' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: '100ms' }}
            >
              {slide.subtext}
            </p>
            <a
              href="/"
              className={`inline-block bg-amber-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:bg-amber-600 hover:ring-2 hover:ring-amber-300 hover:scale-110 ${
                index === currentSlide ? 'opacity-100 translate-y-0 animate-fadeInWithScale' : 'opacity-0 translate-y-8'
              } animate-pulse`}
              style={{ animationDelay: '200ms' }}
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
          className="bg-teal-800 bg-opacity-70 p-2 sm:p-3 rounded-full text-white hover:bg-opacity-90 transition-all duration-300 group focus:outline-none transform hover:scale-110 hover:animate-glow"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-base sm:text-xl transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"></i>
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center">
        <button
          onClick={goToNextSlide}
          className="bg-teal-800 bg-opacity-70 p-2 sm:p-3 rounded-full text-white hover:bg-opacity-90 transition-all duration-300 group focus:outline-none transform hover:scale-110 hover:animate-glow"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-base sm:text-xl transform transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12"></i>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 flex space-x-1 sm:space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 transform ${
              index === currentSlide
                ? 'bg-amber-500 scale-150'
                : 'bg-teal-200 opacity-50 hover:scale-125 hover:bg-amber-400 hover:animate-bounce'
            } animate-popIn`}
            style={{ animationDelay: `${index * 100}ms` }}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <style jsx>{`
        @keyframes slideInWithRotate {
          from {
            opacity: 0;
            transform: translateX(-32px) rotate(-2deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotate(0);
          }
        }
        @keyframes fadeInWithScale {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 191, 0, 0);
          }
          50% {
            box-shadow: 0 0 10px 3px rgba(255, 191, 0, 0.5);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.3);
          }
        }
        @keyframes popIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          70% {
            transform: scale(1.2);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-slideInWithRotate {
          animation: slideInWithRotate 0.7s ease-in-out;
        }
        .animate-fadeInWithScale {
          animation: fadeInWithScale 0.6s ease-in-out;
        }
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
        .animate-glow {
          animation: glow 0.8s ease-in-out;
        }
        .animate-bounce {
          animation: bounce 0.4s ease-in-out;
        }
        .animate-popIn {
          animation: popIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;