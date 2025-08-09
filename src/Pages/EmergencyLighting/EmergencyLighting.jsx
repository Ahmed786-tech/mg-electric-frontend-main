import React from "react";
import PageTitle from "../../Components/PageTitle";
import lightingimg from "../../assets/images/Lighting.png";
import WeOffer from "../../Components/What-We-Offer";
import leftimg from "../../assets/images/Img7.png";
import rightimg from "../../assets/images/Img8.png";
import Icon1 from "../../assets/svgs/Icon13.svg";
import Icon2 from "../../assets/svgs/Icon14.svg";
import Icon3 from "../../assets/svgs/Icon15.svg";
import Icon4 from "../../assets/svgs/Icon16.svg";
import BenefitsSection from "../../Components/BenefitsSection";
import leftimg1 from "../../assets/images/Img10.png";
import rightimg1 from "../../assets/images/Img9.png";
import Icon5 from "../../assets/svgs/Icon17.svg";
import icon6 from "../../assets/svgs/Icon18.svg";
import icon7 from "../../assets/svgs/Icon19.svg";
import icon8 from "../../assets/svgs/Icon20.svg";
import icon9 from "../../assets/svgs/Icon21.svg";
import icon10 from "../../assets/svgs/Icon22.svg";
import SquareVector from "../../assets/images/squareVector.png";
import { AccreditationsSection } from "../../Components/about-us-banner/accreditations/AccreditationsSection";
import FAQSection from "../../Components/FaqSection";
import ContactUsSection from "../../Components/ContactUsSection";
import aboutRightVecotr from "@/assets/images/aboutRightVector.png";
import rightBgDots from "@/assets/images/rightSideDots.png";

import bgDots from "@/assets/images/bgDots.png";
export default function ElectricalTesting() {
  const faqData = [
    {
      id: 1,
      question: "Why is emergency lighting important?",
      answer:
        "Emergency lighting ensures safe evacuation during power outages, guiding people to exits and preventing accidents.",
      isOpen: true,
    },
    {
      id: 2,
      question: "How often should emergency lighting be tested?",
      answer: "Emergency lighting systems should be tested regularly, typically monthly for functionality and annually for full duration testing.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is a UPS system?",
      answer: "A UPS system provides backup power to critical equipment during brief power outages, allowing for a seamless transition to generator power or the restoration of the main power supply.",
      isOpen: false,
    },
    {
      id: 4,
      question: "How do I choose the right backup generator for my facility?",
      answer: "The size and type of backup generator required will depend on your facility's specific needs. Our experts can assess your requirements and recommend the most suitable solution",
      isOpen: false,
    },
    {
      id: 5,
      question:
        "What are the benefits of regular maintenance for emergency lighting and power systems?",
      answer:
        "Regular maintenance can extend the lifespan of your equipment, improve its performance, and reduce the risk of unexpected failures.",
      isOpen: false,
    },
    {
      id: 6,
      question:
        "What is the cost of installing emergency lighting and power systems?",
      answer:
        "The cost of installation will vary depending on the size and complexity of your facility. Our team can provide a detailed quote after assessing your specific needs.",
      
      isOpen: false,
    },
  ];
  const benefitsData = [
    {
      icon: Icon5,
      title: "Enhanced Safety",
      description:
        "Ensure the safety of your staff, patients, and visitors during power outages",
    },
    {
      icon: icon6,
      title: "Business Continuity",
      description: "Minimise downtime and maintain critical operations.",
    },
    {
      icon: icon7,
      title: "Compliance with Regulations",
      description: "Adhere to safety standards and regulations.",
    },
    {
      icon: icon8,
      title: "Peace of Mind",
      description:
        "Know that your facility is protected in the event of a power outage.",
    },
    {
      icon: icon9,
      title: "Increased Productivity",
      description:
        "Reliable power ensures smooth operations and minimises disruptions.",
    },
    {
      icon: icon10,
      title: "Cost-Effective Solutions",
      description:
        "Our energy-efficient systems can help reduce long-term costs.",
    },
  ];
  const servicesList = [
    {
      title: "Backup Power Systems",
      description:
        "Installation of uninterruptible power supply (UPS) systems, generators, or alternative power solutions to keep critical systems operational during power failures.",
      icon: Icon1,
    },
    {
      title: "Emergency Lighting",
      description:
        "Installation and maintenance of emergency lighting to ensure visibility and guide occupants to exits during power cuts or emergencies.",
      icon: Icon2,
    },
    {
      title: "Outdoor Power and Lighting",
      description:
        "Provision of outdoor power sources and security lighting that operate independently during power outages or emergencies.",
      icon: Icon3,
    },
    {
      title: "Battery Maintenance and Replacement",
      description:
        "Regular checks and timely replacement of backup batteries in emergency lighting and other critical systems to ensure consistent reliability.",
      icon: Icon4,
    },
  ];
  return (
    <div className="w-full flex flex-col mx-auto gap-16 md:my-16 my-4 justify-center content-center relative">
      <div className=" absolute md:mt-[250px] mt-[650px] top-0 right-0  z-0 ">
        <div className="w-[200px] md:w-[500px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute mt-[750px] top-0 left-0  z-0 ">
        <div className="w-[200px] md:w-[400px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <PageTitle
        tag="Our Services"
        title={
          <span className="leading-[50px] md:text-3xl text-2xl">
            Powering Through Outages: Reliable Emergency Lighting & Power
            Solutions
          </span>
        }
        subtitle="Emergency lighting solutions are essential for keeping a commercial property safe and operational during power outages. These systems provide reliable backup power, EG, UPS, IPS to maintain necessary lighting, and support continued operations during disruptions."
        imageSrc={lightingimg}
        imageAlt="Healthcare and Commercial Electrical Services"
      />

      <WeOffer
        titleTag="What We Offer"
        heading={
          <>
            <span className="text-[#01B8FF] leading-[45px] md:text-3xl text-2xl">
              About Powering Through Outages:
            </span>
            <br />
            <span className="leading-[45px]">
              Reliable Power Solutions & Emergency Lighting
            </span>
          </>
        }
        Paragraph={
          "At MG Electrics Ltd, we understand the critical importance of reliable emergency lighting and Power Solutions and Emergency Lighting. Our expert team is dedicated to providing cutting-edge systems that ensure the safety and continuity of your healthcare or commercial facility."
        }
        subheading="Our Services Includes:"
        leftImage={leftimg}
        rightImage={rightimg}
        services={servicesList}
        LeftimgHeight={{
          mobile: "500px",
          desktop: "707px"
        }}
        RightimgHeight={{
          mobile: "300px",
          desktop: "533px"
        }}
        LeftimgWidth="200px"
        RightimgWidth="271px"
        MarginBottom={"mb-[100px]"}
        margintop2={"mt-[90px]"}
        rightSectionMargin={"md:mt-0 mt-0"}
      />
      <BenefitsSection
        heading="Benefits"
        subheading="Benefits of Emergency Lighting & Power Solutions"
        subHeading1="Benefits of Our Emergency Lighting & Power Solutions"
        benefits={benefitsData}
        leftImage={leftimg1}
        rightImage={rightimg1}
      />
      <AccreditationsSection />
      <div className=" absolute  md:bottom-[1120px] bottom-[1900px]  right-0 transform -translate-y-1/4 z-0 ">
        <div className="w-[250px] md:w-[450px] ">
          <img src={rightBgDots} alt="Decorative oval" />
        </div>
      </div>
      <div className="relative">
        <FAQSection faqData={faqData} />
        <div className=" absolute left-0 transform -translate-y-1/2 z-0 opacity-30">
          <div className="w-[270px] md:w-[400px] md:h-[600px] relative ml-[-140px]">
            <img
              src={SquareVector}
              alt="Decorative oval"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
        </div>

        <ContactUsSection />
        <div className=" absolute mt-[-50px] right-0 transform -translate-y-1/2 z-0 ">
          <div className="w-[200px] md:w-[500px] ">
            <img src={aboutRightVecotr} alt="Decorative oval" />
          </div>
        </div>
      </div>
    </div>
  );
}
