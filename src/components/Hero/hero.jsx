"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import icons

const Hero = ({ images = [], height = 500, width = 120 }) => {
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
    <div className=" w-full md:h-full sm:h-full h-[140px] ]">
      <div className="overflow-hidden h-full">
        <div
          className="flex transition-all duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              {/* Image Container */}
              <div className="relative w-full md:h-full sm:h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="responsive" // Use responsive layout
                  width={width} // Use number for width
                  height={height} // Use number for height
                  className="object-cover w-full h-full "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow buttons positioned at the start and end */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={prevSlide}
          className="text-3xl text-gray-800 rounded-full py-6"
        >
          <FiChevronLeft /> {/* Left arrow icon */}
        </button>
        <button
          onClick={nextSlide}
          className="text-3xl text-gray-800 rounded-full py-6"
        >
          <FiChevronRight /> {/* Right arrow icon */}
        </button>
      </div>
    </div>
  );
};

export default Hero;