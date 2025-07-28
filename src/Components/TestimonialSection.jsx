"use client";

import { useState } from "react";
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
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" py-16 px-4 mt-20">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-[#01B8FF] font-normal text-xl text-center pb-2">
          Testimonials
        </h4>

        <h1 className="font-bold text-5xl text-white text-center pb-10">
          What our customers are saying
        </h1>
        {/* Desktop view - show all three cards */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm"
              style={{ boxShadow: "0px 7px 4px 0px rgba(16, 89, 147, 0.7)" }}
            >
              <div className="mb-6">
                <h3 className="text-[#01B8FF] text-center font-extrabold text-xs mb-4">
                  {testimonial.name}
                </h3>
                <p className="text-white text-center text-sm font-light leading-relaxed">
                  {testimonial.content}
                </p>
              </div>
              {/* Quote SVG that cuts the bottom line */}
              <div className="absolute -bottom-4 left-8 w-8 h-8 text-cyan-400/60">
                <img src={qoutes} alt="Quote" className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet view - carousel */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm shadow-lg shadow-slate-900/50">
                      <div className="mb-6">
                        <h3 className="text-[#01B8FF] font-medium text-lg mb-4">
                          {testimonial.name}
                        </h3>
                        <p className="text-white leading-relaxed">
                          {testimonial.content}
                        </p>
                      </div>
                      {/* Quote SVG that cuts the bottom line */}
                      <svg
                        className="absolute -bottom-4 left-8 w-8 h-8 text-cyan-400/60"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <button
            onClick={goToPrevious}
            className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors"
          >
            <img src={leftArrow} alt="" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
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

          <button
            onClick={goToNext}
            className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors"
          >
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
