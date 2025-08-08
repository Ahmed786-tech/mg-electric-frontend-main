import React from "react";
import IsolationMode1 from "@/assets/images/IsolationMode1.png";

export default function WeOffer({
  heading,
  subheading,
  titleTag,
  leftImage,
  rightImage,
  services = [],
  LeftimgHeight,
  RightimgHeight,
  LeftimgWidth,
  RightimgWidth,
  MarginTop,
  MarginBottom,
  Paragraph,
  margintop,
  margintop2,
}) {
  return (
    <section className="bg-cover bg-center bg-no-repeat text-white py-12 px-4 sm:px-6 relative">
      <div className=" absolute w-[200px] md:mt-[680px] mt-[1900px] right-0 transform  -translate-y-1/4 z-10">
        <img
          src={IsolationMode1}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Images */}
        <div
          className={`flex flex-col sm:flex-row gap-4 w-full lg:w-[40%] md:mt-[130px]`}
        >
          {/* Left Image */}
          <img
            src={leftImage}
            alt="Electrical Panel"
            className={`rounded-[10px] w-full sm:w-[290px] h-${LeftimgHeight} sm:h-${LeftimgHeight} object-cover ${MarginTop}`}
          />

          {/* Right Image */}
          <img
            src={rightImage}
            alt="Electrical Wiring"
            className={`rounded-[10px] w-full sm:w-${RightimgWidth} h-${RightimgHeight} sm:h-${RightimgHeight} object-cover ${margintop2} ${MarginBottom}`}
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col w-full lg:w-[50%] lg:ml-[70px] mt-8 lg:mt-0">
          <p className="text-[#01B8FF] font-normal text-[18px] sm:text-[20px] mb-2 font-andika">
            {titleTag}
          </p>
          <h2 className="text-[26px] sm:text-[29px] md:text-3xl font-bold text-[#F8FDFF] mb-4 font-andika">
            {heading}
          </h2>
          <p className="text-[#ffffff] text-[15px] sm:text-[16px] font-normal font-poppins mb-5">
            {Paragraph}
          </p>
          <p className="text-[#01B8FF] font-medium text-[15px] sm:text-[16px] mb-8 font-poppins">
            {subheading}
          </p>

          <ul className="space-y-6">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-4">
                <img
                  src={service.icon}
                  alt={`${service.title} Icon`}
                  className="w-[40px] sm:w-[45px] h-[40px] sm:h-[45px] flex-shrink-0 mt-1"
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
