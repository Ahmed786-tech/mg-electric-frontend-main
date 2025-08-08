import React from "react";
import PageTitle from "../../Components/PageTitle";
import servicesimg from "../../assets/images/aboutus-hero.png";
import ServicesSection from "../../Components/ServicesSection";
import TestimonialSection from "../../Components/TestimonialSection";
import aboutRightVecotr from "../../assets/images/aboutRightVector.png";
import bgDots from "../../assets/images/bgDots.png";

import { ContactSection } from "../../Components/contact-us/contact/ContactSection";
import { Banner } from "../../Components/gallery-banner/hero/Banner";
import Vector from "../../assets/images/rightSideVector.png";

export default function ServicesOverview() {
  return (
    <div className="">
      <PageTitle
        tag="Our Services"
        title={
          <span className="leading-[50px]">
            Comprehensive Electrical Solutions for Healthcare and Commercial
            Facilities
          </span>
        }
        subtitle="Overview of services tailored to the healthcare and commercial sectors."
        imageSrc={servicesimg}
        imageAlt="Healthcare and Commercial Electrical Services"
      />
      <div className=" absolute md:mt-[-100px] mt-[0px] right-0 transform -translate-y-1/2 z-0 ">
        <div className="w-[200px] md:w-[550px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute md:mt-[0px] mt-[150px] left-0 transform -translate-y-1/4 z-0 ">
        <div className="w-[200px] md:w-[350px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <ServicesSection />
      <TestimonialSection />
      <Banner />
      <div className=" absolute right-0 transform -translate-y-1/3 z-0">
        <div className="w-[200px] h-[300px] sm:w-[250px] sm:h-[350px] md:w-[500px] md:h-[700px]">
          <img
            src={Vector}
            alt="Decorative oval"
            style={{
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
