"use client";
import image1 from "@/assets/images/Img11.png";
import image2 from "@/assets/images/Img12.png";
import surveyImage1 from "@/assets/images/surveyImage1.png";
import surveyImage2 from "@/assets/images/surveyImage2.png";
import surveyImage3 from "@/assets/images/surveyImage3.png";

import { PhoneContact } from "./gallery-banner/hero/PhoneContact";
import bg from "@/assets/images/Bg21.png";

export default function ServicesSection() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat text-white px-4 md:px-6"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-[#01B8FF] font-normal text-[18px] md:text-[20px] mb-1 font-andika">
          Services
        </h3>
        <h2 className="font-bold mb-9 font-andika text-[32px] md:text-[40px] lg:text-[50px]">
          Electrical Services In Surrey
        </h2>

        {/* Top 3 Cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {[
            {
              image: surveyImage1,
              title: "Electrical Installations & Upgrades",
              desc: "From new installations to upgrades, we provide comprehensive electrical solutions.",
            },
            {
              image: surveyImage2,
              title: "Maintenance & Reactive Repairs",
              desc: "Our maintenance and repair services keep your electrical systems running smoothly.",
            },
            {
              image: surveyImage3,
              title: "Backup Power & Emergency Lighting Solutions",
              desc: "We offer reliable emergency lighting and backup power systems to keep your facility running during power outages.",
            },
            {
              image: surveyImage2,
              title: "Fire Alarms & Safety Systems",
              desc: "We install and maintain fire alarm systems to protect your facility and occupants.",
            },
            {
              image: surveyImage3,
              title: "Data Cabling & Networking",
              desc: "We design and install high-performance data networks for seamless connectivity.",
            },
            {
              image: surveyImage1,
              title: "Maintenance & Reactive Repairs",
              desc: "Our maintenance and repair services keep your electrical systems running smoothly.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-[#BDB7B7] rounded-[20px] p-3.5 w-full sm:w-[360px] md:w-[397px] min-h-[494px]"
            >
              <div className="bg-white text-[#02172F] rounded-[16px] h-full flex flex-col justify-between p-6 shadow-md">
                <div className="flex flex-col items-center">
                  <div className="w-full h-[180px] rounded-xl overflow-hidden mb-6">
                    <img
                      src={item.image}
                      alt="Electrical work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-[20px] md:text-[22px] text-[#001A33] font-andika font-bold mb-3.5 text-center">
                    {item.title}
                  </h3>
                  <p className="text-[15px] md:text-[16px] font-medium text-[#848484] text-center max-w-[330px] mb-6">
                    {item.desc}
                  </p>
                </div>
                <button
                  className="text-white py-2 px-6 rounded-[50px] w-[246px] h-[61px] font-medium text-[18px] mx-auto flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(180deg, #01B8FF 0%, #3E99BC 100%)",
                  }}
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="border border-[#BDB7B7] rounded-[20px] p-3.5 w-full sm:w-[360px] md:w-[397px] h-[494px]">
            <div className="bg-white text-[#02172F] rounded-[16px] h-full flex flex-col justify-between p-4 md:p-5">
              <div className="flex flex-col items-center">
                <div className="w-full h-[180px] rounded-xl overflow-hidden mb-6">
                  <img
                    src={image1}
                    alt="Electrical work"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[15px] md:text-[16px] font-normal text-[#848484] font-poppins text-center mb-6 max-w-[350px]">
                  No matter what electrical issue you are challenged with, get
                  in touch. We may still be able to help with a free
                  consultation element being labelled. Call now.
                </p>
              </div>
              <div className="flex items-center justify-center mx-auto -mt-[100px]">
                <PhoneContact />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-[#BDB7B7] rounded-[20px] p-3.5 w-full sm:w-[360px] md:w-[397px] h-[494px]">
            <div className="bg-white text-[#02172F] rounded-[16px] h-full flex flex-col justify-between p-4 md:p-5">
              <div className="flex flex-col items-center">
                <div className="w-full h-[339px] rounded-xl overflow-hidden mb-6">
                  <img
                    src={image2}
                    alt="Workers"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="text-center">
                <button
                  className="text-white py-2 px-6 rounded-[15px] w-full md:w-[327px] h-[56px] font-medium text-[18px]"
                  style={{
                    background:
                      "linear-gradient(180deg, #01B8FF 0%, #3E99BC 100%)",
                  }}
                >
                  Request A Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
