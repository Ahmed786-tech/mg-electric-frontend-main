import * as React from "react";
import { AccreditationCard } from "./AccreditationCard";
import bg from "../../../assets/images/aboutus-banner-bg.png";

const accreditations = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/5fa1f088126bd3201b7b885bf7600f154284487ee1e0d979c0244ee15d57cbd7?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    imageClass: "aspect-[3.83] w-[199px] h-[52px]",
    containerClass: "w-[204px]",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/2ccfd2a602d33986971d1623b07541203ebfb73e89dd96b426dc5a13195c88cf?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    imageClass: "aspect-[2.75] w-[147px] h-[52px]",
    containerClass: "w-[157px]",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/3c1bea260bbc1d4d387855641294e38e339e66544b74bc2213f32a542dcbc2a0?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    imageClass: "rounded-none aspect-[2.72] w-[147px] h-[52px]",
    containerClass: "w-[157px]",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/489f7bbe5deac3e92e84de3c963d79bd92b6838a0aae2af862bfb743a829e0b0?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    imageClass: "rounded-none w-[52px] h-[52px]",
    containerClass: "w-[127px]",
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/cd8fb0090d0b5edc66016002a1ca9a774a94cd0707116a3dac84b7ba7f9126c6?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    imageClass: "aspect-[4.5] w-[216px] h-[52px]",
    containerClass: "min-w-[240px] w-[216px]",
  },
];

export function AccreditationsSection({ Background }) {
  return (
    <section className="flex flex-col justify-center w-full mt-8 pt-9 pb-16 relative z-10">
      <div
        style={{ boxShadow: "0px 7px 4px 0px rgba(16, 89, 147, 0.7)" }}
        className="relative flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 shadow-sm min-h-[328px] w-full max-w-[1300px] mx-auto overflow-hidden rounded-3xl"
      >
        {/* Background Overlay */}
        <img
          loading="lazy"
          src={bg}
          alt="background"
          className="object-cover absolute inset-0 w-full h-full z-0"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center w-full">
          {/* Heading */}
          <div className="text-center mb-8">
            <p className="text-[20px] text-[#01B8FF] font-normal font-andika">
              Certified Expertise You Can Rely On
            </p>
            <h2 className="text-[40px] font-andika font-bold text-white leading-snug max-md:text-[28px]">
              Accreditations
            </h2>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 w-full">
            {accreditations.map((accreditation, index) => (
              <AccreditationCard key={index} {...accreditation} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
