import React from "react";
import PageTitle from "../../Components/PageTitle";
import electricalimg from "../../assets/images/Electrical.png";
import WeOffer from "../../Components/What-We-Offer";
import BenefitsSection from "../../Components/BenefitsSection";
import { AccreditationsSection } from "../../Components/about-us-banner/accreditations/AccreditationsSection";
import FaqSection from "../../Components/FaqSection";
import ContactUsSection from "../../Components/ContactUsSection";
import leftimg from "../../assets/images/img3.png";
import rightimg from "../../assets/images/img4.png";
import Icon1 from "../../assets/svgs/Icon1.svg";
import Icon2 from "../../assets/svgs/Icon2.svg";
import Icon3 from "../../assets/svgs/Icon3.svg";
import Icon4 from "../../assets/svgs/Icon4.svg";
import Icon5 from "../../assets/svgs/Icon5.svg";
import Icon6 from "../../assets/svgs/Icon6.svg";
import leftimg1 from "../../assets/images/Img6.png";
import rightimg1 from "../../assets/images/Img5.png";
import icon7 from "../../assets/svgs/Icon7.svg";
import icon8 from "../../assets/svgs/Icon8.svg";
import icon9 from "../../assets/svgs/Icon9.svg";
import icon10 from "../../assets/svgs/Icon10.svg";
import icon11 from "../../assets/svgs/Icon11.svg";
import icon12 from "../../assets/svgs/Icon12.svg";
import bg from "../../assets/images/Bg24.png";
import aboutRightVecotr from "../../assets/images/aboutRightVector.png";
import bgDots from "../../assets/images/bgDots.png";
import rightBgDots from "../../assets/images/rightSideDots.png";
import chooseUsBg from "@/assets/images/chooseUsBg.png";

export default function ElectricalInstallation() {
  const faqData = [
    {
      id: 1,
      question: "Do You Install Electrical Systems In Healthcare Settings?",
      answer:
        "Yes, We Specialise In Installing Systems In Healthcare Environments, Ensuring Compliance With All Safety And Regulatory Standards.",
      isOpen: true,
    },
    {
      id: 2,
      question: "How Long Does An Installation Typically Take?",
      answer:
        " The timeframe depends on the complexity of the project. We provide a detailed schedule during the consultation phase.",
           isOpen: false,
    },
    {
      id: 3,
      question: "Can You Upgrade Outdated Electrical Systems?",
      answer:
        " Absolutely. We specialise in upgrading old electrical systems to bring them in line with modern standards, improving efficiency and safety.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Are Your Electricians Qualified And Experienced?",
      answer:
        "Our team of experienced electricians is fully qualified and certified to deliver high-quality workmanship.",
      isOpen: false,
    },
    {
      id: 5,
      question:
        "What Is Your Approach To Minimising Disruption To My Business?",
      answer:
        "We work efficiently and plan our work carefully to ensure minimal impact on your operations.",
      isOpen: false,
    },
    {
      id: 6,
      question: "How Can You Help Me Reduce Energy Costs?",
      answer:
        "We can help you reduce energy costs by installing energy-efficient lighting, upgrading your electrical systems, and providing expert advice on energy conservation.",
      isOpen: false,
    },
  ];
  const benefitsData = [
    {
      icon: icon7,
      title: "Enhanced Safety",
      description:
        "Our installations and upgrades meet the highest safety standards, protecting your staff, patients, and visitors.",
    },
    {
      icon: icon8,
      title: "Improved Efficiency",
      description:
        "Our energy-efficient solutions can help reduce operating costs.",
    },
    {
      icon: icon9,
      title: "Increased Productivity",
      description:
        "Reliable electrical systems can boost productivity and employee morale.",
    },
    {
      icon: icon10,
      title: "Future-Proofing",
      description:
        "Our solutions are designed to accommodate future growth and technological advancements.",
    },
    {
      icon: icon11,
      title: "Minimal Disruption",
      description:
        " We work efficiently to minimise disruption to your business operations.",
    },
    {
      icon: icon12,
      title: "Peace Of Mind",
      description:
        "Our experienced team ensures that your project is completed on time and within budget.",
    },
  ];
  const servicesList = [
    {
      title: "Rewires",
      description:
        "Comprehensive or partial rewiring to replace outdated wiring, ensuring systems meet current regulations and can handle modern electrical loads.",
      icon: Icon1,
    },
    {
      title: "Commercial New Builds and Extensions",
      description:
        "Installation of complete electrical systems for new buildings and extensions, covering power distribution, lighting, and essential safety infrastructure.",
      icon: Icon2,
    },
    {
      title: "Additional Power And Lighting",
      description:
        "Adding new power points, lighting fixtures, or circuits to accommodate higher power needs or improve the lighting layout.",
      icon: Icon3,
    },
    {
      title: "Consumer Unit Replacement",
      description:
        "Upgrading the consumer unit (fuse box) to improve safety, efficiency, and compliance with the latest electrical standards.",
      icon: Icon4,
    },
    {
      title: "Outdoor Power And Lighting",
      description:
        "Provision of outdoor power sources and lighting solutions for landscaping, car parks, walkways, and security.",
      icon: Icon5,
    },
    {
      title: "LED Lighting",
      description:
        "Installation of customised lighting solutions, such as energy-saving LED lights, decorative cold cathode lighting, and neon installations for both functional and aesthetic applications.",
      icon: Icon6,
    },
  ];
  return (
    <div className="">
      <PageTitle
        tag="Our Services"
        title="Expert Electrical Installations & Upgrades"
        subtitle="This category includes services that enhance or expand a building’s electrical infrastructure to meet increased power demands, introduce new functionalities, or modernise systems to current standards."
        imageSrc={electricalimg}
        imageAlt="Healthcare and Commercial Electrical Services"
      />
      <div className=" absolute md:mt-[280px] md:mt-[300px] mt-[100px] left-0 transform -translate-y-1/2 z-0 ">
        <div className="w-[200px] md:w-[370px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute md:mt-[-90px] mt-[-30px] right-0 transform -translate-y-1/2 z-0 ">
        <div className="w-[200px] md:w-[500px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <WeOffer
        titleTag="What We Offer"
        heading="About Electrical Installations & Upgrades"
        subheading="Our Services Includes:"
        leftImage={leftimg}
        rightImage={rightimg}
        services={servicesList}
        LeftimgHeight="511px"
        RightimgHeight="478px"
        LeftimgWidth="290px"
        RightimgWidth="290px"
        MarginTop={"-mt-[35px]"}
        MarginBottom={"-mb-[50px]"}
        margintop={"mt-[130px]"}
        margintop2={"mt-8"}
        rightSectionMargin={"md:mt-8 mt-28"}
      />

      <BenefitsSection
        heading="Benefits"
        subheading="Benefits Of Electrical Installations & Upgrades"
        benefits={benefitsData}
        leftImage={leftimg1}
        rightImage={rightimg1}
      />

      <div className=" absolute mt-[-100px] right-0 transform -translate-y-1/4 z-0 ">
        <div className="w-[200px] md:w-[370px] ">
          <img src={rightBgDots} alt="Decorative oval" />
        </div>
      </div>
      <AccreditationsSection Background={bg} />
      <div className=" absolute mt-[0px] left-0 transform -translate-y-1/4 z-0 opacity-20">
        <div className="w-[300px] md:w-[600px] h-[800px] ">
          <img src={chooseUsBg} alt="Decorative oval" />
        </div>
      </div>
      <FaqSection faqData={faqData} />
      <ContactUsSection />
      <div className=" absolute mt-[-50px] right-0 transform -translate-y-1/2 z-0 ">
        <div className="w-[200px] md:w-[500px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
    </div>
  );
}
