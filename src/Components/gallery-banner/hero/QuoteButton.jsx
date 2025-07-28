import * as React from "react";

export function QuoteButton() {
  return (
    <button
      className="
        flex items-center justify-center
        px-16 py-3.5 mt-5 h-[56px]
        bg-[linear-gradient(180deg,#01B8FF_0%,#3E99BC_100%)]
        text-white text-lg font-medium
        rounded-[50px]
        max-md:px-6 max-sm:px-4 max-sm:text-base max-sm:h-auto
      "
      aria-label="Request a quote"
    >
      Request A Quote
    </button>
  );
}
