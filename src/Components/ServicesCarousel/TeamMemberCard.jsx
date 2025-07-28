import React from "react";
import Button from "./Button";

function TeamMemberCard({ image, name,description,}) {
  return (
    <div className="flex gap-2.5 items-center px-4 py-3.5 rounded-[20px] border border-solid border-zinc-400 w-[394px] h-[550px] max-md:w-full max-md:h-auto max-sm:flex-col max-sm:items-start">
      <div className="flex flex-col self-stretch pt-3 my-auto bg-white rounded-xl w-[362px] h-[500px] max-md:w-full max-md:h-auto">
        <img
          loading="lazy"
          src={image}
          alt={`${name}'s profile`}
          className="object-contain px-2.5 w-[400px] h-[178px] rounded-[10px] max-md:w-full max-md:h-auto"
        />

        <div className="flex relative flex-col items-center px-6 py-4 w-full rounded-none">
          <div className="relative text-[22px] font-bold text-[#001A33] font-andika z-10 text-center max-md:text-[24px] max-sm:text-[20px]">
            {name}
          </div>
          <div className="relative self-stretch mt-3 text-[18px] font-medium leading-8 text-center text-[#848484] font-lato z-10 max-md:text-[16px] max-sm:text-[14px] max-sm:leading-6 w-[330px] h-[84px]">
            {description}
          </div>

          <div className="flex relative justify-center items-center mt-9 w-full z-10">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;

{/* <div className="flex relative gap-6 justify-center items-center mt-1 w-full max-w-[278px] mb-3">
  <div className="flex gap-4 items-start self-stretch my-auto mt-9">
    <Button />
  </div>
</div> */}
