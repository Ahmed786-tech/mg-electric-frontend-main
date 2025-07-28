import React from "react";
import bg from "../assets/images/Bg5.png";

export default function AboutUsSection({
  heading,
  subheading,
  titleTag,
  leftImage,
  leftImage2,
  rightImage,
  services = [],
  leftimgHeight,
  leftimg2Height,
  rightimgHeight,
  leftimgWidth,
  leftimg2Width,
  rightimgWidth,
  MarginTop,
  MarginBottom,
  Paragraph,
}) {
  return (
    <section
      className="bg-cover bg-center text-white py-8 px-6"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-1/2">
          <p className="text-[#01B8FF] font-normal text-[20px] mb-2 font-andika">
            {titleTag}
          </p>
          <h2 className="text-[29px] md:text-3xl font-bold text-[#F8FDFF] mb-6 font-andika">
            {heading}
          </h2>
          <p className="text-[#ffffff] text-[16px] font-normal font-poppins mb-6">
            {Paragraph}
          </p>
          <p className="text-[#01B8FF] font-medium text-[16px] mb-8 font-poppins">
            {subheading}
          </p>

          <ul className="space-y-6">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-4">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-[45px] h-[45px] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-[18px] font-bold text-white font-andika">
                    {service.title}
                  </h3>
                  <p className="text-[14px] text-[#D2C4C4] font-medium">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="relative flex flex-col sm:flex-row gap-6 w-full lg:w-[50%] items-center lg:items-start mt-8 lg:mt-[30px]">
          {/* 2 stacked left images */}
          <div className="flex flex-col gap-6 w-full sm:w-auto">
            <img
              src={leftImage}
              alt="Top Left"
              className={`rounded-[10px] w-${leftimgWidth} h-${leftimgHeight} object-cover ${MarginTop}`}
            />
            <img
              src={leftImage2}
              alt="Bottom Left"
              className={`rounded-[10px] w-${leftimg2Width} h-${leftimg2Height} object-cover ${MarginBottom}`}
            />
          </div>

          {/* Absolute middle image on large screens, static stacked on small screens */}
          <img
            src={rightImage}
            alt="Middle Right"
            className={`rounded-[10px] object-cover w-${rightimgWidth} h-${rightimgHeight}
              lg:absolute lg:left-[60%] lg:top-1/2 lg:transform lg:-translate-y-1/2
              sm:static sm:mt-4`}
          />
        </div>
      </div>
    </section>
  );
}
