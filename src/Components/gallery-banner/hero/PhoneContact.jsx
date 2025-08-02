import * as React from "react";

export function PhoneContact() {
  return (
    <div
      className="
        flex items-center justify-center gap-4 self-center mt-7
        w-[256px] h-[73px] max-w-full 
        p-2.5 border-2 border-sky-500 border-solid rounded-[50px]
        max-sm:w-full max-sm:h-auto  max-sm:gap-2
      "
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/f3c11f34412cd716ca7ef7660bcb0b36924aea0c28228c54d728ae6f3c656f58?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
        alt="Phone icon"
        className="object-contain w-9 rounded-[10px] aspect-[1.03]"
      />
      <div className="flex flex-col text-center sm:text-left">
        <div className="text-[16px] font-medium leading-none text-[#9D9797]">
          free consultation
        </div>
        <a
          href="tel:07856750427"
          className="text-[20px] font-semibold text-[#01B8FF] mt-1"
          aria-label="Call for free consultation"
        >
          07856750427
        </a>
      </div>
    </div>
  );
}
