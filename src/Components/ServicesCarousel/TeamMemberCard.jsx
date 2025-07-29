import React from "react";
import Button from "./Button";

function TeamMemberCard({ image, name, description }) {
  return (
    <div className="flex gap-2.5 items-stretch px-4 py-3.5 rounded-[20px] border border-solid border-zinc-400 w-[394px] max-md:w-full max-sm:flex-col max-sm:items-start">
      <div className="flex flex-col pt-3 my-auto bg-white rounded-xl w-[362px] max-md:w-full h-full">
        <img
          loading="lazy"
          src={image || "/placeholder.svg"}
          alt={`${name}'s profile`}
          className="object-contain px-2.5 w-full rounded-[10px] max-md:w-full"
        />
        <div className="flex relative flex-col items-center px-6 py-4 w-full rounded-none flex-1">
          <div className="relative text-[22px] font-bold text-[#001A33] font-andika z-10 text-center max-md:text-[24px] max-sm:text-[20px]">
            {name}
          </div>
          <div className="relative self-stretch mt-3 text-[18px] font-medium leading-8 text-center text-[#848484] font-lato z-10 max-md:text-[16px] max-sm:text-[14px] max-sm:leading-6 flex-1">
            {description}
          </div>
          <div className="flex relative justify-center items-center mt-4 w-full z-10">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;

{
  /* <div className="flex relative gap-6 justify-center items-center mt-1 w-full max-w-[278px] mb-3">
  <div className="flex gap-4 items-start self-stretch my-auto mt-9">
    <Button />
  </div>
</div> */
}
