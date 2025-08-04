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
  const [currentPage, setCurrentPage] = useState(0);
  const [paginatedTestimonials, setPaginatedTestimonials] = useState([]);
  const [direction, setDirection] = useState("next"); // for animation

  const trackRef = useRef();

  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsToShow(1);
      else if (width < 1024) setItemsToShow(2);
      else setItemsToShow(3);
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  useEffect(() => {
    const pages = [];
    for (let i = 0; i < testimonials.length; i += itemsToShow) {
      pages.push(testimonials.slice(i, i + itemsToShow));
    }
    setPaginatedTestimonials(pages);
    setCurrentPage(0); // Reset on itemsToShow change
  }, [itemsToShow]);

  const goToPrevious = () => {
    setDirection("prev");
    setCurrentPage((prev) =>
      prev === 0 ? paginatedTestimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection("next");
    setCurrentPage((prev) =>
      prev === paginatedTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentPage ? "next" : "prev");
    setCurrentPage(index);
  };

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
            ref={trackRef}
            className="flex absolute top-0 left-0 w-full transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${direction === "next" ? "-100%" : "100%"})`,
              animation: "slide-in 0.7s ease forwards",
            }}
            key={currentPage}
          >
            {paginatedTestimonials[currentPage]?.map((testimonial, index) => (
              <div key={index} className="flex-1 px-2">
                <div className="relative bg-slate-800/50 z-10 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm shadow-lg shadow-slate-900/50 h-full">
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
                    className="absolute -bottom-3 left-8 w-8 h-8 opacity-70"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <button
            onClick={goToPrevious}
            className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors"
          >
            <img src={leftArrow} alt="left" />
          </button>

          <div className="flex gap-2">
            {paginatedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentPage
                    ? "bg-cyan-400"
                    : "bg-slate-600 hover:bg-slate-500"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors"
          >
            <img src={rightArrow} alt="right" />
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(${direction === "next" ? "100%" : "-100%"});
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}
