import React from "react";
import SocialIcons from "./SocialIcons";

function TeamMemberCard({ image, name, position, description, socialIcons }) {
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
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/a8ad5cfc609dbfb6495b2f3c25c767b99d51158aee0049f0aff49add9b2da712?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
            alt="Profile background"
            className="object-cover absolute inset-0 size-full rounded-[10px] z-0"
          />
          <div className="relative text-[30px] font-bold text-[#001A33] font-andika z-10 text-center max-md:text-[24px] max-sm:text-[20px]">
            {name}
          </div>
          <div className="relative mt-1 font-bold text-[#01B8FF] text-[14px] font-andika z-10 text-center">
            {position}
          </div>
          <div className="relative self-stretch mt-3 text-[18px] font-medium leading-8 text-center text-[#848484] font-lato z-10 max-md:text-[16px] max-sm:text-[14px] max-sm:leading-6 flex-1">
            {description}
          </div>
          <div className="flex justify-center items-center mt-3 w-full z-10">
            <SocialIcons icons={socialIcons} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;
