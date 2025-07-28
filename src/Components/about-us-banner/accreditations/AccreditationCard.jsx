import * as React from "react";

export function AccreditationCard({ imageUrl, imageClass, containerClass }) {
  return (
    <div
      className={`flex flex-col grow shrink self-stretch my-auto rounded-none ${containerClass}`}
    >
      <div className="flex flex-col justify-center px-5 py-3.5 items-center bg-white rounded-lg shadow-sm max-md:px-5">
        <img
          loading="lazy"
          src={imageUrl}
          alt=""
          className={`object-contain ${imageClass}`}
        />
      </div>
    </div>
  );
}
