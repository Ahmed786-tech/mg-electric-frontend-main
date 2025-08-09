"use client";
import React from "react";
import LeftDots from "../assets/images/Leftdots.png";
import { useLocation } from "react-router-dom";

export default function BenefitsSection({
  heading,
  subheading,
  subHeading1,
  benefits = [],
  leftImage,
  rightImage,
}) {
  const firstHalf = benefits.slice(0, 3);
  const secondHalf = benefits.slice(3);
  const location = useLocation();

  return (
    <section className="bg-cover bg-center bg-no-repeat text-white md:py-8 px-4 sm:px-6 md:px-10 relative z-10">
      {location.pathname !== "/services/emergency-lighting" && (
        <div className="absolute w-[70px] left-2 transform md:bottom-[130px] bottom-[-30px] -translate-y-1/4 z-0">
          <img
            src={LeftDots}
            alt="Decorative oval"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      )}
      <div className="flex justify-center">
        <div className="w-full max-w-[1300px]">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-[20px] text-[#01B8FF] font-normal font-andika">
              {heading}
            </h2>
            <h1 className="text-[24px] md:text-[40px] font-bold font-andika">
              {subheading}
            </h1>
            <p className="text-lg font-lato font-normal pt-3"> {subHeading1}</p>
          </div>

          {/* Two-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6 items-center md:items-start">
              {firstHalf.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full md:max-w-[608px] md:h-[121px] flex items-start gap-4 border border-[#BDB7B7] rounded-[20px] overflow-hidden p-2"
                >
                  <div className="bg-[#0B3A5F] p-5 flex items-start gap-4 w-full h-full rounded-[10px]">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-[50px] h-[50px]"
                    />
                    <div>
                      <h3 className="text-[#01B8FF] text-[18px] font-bold font-andika">
                        {benefit.title}
                      </h3>
                      <p className="text-[16px] text-white font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {leftImage && (
                <div className="w-full md:max-w-[608px] md:h-[243px] h-[200px] rounded-[20px] overflow-hidden">
                  <img
                    src={leftImage}
                    alt="Left Visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 items-center md:items-start relative z-10">
              {rightImage && (
                <div className="w-full md:max-w-[618px] md:h-[254px] h-[200px] rounded-[20px] overflow-hidden">
                  <img
                    src={rightImage}
                    alt="Right Visual"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {secondHalf.map((benefit, index) => (
                <div
                  key={index}
                  className="w-full md:max-w-[608px] md:h-[121px] flex items-start gap-4 border border-[#BDB7B7] rounded-[20px] overflow-hidden p-2"
                >
                  <div className="bg-[#0B3A5F] p-5 flex items-start gap-4 w-full h-full rounded-[10px]">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-[50px] h-[50px]"
                    />
                    <div>
                      <h3 className="text-[#01B8FF] text-[18px] font-bold font-andika">
                        {benefit.title}
                      </h3>
                      <p className="text-[16px] text-white font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
