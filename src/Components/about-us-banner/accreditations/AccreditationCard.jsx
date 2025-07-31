import * as React from "react";

export function AccreditationCard({ imageUrl, imageClass, containerClass }) {
  return (
    <div className="flex flex-col grow shrink self-stretch my-auto rounded-none w-full min-w-0">
      <div className="flex flex-col justify-center items-center h-full">
        <img
          loading="lazy"
          src={imageUrl}
          alt="Accreditation logo"
          className="object-contain w-full h-auto max-h-[80px]"
        />
      </div>
    </div>
  );
}
