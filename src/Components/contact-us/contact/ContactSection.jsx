import * as React from "react";
import { ContactCard } from "./ContactCard";
import { contactItems } from "./ContactData";

export function ContactSection() {
  return (
    <section className="py-10 md:py-12">
      <div className="mx-auto w-full max-w-[1230px] px-4 md:px-0 mb-[150px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Contact Cards */}
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="flex flex-col gap-9 mt-4">
              {contactItems.map((item, index) => (
                <ContactCard key={index} {...item} />
              ))}
            </div>

            {/* Request a Quote Button */}
            <div className="flex justify-center items-center mt-8 w-full h-[118px] px-4 md:px-16 bg-white rounded-[20px] shadow-sm">
              <button
                className="flex items-center justify-center gap-4 w-[260px] min-h-[62px] border-2 border-[#01B8FF] border-solid rounded-[50px] text-[#01B8FF] font-poppins text-base md:text-lg"
                tabIndex="0"
                aria-label="Request A Quote"
              >
                Request A Quote
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex flex-col w-full lg:w-1/2">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/eb7e2356bc3f773e8275227b82d2fb5ff3f7212b6109fd7218292a850ea287d6?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
              alt="Contact section illustration"
              className="object-contain w-full h-auto max-h-[670px] rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
