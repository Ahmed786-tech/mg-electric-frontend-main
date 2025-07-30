import React from "react";
import chooseUsBg from "@/assets/images/chooseUsBg.png";
// import LeftDots from "@/assets/images/Leftdots.png";
import RightDots from "../assets/images/RightDots.png";

export default function WhyChooseUs({
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
    <section className="bg-cover bg-center text-white pt-20 pb-[150px] px-6 flex flex-col justify-center content-center">
      <div className="hidden md:block absolute mt-[300px] left-0 transform -translate-y-1/4 z-0 opacity-40">
        <div className=" md:w-[600px] h-[800px] ">
          <img src={chooseUsBg} alt="Decorative oval" />
        </div>
      </div>

      <div className=" absolute mt-[800px] w-[70px] right-4  z-10">
        <img
          src={RightDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Image Section with 2-left + 1-middle-right */}
        <div className={`relative flex w-1/2 lg:w-[40%] mt-[30px]`}>
          {/* Column with 2 stacked images (left side) */}
          <div className="flex flex-col gap-6">
            <img
              src={leftImage}
              alt="Top Left"
              className={`rounded-[10px] lg:w-${leftimgWidth} lg:h-${leftimgHeight} object-cover ${MarginTop}`}
            />
            <img
              src={leftImage2}
              alt="Bottom Left"
              className={`rounded-[10px] lg:w-${leftimg2Width} lg:h-${leftimg2Height} object-cover ${MarginBottom}`}
            />
          </div>

          {/* Middle image — positioned in between */}
          <img
            src={rightImage}
            alt="Middle Right"
            className={`
    rounded-[10px] 
    w-${rightimgWidth} 
    h-${rightimgHeight} 
    object-cover 
    ml-[100px] 
    sm:ml-[100px] 
    lg:ml-0 
    lg:absolute 
    lg:left-[55%] 
    lg:top-1/2 
    lg:transform 
    lg:-translate-y-1/2
  `}
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col w-full lg:w-[50%] mt-10 lg:mt-0 lg:ml-[70px]">
          <p className="text-[#01B8FF] font-normal text-[18px] sm:text-[20px] mb-3 font-andika">
            {titleTag}
          </p>
          <h2 className="text-[26px] sm:text-[29px] md:text-3xl font-bold text-[#F8FDFF] mb-6 font-andika">
            {heading}
          </h2>

          <ul className="space-y-6">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-4">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] flex-shrink-0 mt-1"
                />
                <div>
                  <h3 className="text-[17px] sm:text-[18px] font-bold text-white font-andika">
                    {service.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#D2C4C4] font-medium">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
