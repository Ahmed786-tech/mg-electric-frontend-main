import React from "react";
import PageTitle from "../../Components/PageTitle";
import HeroImage from "../../assets/images/aboutus-hero.png";
import { CompanyOverview } from "../../Components/about-us-overview/overview/CompanyOverview";
import TeamCarousel from "../../Components/about-us-team/teamCarousel/TeamCarousel";
import { ApproachSection } from "../../Components/about-us-approach/approach/ApproachSection";
import { AccreditationsSection } from "../../Components/about-us-banner/accreditations/AccreditationsSection";
import bgDots from "../../assets/images/bgDots.png";
import aboutRightVecotr from "../../assets/images/aboutRightVector.png";
import rightBgDots from "../../assets/images/rightSideDots.png";
import leftVector from "../../assets/images/leftVector.png";

function AboutUs() {
  return (
    <div className="">
      <PageTitle
        tag="About Us"
        title="A Family Tradition of Electrical Excellence"
        subtitle="For generations, the family behind MG Electrics Ltd has been dedicated to providing exceptional electrical services."
        imageSrc={HeroImage}
        imageAlt="Healthcare and Commercial Electrical Services"
      />
      <div className="hidden md:block absolute mt-[270px] left-0 transform -translate-y-1/4 z-0 ">
        <div className=" md:w-[370px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <div className="hidden md:block absolute mt-[-7px] right-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[550px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <CompanyOverview />
      <TeamCarousel />
      <ApproachSection />
      <div className="hidden md:block absolute mt-10 right-0 transform -translate-y-1/4 z-0 ">
        <div className=" md:w-[370px] ">
          <img src={rightBgDots} alt="Decorative oval" />
        </div>
      </div>
      <AccreditationsSection />
      <div className="hidden md:block absolute mt-[10px] left-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[400px] ">
          <img src={leftVector} alt="Decorative oval" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
