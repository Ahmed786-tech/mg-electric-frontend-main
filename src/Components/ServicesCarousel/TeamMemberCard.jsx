import React from "react";
import Button from "./Button";

function TeamMemberCard({ image, name, description }) {
  return (
    <div className="p-3 rounded-[20px] border border-solid border-zinc-400 max-md:w-full max-sm:grid-cols-1 h-full">
      <div className="flex flex-col pt-3 bg-white rounded-xl w-full h-full">
        <div className=" px-3">
          <img
            loading="lazy"
            src={image || "/placeholder.svg"}
            alt={`${name}'s profile`}
            className="h-[200px] w-full object-cover rounded-[10px]"
          />
        </div>
        <div className="flex relative flex-col items-center py-4 w-full rounded-none flex-1">
          <div className="relative text-[22px] font-bold px-6 text-[#001A33] font-andika z-10 text-center max-md:text-[24px] max-sm:text-[20px]">
            {name}
          </div>
          <div className="relative  px-3 mt-3 text-[16px] font-medium leading-1 text-center text-[#848484] font-lato z-10 max-md:text-[16px] max-sm:text-[14px] flex-1">
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
