import * as React from "react";

export function FormInput({
  label,
  type = "text",
  placeholder,
  className = "",
}) {
  const inputId = `${label.toLowerCase().replace(/\s/g, "")}-input`;

  return (
    <div
      className={`flex flex-col py-1 mt-4 w-full tracking-normal ${className}`}
    >
      <label
        htmlFor={inputId}
        className="text-[#7A7878] font-bold leading-7 font-andika"
      >
        {label}
      </label>

      {type === "textarea" ? (
        <textarea
          id={inputId}
          placeholder={placeholder}
          className="px-5 pt-3 pb-16 mt-2 rounded-[8px] border border-[#C8C8C8] text-[#9D9797] text-[15px] font-normal font-poppins bg-white w-full max-md:text-sm max-md:px-4"
          aria-label={label}
        />
      ) : (
        <input
          type={type}
          id={inputId}
          placeholder={placeholder}
          className="px-5 py-3 mt-2 rounded-lg border border-stone-300 text-stone-400 bg-white w-full max-md:text-sm max-md:px-4"
          aria-label={label}
        />
      )}
    </div>
  );
}
