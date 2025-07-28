import * as React from "react";

export default function ViewMoreButton() {
  return (
    <button
      className="flex flex-col text-[18px] font-medium leading-loose text-white 
                 w-[246px] h-[60px] rounded-[50px] 
                 max-md:w-[200px] max-md:h-[52px] max-md:text-[16px] max-sm:w-[180px] max-sm:h-[48px] max-sm:text-[15px]"
      tabIndex={0}
      aria-label="View more content"
    >
      <div
        className="px-16 py-3.5 w-full bg-[linear-gradient(180deg,#01B8FF_0%,#3E99BC_100%)] 
                   rounded-[50px] 
                   max-md:px-10 max-md:py-2.5 
                   max-sm:px-8 max-sm:py-2"
      >
        View More
      </div>
    </button>
  );
}
