import * as React from "react";
import { ApproachCard } from "./ApproachCard";
import { ImageGrid } from "./ImageGrid";
import Approachimg from "@/assets/images/Approach.png";
import img1 from "@/assets/images/img1.png";
import img2 from "@/assets/images/img2.png";
import RightDots from "@/assets/images/RightDots.png";

const approachData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/ccdc9ef1917cdf11de30ee306ef575bfa1541b85a3771d2679a3030058ae73dd?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    title: "Customer-Centric Approach",
    description:
      "We focus on your needs, delivering tailored solutions for lasting satisfaction.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/e6cd3345b5f9ae44ed889a2dad8acd58b0b3aa47e392bef150ae25bc3951ac15?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    title: "Efficient & Timely Execution",
    description: "Working efficiently to minimise disruption to your business.",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/31734da30a44c4ea36d0997fe5b35e7c2405cfec4bb84736be19c91e58204a79?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    title: "Attention to Detail",
    description:
      "Ensuring every aspect of the project is completed to the highest standard.",
  },
];

const gridImages = [img1, img2];

export function ApproachSection() {
  return (
    <section className="w-full bg-cover bg-center bg-no-repeat py-6 ">
      <div className=" absolute w-[70px] right-4 mt-6 z-10">
        <img
          src={RightDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      ;
      <div className="flex flex-col justify-center mx-auto max-w-[1244px] px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center w-full mb-8">
          <div className="text-[#01B8FF] text-[20px] leading-10 font-normal font-andika">
            Approach
          </div>
          <div className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-white font-andika">
            Our Approach
          </div>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          {/* Left side: Image + paragraph */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <img
              loading="lazy"
              src={Approachimg}
              alt="Our approach illustration"
              className="object-contain rounded-[20px] w-full h-auto max-h-[441px]"
            />
            <p className="mt-4 text-[13px] font-normal text-white font-inter">
              We take a customer-centric approach, working closely with you to
              understand your specific <br className="hidden sm:block" />
              needs. We'll then develop a tailored solution that meets your
              requirements and budget.
            </p>
          </div>

          {/* Right side: Cards + Grid images */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <div className="text-[20px] font-bold text-white mb-6 font-inter">
              Our team is committed to:
            </div>
            <div className="flex flex-col gap-6">
              {approachData.map((item, index) => (
                <ApproachCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <div className="mt-8">
              <ImageGrid images={gridImages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
