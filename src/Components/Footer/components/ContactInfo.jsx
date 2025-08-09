import * as React from "react";

export function ContactInfo() {
  return (
    <div className="flex flex-col self-start font-bold">
      <div className="self-start text-2xl text-center text-white">
        Contact Us
      </div>
      <div className="flex flex-col items-start mt-6 w-full text-base leading-loose text-white">
        <div className="flex gap-2.5 items-center whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/fc8b2f775f54d0e0aea7b33d46f87fa7286f59e30fc3c8dbfea42b77a78d0940?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.25]"
            alt="Email icon"
          />
          <a
            href="mailto:mgelectrics@hotmail.co.uk"
            className="self-stretch my-auto hover:text-gray-300 focus:text-gray-300 transition-colors"
            tabIndex="0"
          >
            mgelectrics@hotmail.co.uk
          </a>
        </div>
        <div className="flex gap-2.5 items-center mt-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/0beba3cd45aa493d4333bddde96e57daafcf5582a47697c17c23d24c9441945d?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.74]"
            alt="Phone icon"
          />
          <a
            href="tel:07711316442"
            className="self-stretch my-auto hover:text-gray-300 focus:text-gray-300 transition-colors"
            tabIndex="0"
          >
            07711 316442
          </a>
        </div>
        <div className="flex gap-2.5 items-center self-stretch mt-7 w-full leading-7">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/9aaddb4f4d64006e3a4b65d4b443e5cfd25ad20e5306ed7397eaad1d46cc3c16?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.78] w-[18px]"
            alt="Location icon"
          />
          <address className="self-stretch my-auto w-[262px] not-italic">
            59 Great <br /> Tattenhams,Epsom,Surrey, KT18 5RE
          </address>
        </div>
      </div>
    </div>
  );
}
