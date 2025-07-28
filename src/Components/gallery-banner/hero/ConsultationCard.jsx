import * as React from "react";
import { PhoneContact } from "./PhoneContact";

export function ConsultationCard({ width, height }) {
  return (
    <div className="flex flex-col self-stretch my-auto rounded-none min-w-[240px] w-full font-poppins">
      <div
        className={`
          flex flex-col items-center justify-center py-10 px-6 
          ${width} ${height} 
          bg-white rounded-[20px] shadow-sm 
          max-md:px-4 max-md:py-8
          w-full max-w-full
        `}
      >
        <div className="text-[16px] leading-7 text-center text-[#9D9797] font-normal w-[507px] max-w-full">
          For an experienced and reliable electrical engineer, call <br />
          or visit the
          <span className="font-extrabold text-[#01B8FF] text-[16px]"> Contact Page</span>{" "}
          today.
        </div>

        <PhoneContact />
      </div>
    </div>
  );
}
