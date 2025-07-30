import ConsultationSection from "../../Components/ConsultationSection";
import AboutUsSection from "../../Components/AboutUsSection";
import leftimg1 from "../../assets/images/Img13.png";
import leftimg2 from "../../assets/images/Img14.png";
import rightimg from "../../assets/images/Img15.png";
import Icon1 from "../../assets/svgs/Icon36.svg";
import Icon2 from "../../assets/svgs/Icon37.svg";
import Icon3 from "../../assets/svgs/Icon38.svg";
import Icon4 from "../../assets/svgs/Icon39.svg";
import { AccreditationsSection } from "../../Components/about-us-banner/accreditations/AccreditationsSection";
import ServicesCarousel from "../../Components/ServicesCarousel/TeamCarousel";
import OurProcess from "../../Components/OurProcess";
import leftimg3 from "../../assets/images/Img19.png";
import leftimg4 from "../../assets/images/Img20.png";
import rightimg2 from "../../assets/images/Img21.png";
import Icon5 from "../../assets/svgs/Icon27.svg";
import Icon6 from "../../assets/svgs/Icon28.svg";
import Icon7 from "../../assets/svgs/Icon29.svg";
import Icon8 from "../../assets/svgs/Icon30.svg";
import Icon9 from "../../assets/svgs/Icon31.svg";
import WhyChooseUs from "../../Components/WhyChooseUs";
import AreasWeCover from "../../Components/AreasWeCover";
import { Banner } from "../../Components/gallery-banner/hero/Banner";
import SectorsWeCover from "../../Components/SectorsWeCover";
import OurGallery from "../../Components/OurGallery";
import ContactForm from "../../Components/ContactForm";
import MapSection from "../../Components/MapSection";
import bg from "../../assets/images/Bg9.png";
import bgDots from "../../assets/images/bgDots.png";
import aboutRightVecotr from "../../assets/images/aboutRightVector.png";
import leftVector from "../../assets/images/leftVector.png";

import LeftDots from "../../assets/images/Leftdots.png";
import isolation_Mode from "/images/IsolationMode.png";
import isolationMode2 from "../../assets/images/isolationVector2.png";
import rightBgDots from "../../assets/images/rightSideDots.png";

function Home() {
  const servicesList = [
    {
      title: "Integrity",
      description:
        "We believe in open and honest communication, building strong relationships with our clients.",
      icon: Icon1,
    },
    {
      title: "Safety First",
      description:
        "We prioritise safety in every aspect of our work, ensuring that your facility meets all relevant regulatory standards.",
      icon: Icon2,
    },
    {
      title: "Quality Workmanship",
      description:
        "We use only the highest quality materials and employ skilled technicians to deliver exceptional results.",
      icon: Icon3,
    },
    {
      title: "Customer Satisfaction",
      description:
        "We're dedicated to exceeding your expectations, providing responsive and reliable service.",
      icon: Icon4,
    },
  ];
  const servicesList1 = [
    {
      title: "Specialists in Healthcare & Commercial Electrical Services:",
      description:
        "WWith a deep understanding of the unique challenges faced by healthcare and commercial facilities, we provide tailored solutions that meet your specific requirements.",
      icon: Icon5,
    },
    {
      title: "Safety-First Approach:",
      description:
        "Our commitment to safety is unwavering. We adhere to the latest safety regulations and industry best practices to ensure a safe working environment for your staff, patients and building occupants.",
      icon: Icon6,
    },
    {
      title: "Tailored Electrical Solutions:",
      description:
        "We don't believe in a one-size-fits-all approach. Our solutions are customised to your facility's unique needs, ensuring optimal performance and energy efficiency.",
      icon: Icon7,
    },
    {
      title: "Proven Track Record:",
      description:
        "Our portfolio of successful projects speaks for itself. We've earned the trust of numerous clients in Surrey, London, and Middlesex.",
      icon: Icon8,
    },
    {
      title: "Certified & Accredited:",
      description:
        "Our team is fully certified and accredited, guaranteeing the highest standards of workmanship and compliance.",
      icon: Icon9,
    },
  ];
  return (
    <div>
      <ConsultationSection />
      <div className="hidden md:block absolute  left-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[370px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <div className="hidden md:block absolute mt-[-40px] right-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[550px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <AboutUsSection
        titleTag="About Us"
        heading="We're your trusted partner"
        Paragraph={
          "At MG Electrics Ltd, we're more than just an electrical contractor. We're your trusted partner in ensuring the safety, compliance, and optimal performance of your healthcare and commercial facilities. With years of experience in the industry, we've honed our expertise give sound advise on solutions for our clients."
        }
        subheading="Our commitment to excellence is reflected in our core values:"
        leftImage={leftimg1}
        leftImage2={leftimg2}
        rightImage={rightimg}
        services={servicesList}
        leftimgHeight="311px"
        leftimg2Height="261px"
        rightimgHeight="426px"
        leftimgWidth="282px"
        leftimg2Width={"283px"}
        rightimgWidth="283px"
        MarginTop={"-mt-[35px]"}
        MarginBottom={"-mb-[50px]"}
        margintop2={"mt-8"}
      />
      <div className=" absolute w-[70px] left-4 transform  -translate-y-1/4 z-10">
        <img
          src={LeftDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div className=" absolute w-[250px] mt-[-50px] right-0 transform  -translate-y-1/2 z-10">
        <img
          src={isolation_Mode}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <AccreditationsSection />
      <ServicesCarousel />
      <div className="hidden md:block absolute mt-[-100px] left-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[540px] ">
          <img src={leftVector} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute w-[200px] mt-[350px] left-0 transform  -translate-y-1/4 z-10">
        <img
          src={isolationMode2}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="hidden md:block absolute  right-0 transform -translate-y-1/4 z-0 ">
        <div className=" md:w-[370px] ">
          <img src={rightBgDots} alt="Decorative oval" />
        </div>
      </div>
      <OurProcess />
      <WhyChooseUs
        titleTag="Why Choose Us"
        heading="Why MG Electrics?"
        leftImage={leftimg3}
        leftImage2={leftimg4}
        rightImage={rightimg2}
        services={servicesList1}
        leftimgHeight="410px"
        leftimg2Height="343px"
        rightimgHeight="485px"
        leftimgWidth="263px"
        leftimg2Width={"264px"}
        rightimgWidth="264px"
        MarginTop={"-mt-[35px]"}
        MarginBottom={"-mb-[50px]"}
        margintop2={"mt-8"}
      />
      <AreasWeCover />
      <Banner Background={bg} />
      <SectorsWeCover />
      <OurGallery />
      <ContactForm />
      <MapSection />
    </div>
  );
}

export default Home;
