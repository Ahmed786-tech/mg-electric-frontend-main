import React from "react";
import Icon1 from "../assets/svgs/Icon23.svg";
import Icon2 from "../assets/svgs/Icon24.svg";
import Icon3 from "../assets/svgs/Icon25.svg";
import Icon4 from "../assets/svgs/Icon26.svg";

const steps = [
  {
    title: "Tell Us The Details",
    description:
      "Get in touch using whichever contact method suits you, and tell us about your project.",
    icon: Icon1,
  },
  {
    title: "Schedule An On-Site Visit",
    description:
      "We can arrange an on-site visit at a time that suits you, or book a Teams call to discuss your requirements virtually.",
    icon: Icon2,
  },
  {
    title: "We Provide A Quote",
    description:
      "We will then go over the details and provide you with a no obligation quote to have the work carried out.",
    icon: Icon3,
  },
  {
    title: "Receive A Start Date",
    description:
      "If you're satisfied with the quote, we will contact you to arrange a date for us to complete the work.",
    icon: Icon4,
  },
];

const OurProcess = () => {
  return (
    <section className="bg-cover bg-center text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <p className="text-[#01B8FF] text-[18px] sm:text-[20px] font-normal font-andika">
          Our Process
        </p>
        <h2 className="text-[30px] sm:text-[36px] md:text-[40px] font-bold mb-10 font-andika">
          Guiding You Through Every Step
        </h2>

        {/* Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center px-2 sm:px-4 relative ${
                index === 1 || index === 3 ? "mt-0 lg:mt-[100px]" : ""
              }`}
            >
              {/* Connecting Lines */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-full w-full h-20 hidden lg:block">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 200 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={
                        index === 0
                          ? "M10 20 Q100 20 190 80" // Line from step 1 to 2 (down)
                          : index === 1
                          ? "M10 80 Q100 80 190 20" // Line from step 2 to 3 (up)
                          : "M10 20 Q100 20 190 80" // Line from step 3 to 4 (down)
                      }
                      stroke="#01B8FF"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      fill="none"
                    />
                  </svg>
                </div>
              )}

              <div className="p-4 rounded-[20px] w-[100px] h-[100px] flex items-center justify-center mb-6 shadow-md bg-[linear-gradient(180deg,#01B8FF_0%,#3E99BC_100%)] relative z-20">
                <img
                  src={step.icon || "/placeholder.svg"}
                  alt={step.title}
                  className="w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
                />
              </div>

              <h3 className="text-white font-bold text-[18px] sm:text-[20px] mb-2 font-andika">
                {step.title}
              </h3>
              <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium max-w-[278px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
