"use client";

import Bulb from "@/assets/images/bulbWithQuestionMark.png";
import arrowUp from "@/assets/svgs/arrowUp.svg";
import arrowUp1 from "@/assets/svgs/arrowUp1.svg";
import RightDots from "../assets/images/RightDots.png";
import isolationMode2 from "@/assets/images/isolationVector2.png";

import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FAQSection({ faqData }) {
  const [faqs, setFaqs] = useState(faqData);
  const [imageHeight, setImageHeight] = useState(0);
  const accordionRef = useRef(null);
  const location = useLocation();

  const toggleFAQ = (id) => {
    const currentFaq = faqs.find((faq) => faq.id === id);

    if (currentFaq?.isOpen) {
      // If closing current FAQ, find next one to open
      const currentIndex = faqs.findIndex((faq) => faq.id === id);
      const nextIndex = currentIndex === faqs.length - 1 ? 0 : currentIndex + 1;
      const nextFaqId = faqs[nextIndex].id;

      setFaqs(
        faqs.map((faq) => ({
          ...faq,
          isOpen: faq.id === nextFaqId,
        }))
      );
    } else {
      // If opening a closed FAQ, just open it and close others
      setFaqs(
        faqs.map((faq) => ({
          ...faq,
          isOpen: faq.id === id,
        }))
      );
    }
  };

  useEffect(() => {
    const updateImageHeight = () => {
      if (accordionRef.current) {
        const height = accordionRef.current.offsetHeight;
        setImageHeight(height);
      }
    };

    // Initial height measurement
    updateImageHeight();

    // Update height after state change with a small delay
    const timer = setTimeout(updateImageHeight, 150);

    return () => {
      clearTimeout(timer);
    };
  }, [faqs]);

  useEffect(() => {
    const handleResize = () => {
      if (accordionRef.current) {
        const height = accordionRef.current.offsetHeight;
        setImageHeight(height);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" pb-16 px-4 relative overflow-hidden z-10">
      <div
        className={` ${
          location.pathname !== "/services/emergency-lighting"
            ? "mt-[30px]"
            : "mt-[400px]"
        } absolute w-[200px]  left-2 transform  -translate-y-1/4 z-0`}
      >
        <img
          src={isolationMode2}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div
        className={`${
          location.pathname !== "/services/emergency-lighting"
            ? "mt-[30px]"
            : "mt-[400px]"
        } absolute w-[70px] right-4 top-[0px] z-10`}
      >
        <img
          src={RightDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#01B8FF] font-andika text-lg mb-2">FAQs</p>
          <h2 className="text-white font-andika text-4xl md:text-5xl font-bold">
            Electrical Installation & Upgrades FAQs
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-[auto_1fr] gap-5 items-start">
          {/* Left side - Lightbulb image */}
          <div className="flex justify-center lg:justify-start w-full lg:w-80">
            <div
              className="relative w-64 lg:w-80 transition-all duration-300 ease-in-out"
              style={{
                height: imageHeight > 0 ? `${imageHeight}px` : "400px",
                minHeight: "300px",
              }}
            >
              <img
                src={Bulb}
                alt="Lightbulb with question mark"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - FAQ items */}
          <div ref={accordionRef} className="space-y-4 w-full">
            {faqs.map((faq) => (
              <div key={faq.id} className="relative">
                <div className="flex items-stretch gap-4">
                  {/* Number */}
                  <div
                    style={{
                      boxShadow: "0px 7px 4px 0px rgba(16, 89, 147, 0.7)",
                    }}
                    className="flex-shrink-0 w-14 md:w-20 bg-white rounded-2xl flex items-center justify-center"
                  >
                    <span className="text-[#003862] text-5xl font-bold">
                      {faq.id}
                    </span>
                  </div>

                  {/* Question */}
                  <div className="flex-1">
                    <button
                      style={{
                        boxShadow: "0px 7px 4px 0px rgba(16, 89, 147, 0.7)",
                      }}
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full h-full bg-white rounded-2xl p-4 lg:p-7 text-left"
                    >
                      <div className="flex items-center justify-between h-full">
                        <h3
                          className={`font-lato text-xl font-semibold pr-4 ${
                            faq.isOpen ? "text-[#01B8FF]" : "text-[#003862]"
                          }`}
                        >
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                          <img
                            src={faq.isOpen ? arrowUp : arrowUp1}
                            alt={faq.isOpen ? "Collapse" : "Expand"}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Answer - Full width starting from the beginning */}
                {faq.isOpen && (
                  <div className="mt-4 rounded-2xl p-4 lg:p-6 border border-[#01B8FF] transition-all duration-300">
                    <p className="text-white font-lato leading-relaxed text-sm font-normal">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
