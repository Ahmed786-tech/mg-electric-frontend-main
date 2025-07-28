import * as React from "react";
import Logo1 from '@/assets/svgs/logo1.svg';

export function CompanyInfo() {
  return (
    <div className="flex flex-col self-start text-white">
      <div className="flex flex-col max-w-full text-3xl font-bold uppercase whitespace-nowrap w-[180px]">
        <img
          loading="lazy"
          src={Logo1}
          className="object-contain w-[175px] h-[121px] max-md:mr-1.5"
          alt="MG Electronics Logo"
        />
      </div>
      <div className="flex-1 shrink gap-2.5 mt-6 w-[332px] h-[110px] text-[18px] font-normal leading-8">
        MG Electrics Ltd, one of Surrey's most <br /> trusted and reliable electrical <br />
        companies
      </div>
    </div>
  );
}
