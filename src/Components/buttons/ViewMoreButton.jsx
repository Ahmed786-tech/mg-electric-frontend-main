import * as React from "react";

export default function ViewMoreButton() {
  return (
    <button
      className="flex flex-col text-lg font-medium leading-loose text-white rounded-[50px] max-w-[346px] w-full sm:max-w-[300px] md:max-w-[346px]"
      tabIndex={0}
      aria-label="View more content"
    >
      <div className="px-10 py-3.5 w-full text-center bg-[linear-gradient(180deg,#01B8FF_0%,#3E99BC_100%)] rounded-[50px] text-base sm:text-lg md:text-lg">
        View More
      </div>
    </button>
  );
}
