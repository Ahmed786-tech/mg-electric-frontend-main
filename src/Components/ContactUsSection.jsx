"use client";
import React, { useState } from "react";
import contactImage from "../../src/assets/images/Contactimg.png";
import { ConsultationCard } from "./gallery-banner/hero/ConsultationCard";
import ReCAPTCHA from "react-google-recaptcha";
import contactRightVector from "@/assets/images/contactUsRightVector.png";
import { useLocation } from "react-router-dom";

export default function ContactUsSection() {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const location = useLocation();
  const showRightDots = location.pathname === "/services/emergency-lighting";

  const handleRecaptcha = (value) => {
    if (value) {
      setRecaptchaVerified(true);
    }
  };

  return (
    <section className="px-6 pb-20 text-white  relative z-10">
       {showRightDots && (
         <div className=" absolute md:mt-[250px] mt-[650px] top-0 right-0  z-0 ">
           <div className="w-[200px] md:w-[500px] ">
             <img src={contactRightVector} alt="Decorative oval" />
           </div>
         </div>
       )}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#01B8FF] text-[20px] font-normal font-andika">
            Get In Touch
          </p>
          <h2 className="text-[32px] md:text-5xl font-bold mb-6 font-andika">
            Contact Us
          </h2>
          <p className="text-[14px] text-white max-w-2xl mx-auto font-inter font-normal leading-[30px]">
            Let us help you transform your facility with our expert electrical
            installation and upgrade services.
            <br />
            Contact us today for a consultation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form className="bg-white rounded-[20px] w-full max-w-[607px] mx-auto p-6 sm:p-8 space-y-5 shadow-lg mt-3">
            <div>
              <label className="block text-[#7A7878] font-bold font-andika text-[15px] mb-1 mt-6">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full border border-[#C8C8C8] rounded-[8px] px-4 py-3 text-[#9D9797] text-[15px] font-normal font-poppins"
              />
            </div>

            <div>
              <label className="block text-[#7A7878] font-bold font-andika text-[15px] mb-1">
                Phone
              </label>
              <input
                type="text"
                placeholder="Enter Phone"
                className="w-full border border-[#C8C8C8] rounded-md px-4 py-3 text-[#9D9797] text-[15px] font-normal font-poppins"
              />
            </div>

            <div>
              <label className="block text-[#7A7878] font-bold font-andika text-[15px] mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full border border-[#C8C8C8] rounded-md px-4 py-3 text-[#9D9797] text-[15px] font-normal font-poppins"
              />
            </div>

            <div>
              <label className="block text-[#7A7878] font-bold font-andika text-[15px] mb-1">
                Message
              </label>
              <textarea
                placeholder="Type Your Message"
                className="w-full border border-[#C8C8C8] rounded-md px-4 py-3 h-24 text-[#9D9797] text-[15px] font-normal font-poppins"
              />
            </div>

            <div className="pt-2">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleRecaptcha}
              />
            </div>

            <button
              type="submit"
              className={`w-full border-2 border-[#01B8FF] rounded-full py-3 font-bold flex justify-center items-center gap-2 transition ${
                recaptchaVerified
                  ? "bg-[#01B8FF] text-white hover:opacity-90"
                  : "text-[#01B8FF] opacity-50 cursor-not-allowed"
              }`}
              disabled={!recaptchaVerified}
            >
              Get In Touch
              <span className="ml-1 text-[18px] font-normal">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/43db59f21c958a0cb6f84d536a7b69daa3033a05fb15fe7b7b1e999d8d8e5d2b?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
                  alt=""
                  className="object-contain w-[16px] aspect-square"
                />
              </span>
            </button>
          </form>

          {/* Right Side - Image and Card */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <div className="rounded-[16px] overflow-hidden shadow-lg w-full max-w-[595px] h-auto lg:h-[460px] mx-auto">
              <img
                src={contactImage}
                alt="Contact handshake"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full max-w-[589px] mx-auto lg:mx-0">
              <ConsultationCard width="100%" height="221px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
