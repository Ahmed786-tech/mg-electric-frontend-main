"use client";

import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CityScape from "../assets/images/Cityimg.png";
import bg1 from "../assets/images/HomeHeroFrame.png";
import LeftDots from "../assets/images/Leftdots.png";
import RightDots from "../assets/images/RightDots.png";

import IsolationMode from "../assets/images/Isolation_Mode_Left.png";

export default function ConsultationSection() {
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA");
      return;
    }
    alert("Form submitted successfully!");
  };

  return (
    <section className="bg-cover bg-center w-full pt-20 md:pt-28 pb-16 md:pb-20 relative z-10 overflow-hidden">
      <div className=" absolute w-[70px] right-4 top-[370px] z-10">
        <img
          src={RightDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
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

      <div className="hidden md:block absolute left-0 transform mt-4 -translate-y-1/5 z-10">
        <img
          src={IsolationMode}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      {/* Left Image - Absolute */}
      <div className=" absolute top-0 left-0 w-1/2 h-full z-0">
        <div
          className="absolute hidden md:block top-0 left-0 w-full h-full z-[-1]"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "contain",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            opacity: 0.2, // Adjust as needed
          }}
        ></div>
        <img
          src={CityScape}
          alt="Cityscape"
          className="w-[687px] h-[714px] object-cover rounded-b-[50px] mt-[222px] opacity-100"
        />
      </div>

      {/* Right Content */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 flex justify-center md:ml-[45%]">
        <div className="max-w-[700px] w-full space-y-6">
          {/* Heading */}
          <div className="text-white mb-6">
            <h2 className="text-[24px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-andika font-bold leading-relaxed lg:w-[640px]">
              Empowering Healthcare And Commercial Facilities With Reliable
              Electrical Solutions
            </h2>
            <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-normal font-andika mt-4 lg:w-[550px]">
              Safety, Compliance, And Optimal Performance, Guaranteed
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-white text-[#06142F] rounded-2xl px-4 sm:px-6 md:px-8 pt-4 pb-9 w-full lg:w-[650px]" style={{ boxShadow: "0px 7px 4px 0px rgba(16, 89, 147, 0.7)" }}>
            <p className="text-[18px] md:text-[20px] text-[#01B8FF] font-normal font-andika">
              Consultation
            </p>
            <h3 className="text-[22px] md:text-[25px] text-[#001A33] font-bold mb-6 font-andika">
              Book A Virtual Or In-Person Consultation
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Email & Phone */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                  <label className="block mb-1 text-[15px] font-bold text-[#7A7878] font-andika">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full border border-[#C8C8C8] rounded-[8px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01B8FF] text-[15px] font-normal font-poppins"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block mb-1 text-[15px] font-bold text-[#7A7878] font-andika">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone"
                    className="w-full border border-[#C8C8C8] rounded-[8px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01B8FF] text-[15px] font-normal font-poppins"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block mb-1 text-[15px] font-bold text-[#7A7878] font-andika">
                  Service
                </label>
                <input
                  type="text"
                  placeholder="Enter Service"
                  className="w-full border border-[#C8C8C8] rounded-[8px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01B8FF] text-[15px] font-normal font-poppins"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 text-[15px] font-bold text-[#7A7878] font-andika">
                  Message
                </label>
                <textarea
                  placeholder="Type Your Message"
                  rows={4}
                  className="w-full border border-[#C8C8C8] rounded-[8px] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#01B8FF] text-[15px] font-normal font-poppins"
                  required
                />
              </div>

              {/* reCAPTCHA */}
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="YOUR_REAL_SITE_KEY_HERE"
                className="mt-2"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[linear-gradient(180deg,#01B8FF_0%,#3E99BC_100%)] text-white font-normal text-[18px] py-3 rounded-[50px] flex items-center justify-center gap-2 mt-2 h-[64px]"
              >
                Request A Consultation
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/43db59f21c958a0cb6f84d536a7b69daa3033a05fb15fe7b7b1e999d8d8e5d2b?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square text-white w-[16px]"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
