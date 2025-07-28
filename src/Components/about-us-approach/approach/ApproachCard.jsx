import * as React from "react";

export function ApproachCard({ icon, title, description, className }) {
  return (
    <div
      className={`flex flex-wrap sm:flex-nowrap gap-4 items-start w-full ${className}`}
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-10 h-10"
      />
      <div
        className="
          flex flex-col 
          w-full 
          sm:w-[calc(100%-2.5rem)] 
          md:min-w-[240px] 
          md:w-[468px] 
          max-md:w-full
        "
      >
        <div className="text-[18px] font-bold text-white font-andika">
          {title}
        </div>
        <div className="mt-1 text-[14px] font-medium leading-none text-[#D2C4C4]">
          {description}
        </div>
      </div>
    </div>
  );
}
