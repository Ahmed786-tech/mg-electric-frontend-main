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
      answer: "IHow often should emergency lighting be tested?",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is a UPS system?",
      answer: "What is a UPS system?",
      isOpen: false,
    },
    {
      id: 4,
      question: "How do I choose the right backup generator for my facility?",
      answer: "How do I choose the right backup generator for my facility?",
      isOpen: false,
    },
    {
      id: 5,
      question:
        "What are the benefits of regular maintenance for emergency lighting and power systems?",
      answer:
        "What are the benefits of regular maintenance for emergency lighting and power systems?",
      isOpen: false,
    },
    {
      id: 6,
      question:
        "What is the cost of installing emergency lighting and power systems?",
      answer:
        "What is the cost of installing emergency lighting and power systems?",
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
    <div className="w-full flex flex-col mx-auto gap-16 my-16 justify-center content-center relative">
      <div className="hidden md:block absolute mt-[250px] top-0 right-0  z-0 ">
        <div className=" md:w-[500px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <div className="hidden md:block absolute mt-[750px] top-0 left-0  z-0 ">
        <div className=" md:w-[400px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <PageTitle
        tag="Our Services"
        title={
          <span className="leading-[50px]">
            Powering Through Outages: Reliable Emergency Lighting & Power
            Solutions
          </span>
        }
        subtitle="Emergency lighting and power backup systems & emergency lighting solutions are essential for keeping a commercial property safe and operational during power outages. These systems provide reliable backup power, EG, UPS, IPS to maintain necessary lighting, and support continued operations during disruptions."
        imageSrc={lightingimg}
        imageAlt="Healthcare and Commercial Electrical Services"
      />

      <WeOffer
        titleTag="What We Offer"
        heading={
          <>
            <span className="text-[#01B8FF] leading-[45px]">
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
        LeftimgHeight="707px"
        RightimgHeight="533px"
        LeftimgWidth="200px"
        RightimgWidth="271px"
        MarginBottom={"mb-[100px]"}
        margintop2={"mt-[90px]"}
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
      <div className="relative">
        <FAQSection faqData={faqData} />
        <div className="hidden md:block absolute left-0 transform -translate-y-1/2 z-0 opacity-30">
          <div className=" md:w-[400px] md:h-[600px] relative ml-[-140px]">
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
        <div className="hidden md:block absolute mt-[-50px] right-0 transform -translate-y-1/2 z-0 ">
          <div className=" md:w-[500px] ">
            <img src={aboutRightVecotr} alt="Decorative oval" />
          </div>
        </div>
      </div>
    </div>
  );
}
