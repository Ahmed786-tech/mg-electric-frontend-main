import * as React from "react";
import { FeatureItem } from "./components/FeatureItem";
import { overviewFeatures } from "./data/overviewData";
import overviewimg from "@/assets/images/Overview.jpg";
import bg from "@/assets/images/Bg15.png";

export function CompanyOverview() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center gap-10 lg:gap-8 mx-auto max-w-[1244px] px-4 sm:px-6 md:px-8">
        
        {/* Left Image Section */}
        <img
          loading="lazy"
          src={overviewimg}
          alt="MG Electrics company overview"
          className="rounded-[20px] w-full max-w-[577px] h-auto max-h-[536px] object-cover"
        />

        {/* Right Text Section */}
        <div className="flex flex-col justify-center self-stretch w-full lg:w-[48%] max-md:max-w-full">
          <div className="text-xl text-sky-500 font-andika">
            Overview
          </div>

          <div className="mt-2 text-3xl font-bold leading-loose text-slate-50 font-andika">
            Company Overview:
          </div>

          <div className="mt-2.5 text-sm leading-7 text-white font-poppins">
            For generations, the family behind MG Electrics Ltd has been
            dedicated to providing exceptional electrical services. We're proud
            to continue this legacy, delivering reliable, efficient, and safe
            electrical solutions for healthcare and commercial facilities across
            Surrey, London, and Middlesex.
          </div>

          <div className="flex flex-col mt-10 w-full">
            {overviewFeatures.map((feature) => (
              <div key={feature.id} className="mt-3 first:mt-0">
                <FeatureItem
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
