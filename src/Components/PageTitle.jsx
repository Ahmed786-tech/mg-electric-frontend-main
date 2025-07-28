import * as React from "react";
import bg from "../assets/images/Bg14.png";
import bg1 from "../assets/images/serviceHeroBg1.png";

export function PageTitle({ tag, title, subtitle, imageSrc, imageAlt }) {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Centered content container bg-gradient-to-b from-[rgba(164,186,205,0)] to-[#032039] */}
      <div
        // style={{
        //   background:
        //     "linear-gradient(180deg, rgba(164,186,205,0) 0%, rgba(164,186,205,0.1) 0%, #001E39 100%)",
        // }}
        style={{ backgroundImage: `url(${bg1})` }}
        className="max-w-[1244px] bg-cover bg-center bg-no-repeat w-full rounded-none sm:rounded-[20px]  px-4 sm:px-6 md:px-8 mx-auto"
      >
        <div className="py-6 sm:py-8 md:py-11 w-full  ">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-5">
            {/* Text Content */}
            <div className="w-full lg:w-[46%] order-2 lg:order-1 flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <div className="text-[18px] sm:text-[20px] font-bold text-[#01B8FF] font-andika">
                  {tag}
                </div>
                <div className="text-white space-y-2 sm:space-y-3 max-w-[510px]">
                  <div className="text-[30px] sm:text-[35px] md:text-4xl font-bold tracking-[1px] font-andika leading-tight">
                    {title}
                  </div>
                  <div className="text-[15px] sm:text-[16px] leading-6 sm:leading-7 opacity-90 font-poppins font-normal">
                    {subtitle}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-[54%] order-1 lg:order-2">
              <div className="relative w-full h-0 pb-[57%] rounded-2xl sm:rounded-3xl overflow-hidden">
                <img
                  loading="lazy"
                  src={imageSrc}
                  alt={imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageTitle;
