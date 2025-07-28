import * as React from "react";

export function ImageGrid({ images }) {
  return (
    <div className="mt-9 w-full max-w-[605px] rounded-3xl">
      <div className="flex flex-wrap gap-5 justify-between md:flex-nowrap">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 flex justify-center md:justify-start"
          >
            <img
              loading="lazy"
              src={src}
              alt=""
              className="rounded-[20px] object-contain w-full max-w-[295px] h-[205px] aspect-[1.6]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
