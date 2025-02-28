"use client";
import { useState } from 'react';
import Image from 'next/image';

const Hero = ({ images = [], height = 500, width = 1200 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      return newIndex;
    });
  };

  return (
    <div
      className="relative w-full"
      style={{ height }} // Ensuring the container height is set correctly
    >
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              {/* Image Container: Prevents jumping on first load */}
              <div style={{ height: `${height}px` }} className="relative w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={width}  // Use number for width
                  height={height} // Use number for height
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Dash buttons at the bottom center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <button
                  onClick={prevSlide}
                  className="text-6xl text-gray-200"
                >
                  - - {/* Left dash symbol */}
                </button>
                <button
                  onClick={nextSlide}
                  className="text-6xl text-gray-200"
                >
                  - - {/* Right dash symbol */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
