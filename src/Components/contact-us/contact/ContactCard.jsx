import * as React from "react";

export function ContactCard({
  icon,
  title,
  description,
  primaryInfo,
  secondaryInfo,
  iconClass,
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start p-4 sm:p-5 w-full rounded-xl bg-[#002443] shadow-[0px_7px_4px_0px_rgba(16,89,147,0.70)]">
      {/* Icon */}
      <div className="flex justify-center items-start sm:items-center w-12 sm:w-auto">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className={`object-contain ${iconClass} mt-2 sm:mt-5`}
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col text-xs text-sky-500 w-full">
        <div className="text-[18px] sm:text-[20px] text-[#01B8FF] font-bold tracking-wide">
          {title}
        </div>

        <div className="mt-2 text-white leading-loose text-[12px] sm:text-sm font-normal whitespace-pre-line">
          {description}
        </div>

        <div className="mt-2 text-white text-sm">{primaryInfo}</div>

        {secondaryInfo && (
          <div className="mt-2 text-white text-sm">
            <span className="font-medium text-sky-500">{secondaryInfo.prefix}</span>
            <span className="text-sky-500">:</span> {secondaryInfo.value}
          </div>
        )}
      </div>
    </div>
  );
}
