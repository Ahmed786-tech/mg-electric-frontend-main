import * as React from "react";

function TestimonialCard({
  title = "Testimonee Name",
  description = "Testimonial description",
  imageUrl = "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/d932404c12a4b449fe2e1681e1c19642a2a10074e541e80ca69fdda2258a258e?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
  imageAlt = "Testimonial decoration",
}) {
  return (
    <div className="flex w-full justify-center px-4 md:px-0">
      <div className="relative flex flex-col pb-6 w-full max-w-[420px] h-[180px] border border-solid shadow-sm bg-slate-900 border-white border-opacity-30 rounded-[25px]">
        {/* Title */}
        <div className="flex absolute top-9 left-1/2 z-0 justify-center items-center px-3 py-4 text-xs font-extrabold text-sky-500 bg-transparent rounded-3xl transform -translate-x-1/2 h-[59px]">
          <div className="text-center">{title}</div>
        </div>

        {/* Description */}
        <div className="px-6 pt-24 pb-8 w-full text-sm font-light leading-6 text-center text-white max-md:px-4 max-md:pt-20">
          {description}
        </div>

        {/* Decorative Image */}
        <img
          loading="lazy"
          src={imageUrl}
          alt={imageAlt}
          className="absolute ml-12 mt-[165px] w-10 aspect-[1.29] object-contain max-md:ml-4 max-md:mt-[150px]"
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
