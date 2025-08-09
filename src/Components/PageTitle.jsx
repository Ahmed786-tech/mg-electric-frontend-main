import * as React from "react";
// import bg from "../assets/images/Bg14.png";
import bg1 from "../assets/images/serviceHeroBg1.png";
import squareBg from "../assets/images/HomeHeroFrame.png";
import LeftDots from "../assets/images/Leftdots.png";
import RightDots from "../assets/images/RightDots.png";
import { useLocation } from "react-router-dom";
import IsolationMode from "../assets/images/Isolation_Mode_Left.png";

export function PageTitle({ tag, title, subtitle, imageSrc, imageAlt }) {
  const location = useLocation();
  const isAboutUs = location.pathname === "/about"; 

  return (
    <section className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-12 relative z-10">
      ({!isAboutUs && <div className=" absolute w-[50px] md:w-[70px] right-4 md:top-[250px] top-[280px] z-0">
        <img
          src={RightDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>})
      <div className="  absolute w-[50px] md:w-[70px] left-4 transform md:mt-8 mt-[-10px] -translate-y-1/4 z-0">
        <img
          src={LeftDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div className=" absolute w-[140px] md:w-[230px] left-0 transform mt-[200px] md:mt-12 -translate-y-1/5 z-0">
        <img
          src={IsolationMode}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div
        style={{ backgroundImage: `url(${bg1})` }}
        className="max-w-[1244px] bg-cover bg-center bg-no-repeat w-full rounded-none sm:rounded-[20px]  px-4 sm:px-6 md:px-8 mx-auto relative z-10"
      >
        <div className="py-6 sm:py-8 md:py-11 w-full  ">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-5 relative z-10">
            {/* Text Content */}
            <div className=" absolute w-[300px] md:w-[650px] left-8 transform  -translate-y-1/2 z-0 opacity-30">
              <img
                src={squareBg}
                alt="Decorative oval"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>
            <div className="w-full lg:w-[46%] order-2 lg:order-1 flex flex-col justify-center relative z-10">
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
            <div className="w-full lg:w-[54%] order-1 lg:order-2 relative z-10">
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
