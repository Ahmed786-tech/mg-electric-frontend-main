import React from "react";

export function GalleryRow({ leftSrc, rightSrc, leftAlt, rightAlt, isFirst }) {
  return (
    <div
      className={`w-full rounded-3xl ${
        !isFirst ? "mt-6" : ""
      } max-md:mt-4 max-sm:mt-3`}
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-4">
        {/* Left Image */}
        <div className="flex flex-col w-6/12 max-md:w-full">
          <img
            loading="lazy"
            src={leftSrc}
            alt={leftAlt}
            className="object-cover w-full rounded-3xl aspect-[1.58] max-md:aspect-[1.4] max-sm:aspect-square"
          />
        </div>

        {/* Right Image */}
        <div className="flex flex-col w-6/12 max-md:w-full">
          <img
            loading="lazy"
            src={rightSrc}
            alt={rightAlt}
            className="object-cover w-full rounded-3xl aspect-[1.58] max-md:aspect-[1.4] max-sm:aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
