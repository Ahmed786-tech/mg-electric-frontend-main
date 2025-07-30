"use client";
import React, { useState } from "react";
import contactImage from "../../src/assets/images/Contactimg.png";
import { ConsultationCard } from "./gallery-banner/hero/ConsultationCard";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleRecaptcha = (value) => {
    if (value) {
      setRecaptchaVerified(true);
    }
  };

  return (
    <section className="px-4 sm:px-6 pb-[100px] text-white pt-9 -mt-5 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Form and Image Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Form */}
          <form className="bg-white rounded-[20px] w-full max-w-full lg:w-[607px] p-6 sm:p-8 space-y-5 shadow-lg mt-3">
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

            {/* Google reCAPTCHA */}
            <div className="pt-2">
              <ReCAPTCHA
                sitekey="YOUR_RECAPTCHA_SITE_KEY"
                onChange={handleRecaptcha}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full border-2 border-[#01B8FF] rounded-full py-3 font-bold flex justify-center items-center gap-2 transition ${
                recaptchaVerified
                  ? "bg-[#01B8FF] text-white hover:opacity-90"
                  : "text-[#01B8FF] opacity-50 cursor-not-allowed"
              }`}
              disabled={!recaptchaVerified}
            >
              Get In Touch{" "}
              <span className="ml-1 text-[18px] font-normal">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/43db59f21c958a0cb6f84d536a7b69daa3033a05fb15fe7b7b1e999d8d8e5d2b?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
                  alt=""
                  className="object-contain shrink-0 aspect-square w-[16px]"
                />
              </span>
            </button>
          </form>

          {/* Right: Image & Contact Box */}
          <div className="space-y-6 w-full">
            <div className="rounded-[16px] overflow-hidden shadow-lg w-full max-w-full lg:w-[595px]">
              <img
                src={contactImage}
                alt="Contact handshake"
                className="w-full h-auto lg:h-[460px] object-cover"
              />
            </div>

            <div className="w-full max-w-full lg:w-[589px]">
              <ConsultationCard width="100%" height="221px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
