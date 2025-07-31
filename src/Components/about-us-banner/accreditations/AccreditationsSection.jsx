import * as React from "react";
import { useState, useEffect } from "react";
import { AccreditationCard } from "./AccreditationCard";
import bg from "../../../assets/images/aboutus-banner-bg.png";
import LeftDots from "@/assets/images/Leftdots.png";
import { useLocation } from "react-router-dom";
import img1 from "@/assets/images/logo-1.png";
import img2 from "@/assets/images/logo-1 (1).png";
import img3 from "@/assets/images/logo-1 (2).png";
import img4 from "@/assets/images/logo-1 (3).png";
import img5 from "@/assets/images/logo-1 (4).png";
import img6 from "@/assets/images/logo-1 (5).png";

const accreditations = [
  {
    imageUrl: img1,
    imageClass: "aspect-[3.83] w-[199px] h-[52px]",
    containerClass: "w-[204px]",
  },
  {
    imageUrl: img2,
    imageClass: "aspect-[2.75] w-[147px] h-[52px]",
    containerClass: "w-[157px]",
  },
  {
    imageUrl: img3,
    imageClass: "rounded-none aspect-[2.72] w-[147px] h-[52px]",
    containerClass: "w-[157px]",
  },
  {
    imageUrl: img4,
    imageClass: "rounded-none w-[52px] h-[52px]",
    containerClass: "w-[127px]",
  },
  {
    imageUrl: img5,
    imageClass: "aspect-[4.5] w-[216px] h-[52px]",
    containerClass: "min-w-[240px] w-[216px]",
  },
  {
    imageUrl: img6,
    imageClass: "aspect-[4.5] w-[216px] h-[52px]",
    containerClass: "min-w-[240px] w-[216px]",
  },
];

export function AccreditationsSection({ Background }) {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  // Calculate items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsToShow(1); // Mobile: 1 item
      } else if (width < 768) {
        setItemsToShow(2); // Small tablet: 2 items
      } else if (width < 1024) {
        setItemsToShow(3); // Tablet: 3 items
      } else {
        setItemsToShow(5); // Desktop (md and above): 5 items
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  // Reset current index when items to show changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsToShow]);

  // Maximum index we can scroll to
  const maxIndex = Math.max(0, accreditations.length - itemsToShow);
  const totalDots = maxIndex + 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  return (
    <section className="flex flex-col justify-center w-full mt-8 pt-9 pb-16 relative z-10">
      {location.pathname !== "/services/electrical-installations" && (
        <div className="absolute w-[70px] left-2 transform bottom-[180px] -translate-y-1/4 z-10">
          <img
            src={LeftDots || "/placeholder.svg"}
            alt="Decorative oval"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      )}

      <div
        style={{ boxShadow: "0px 7px 4px 0px rgba(16, 89, 147, 0.7)" }}
        className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 shadow-sm min-h-[328px] w-full max-w-[1300px] mx-auto overflow-hidden rounded-3xl"
      >
        {/* Background Overlay */}
        <img
          loading="lazy"
          src={bg || "/placeholder.svg"}
          alt="background"
          className="object-cover absolute inset-0 w-full h-full z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-[20px] text-[#01B8FF] font-normal font-andika">
              Certified Expertise You Can Rely On
            </p>
            <h2 className="text-[40px] font-andika font-bold text-white leading-snug max-md:text-[28px]">
              Accreditations
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="w-full max-w-6xl">
            {/* Cards Container */}
            <div className="overflow-hidden mb-6">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsToShow)
                  }%)`,
                }}
              >
                {accreditations.map((accreditation, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / itemsToShow}%` }}
                  >
                    <div className="   flex items-center justify-center">
                      <img
                        loading="lazy"
                        src={accreditation.imageUrl || "/placeholder.svg"}
                        alt="Accreditation logo"
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            {maxIndex > 0 && (
              <div className="flex items-center justify-center gap-4">
                {/* Left Chevron */}
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`p-2 transition-colors duration-200 ${
                    currentIndex === 0
                      ? "text-white/30 cursor-not-allowed"
                      : "text-white hover:text-[#01B8FF]"
                  }`}
                  aria-label="Previous slide"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {Array.from({ length: totalDots }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        currentIndex === index
                          ? "bg-[#01B8FF] scale-125"
                          : "bg-white/50 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Right Chevron */}
                <button
                  onClick={nextSlide}
                  disabled={currentIndex === maxIndex}
                  className={`p-2 transition-colors duration-200 ${
                    currentIndex === maxIndex
                      ? "text-white/30 cursor-not-allowed"
                      : "text-white hover:text-[#01B8FF]"
                  }`}
                  aria-label="Next slide"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
