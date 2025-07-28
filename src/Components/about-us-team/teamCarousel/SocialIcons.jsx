import React from "react";

function SocialIcons({ icons }) {
  return (
    <div className="flex justify-center items-center mt-6 w-full max-w-[278px] mx-auto sm:mx-0">
      <div className="flex gap-4 items-center flex-wrap justify-center sm:justify-start w-full">
        {icons.map((icon) => (
          <button
            key={icon.id}
            className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full"
            aria-label={`${icon.platform} social link`}
          >
            <img
              loading="lazy"
              src={icon.src}
              alt={`${icon.platform} icon`}
              className="object-contain w-9 h-9 rounded-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;
