import * as React from "react";

export function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 w-full max-w-full">
      {/* Icon */}
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-10 h-10 mx-auto sm:mx-0"
      />

      {/* Text Content */}
      <div className="flex flex-col rounded-none min-w-[240px] w-[309px] text-center sm:text-left mx-auto sm:mx-0">
        <div className="text-lg font-bold text-white font-andika">{title}</div>
        <div className="mt-1 text-sm font-medium leading-snug text-stone-300">
          {description}
        </div>
      </div>
    </div>
  );
}
