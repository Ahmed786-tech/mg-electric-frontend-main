import * as React from "react";
import { ConsultationCard } from "./ConsultationCard";
import { QuoteButton } from "./QuoteButton";
import GalleryBannerBg from "../../../assets/images/gallery-banner.png";

export function Banner({ Background }) {
  return (
    <section
      className="flex items-center justify-center w-full pt-20 pb-[150px] px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col rounded-[20px] border border-[#01B8FF] bg-[rgba(0,32,60,0.95)] shadow-[0px_7px_4px_0px_rgba(16,89,147,0.70)] max-w-[1022px] w-full">
        <div className="flex relative flex-col justify-center px-4 sm:px-6 md:px-8 py-9 w-full min-h-[317px]">
          
          {/* Optional background image overlay */}
          <img
            loading="lazy"
            src={GalleryBannerBg}
            alt="Hero background"
            className="absolute inset-0 object-cover w-full h-full rounded-[20px] z-0"
          />

          {/* Content */}
          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-6 z-10">
            
            {/* Left: Logo + Button */}
            <div className="flex flex-col text-lg font-medium leading-loose text-white w-full lg:w-[35%] min-w-[240px] items-center lg:items-start">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/34e4a65e9985fdf10cd9a360561cac5e3a76196403ee6e25395806609c381261?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
                alt="Company logo"
                className="object-contain w-full max-w-[300px] rounded-3xl aspect-[2]"
              />
              <div className="mt-4">
                <QuoteButton />
              </div>
            </div>

            {/* Right: Consultation Card */}
            <div className="w-full lg:w-auto">
              <ConsultationCard width="w-[589px]" height="h-[250px]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
