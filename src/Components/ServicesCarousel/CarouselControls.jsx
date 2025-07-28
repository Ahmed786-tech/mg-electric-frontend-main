import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function CarouselControls({ onPrevious, onNext, currentIndex, totalSlides }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 w-full px-2 sm:px-4">
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        className="text-[#01B8FF] hover:text-blue-700 focus:outline-none text-base sm:text-lg md:text-xl"
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>

      {/* Dots Navigation */}
      <div className="flex gap-1 sm:gap-3 md:gap-4">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index > currentIndex) {
                onNext();
              } else if (index < currentIndex) {
                onPrevious();
              }
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[#01B8FF] transform scale-125"
                : "bg-blue-200 hover:bg-[#01B8FF]"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="text-[#01B8FF] hover:text-blue-700 focus:outline-none text-base sm:text-lg md:text-xl"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default CarouselControls;
