"use client";
import Image1 from "../assets/images/Img28.png";
import Image2 from "../assets/images/Img29.png";
import Image3 from "../assets/images/Img30.png";
import Image4 from "../assets/images/Img31.png";
import Image5 from "../assets/images/Img32.png";
import Image6 from "../assets/images/Img33.png";
import ViewMoreButton from "./ServicesCarousel/Button";
import isolationMode2 from "@/assets/images/isolationVector2.png";

const galleryImages = [Image1, Image2, Image3, Image4, Image5, Image6];

function OurGallery() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 md:px-10 lg:px-20 ">
      <div className=" absolute w-[200px] mt-[650px] left-0 transform  -translate-y-1/4 z-0">
        <img
          src={isolationMode2}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <p className="text-[#01B8FF] text-[18px] sm:text-[20px] font-normal font-andika mb-2">
          Gallery
        </p>
        <h2 className="text-white text-[32px] sm:text-[36px] md:text-[40px] font-bold font-andika mb-12">
          Our Gallery
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 justify-items-center">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[20px] w-full max-w-[401px]"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-[240px] sm:h-[280px] md:h-[342px] object-cover rounded-[20px]"
              />
            </div>
          ))}
        </div>

        {/* View More Button
        <div className="flex justify-center">
          <ViewMoreButton />
        </div> */}
      </div>
    </section>
  );
}

export default OurGallery;
