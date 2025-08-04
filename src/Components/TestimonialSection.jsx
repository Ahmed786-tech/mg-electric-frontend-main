"use client";

import { useEffect, useState, useRef } from "react";
import qoutes from "@/assets/svgs/testimonialQoutes.svg";
import leftArrow from "@/assets/svgs/Arrow 1.svg";
import rightArrow from "@/assets/svgs/Arrow 2.svg";

const testimonials = [
  {
    name: "Kristin Watson",
    content:
      "M G Electrics Ltd has been a member of Checkatrade for 4 years. We would like to thank them for their loyalty and the quality service they provide to customers in Epsom specialising in Electrician services.",
  },
  {
    name: "Checkatrade review",
    content:
      "I found the Electrician to be polite, helpful and excellent at his job. The work was carried out to the required standard and everything was first class. The electrician left the job very tidy and cleared up everything as required.",
  },
  {
    name: "Kristin Watson",
    content:
      "A very professional, competent and reliable service offered by Mark and his team. Friendly and easy to do business with. I would recommend their services",
  },
  {
    name: "Herry Broke",
    content:
      "M G Electrics Ltd has been a member of Checkatrade for 4 years. We would like to thank them for their loyalty and the quality service they provide to customers in Epsom specialising in Electrician services.",
  },
  {
    name: "Checkatrade review",
    content:
      "I found the Electrician to be polite, helpful and excellent at his job. The work was carried out to the required standard and everything was first class. The electrician left the job very tidy and cleared up everything as required.",
  },
  {
    name: "Kristin Watson",
    content:
      "A very professional, competent and reliable service offered by Mark and his team. Friendly and easy to do business with. I would recommend their services",
  },
];

export default function Component() {
  const [itemsToShow, setItemsToShow] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);
  const cardWidthRef = useRef(0);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsToShow(1);
      else if (width < 1024) setItemsToShow(2);
      else setItemsToShow(3);
      setCurrentIndex(0);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    const firstCard = containerRef.current?.querySelector(".testimonial-card");
    if (firstCard) {
      const style = getComputedStyle(firstCard);
      const marginRight = parseInt(style.marginRight || "0");
      cardWidthRef.current = firstCard.offsetWidth + marginRight;
    }
  }, [itemsToShow]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * cardWidthRef.current,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const maxIndex = testimonials.length - itemsToShow;

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const dotsCount = testimonials.length - itemsToShow + 1;

  return (
    <div className="py-16 px-4 relative mt-10">
      <div className="max-w-7xl mx-auto relative">
        <h4 className="text-[#01B8FF] font-normal text-xl text-center pb-2">
          Testimonials
        </h4>

        <h1 className="font-bold text-5xl text-white text-center pb-10 max-md:text-3xl">
          What our customers are saying
        </h1>

        {/* Carousel */}
        <div className="overflow-hidden relative h-[320px]">
          <div
            ref={containerRef}
            className="flex overflow-x-auto no-scrollbar scroll-smooth h-full"
            style={{
              gap: "14px",
              scrollSnapType: "x mandatory",
              scrollPaddingLeft: 0,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card flex-shrink-0"
                style={{
                  scrollSnapAlign: "start",
                  height: "270px",
                  width:
                    itemsToShow === 1
                      ? "100%"
                      : itemsToShow === 2
                      ? "48.5%"
                      : "32.3%",
                }}
              >
                <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm shadow-lg shadow-slate-900/50 h-full">
                  <div className="mb-6">
                    <h3 className="text-[#01B8FF] text-center font-medium text-lg mb-4">
                      {testimonial.name}
                    </h3>
                    <p className="text-white text-center leading-relaxed text-sm">
                      {testimonial.content}
                    </p>
                  </div>
                  <img
                    src={qoutes}
                    alt="quote"
                    className="absolute -bottom-4 left-8 w-8 h-8 opacity-70"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Prev/Next buttons */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors absolute top-1/2 -left-6 md:-left-10 -translate-y-1/2 z-10 ${
              currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Previous testimonials"
          >
            <img src={leftArrow} alt="left" />
          </button>

          <button
            onClick={goToNext}
            disabled={currentIndex >= maxIndex}
            className={`p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 z-10 ${
              currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : ""
            }`}
            aria-label="Next testimonials"
          >
            <img src={rightArrow} alt="right" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center mt-8 gap-4">
          {Array.from({ length: dotsCount }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-cyan-400"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hide scrollbar cross-browser */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
