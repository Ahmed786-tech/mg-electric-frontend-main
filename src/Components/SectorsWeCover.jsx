import React from "react";
import leftimg from "../assets/images/Img25.png";
import rightimg1 from "../assets/images/Img26.png";
import rightimg2 from "../assets/images/Img27.png";
import Icon1 from "../assets/svgs/Icon33.svg";
import Icon2 from "../assets/svgs/Icon34.svg";
import Icon3 from "../assets/svgs/Icon35.svg";
import bg from "../assets/images/Bg10.png";
import IsolationMode1 from "@/assets/images/IsolationMode1.png";


const sectors = [
  {
    title: "Commercial Facilities",
    description:
      "We provide efficient, scalable electrical installations, upgrades, and maintenance for commercial spaces. From offices to retail units, our work is tailored to meet the operational demands of busy business environments.",
    icon: Icon2,
  },
  {
    title: "Healthcare",
    description:
      "We work seamlessly to deliver high-quality installations, upgrades, and maintenance with strict adherence to healthcare standards. Our team understands the sensitivity of clinical environments and ensures minimal disruption at every stage.",
    icon: Icon1,
  },
  {
    title: "Residential",
    description:
      "We offer comprehensive electrical services for homes, covering installations, upgrades, repairs, and security solutions. From full rewires and consumer unit updates to CCTV and outdoor lighting.",
    icon: Icon3,
  },
];

export default function SectorsWeCover() {
  return (
    <section
      className="px-4 text-white mt-20"
     
    >

<div className=" absolute w-[250px] md:mt-[450px] mt-[800px] right-0 transform  -translate-y-1/2 z-0">
        <img
          src={IsolationMode1}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-2 relative z-10">
        {/* Left Side */}
        <div className="flex flex-col space-y-8 w-full lg:w-[405px] relative z-10">
          {/* Heading & Description */}
          <div>
            <p className="text-[#01B8FF] text-[20px] font-normal font-andika">
              Our Sectors
            </p>
            <h2 className="text-[32px] sm:text-[36px] lg:text-[40px] font-bold mt-2 font-andika">
              Sectors We Cover
            </h2>
            <p className="text-white text-[16px] sm:text-[18px] font-medium mt-4 leading-relaxed">
              We specialise in delivering tailored electrical solutions across
              the Healthcare, Commercial, and Residential sectors. Our expertise
              ensures safe, efficient, and compliant systems for each
              environment.
            </p>
          </div>

          {/* Electrician Image */}
          <img
            src={leftimg}
            alt="Electrician"
            className="rounded-[20px] w-full max-w-[403px] h-auto lg:h-[386px] object-cover"
          />
        </div>

        {/* Right Side Grid */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 relative z-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <img
              src={rightimg1}
              alt="Wiring"
              className="rounded-[20px] w-full max-w-[365px] h-auto lg:h-[210px] object-cover"
            />
            <SectorCard {...sectors[1]} />
            <img
              src={rightimg2}
              alt="Tools"
              className="rounded-[20px] w-full max-w-[365px] h-auto lg:h-[209px] object-cover"
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <SectorCard {...sectors[0]} />
            <SectorCard {...sectors[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectorCard({ icon, title, description }) {
  return (
    <div className="text-[#011C33] rounded-xl border border-[#01B8FF] p-2 text-center shadow-md w-full max-w-[365px] h-auto lg:h-[444px] flex flex-col">
      <div className="bg-white rounded-[10px] p-3.5 flex-grow flex flex-col">
        <div className="flex justify-center mb-4 mt-6">
          <img src={icon} alt={`${title} icon`} width={75} height={75} />
        </div>
        <h3 className="text-[22px] sm:text-[25px] font-bold text-[#001A33] mb-2 font-andika">
          {title}
        </h3>
        <p className="text-[14px] text-[#848484] font-medium mb-4 flex-grow">
          {description}
        </p>
        <button className="bg-[linear-gradient(180deg,#01B8FF_0%,#3E99BC_100%)] text-white px-6 py-2 rounded-[50px] w-full max-w-[203px] h-[50px] text-[16px] sm:text-[18px] font-medium mx-auto mt-auto hover:bg-[#0199d9] transition">
          View More
        </button>
      </div>
    </div>
  );
}
