import { GalleryRow } from "./GalleryRow";
import { ViewMoreButton } from "./ViewMoreButton";
import IsolationMode1 from "@/assets/images/IsolationMode1.png";
import isolationMode2 from "@/assets/images/isolationVector2.png";

import leftVector from "@/assets/images/leftVector.png";
import rightBgDots from "@/assets/images/rightSideDots.png";
import LeftDots from "@/assets/images/Leftdots.png";

const galleryImages = [
  {
    id: 1,
    leftSrc:
      "/images/IMG_0037.jpg",
    rightSrc:
      "/images/IMG_0175.jpg",
    leftAlt: "Gallery image 1",
    rightAlt: "Gallery image 2",
  },
  {
    id: 2,
    leftSrc:
      "/images/IMG_0207.jpg",
    rightSrc:
      "/images/IMG_0217.jpg",
    leftAlt: "Gallery image 3",
    rightAlt: "Gallery image 4",
  },
  {
    id: 3,
    leftSrc:
      "/images/IMG_0327.jpg",
    rightSrc:
      "/images/IMG_0364.jpg",
    leftAlt: "Gallery image 5",
    rightAlt: "Gallery image 6",
  },
  {
    id: 4,
    leftSrc:
      "/images/IMG_0371.jpg",
    rightSrc:
      "/images/IMG_0584.jpg",
    leftAlt: "Gallery image 7",
    rightAlt: "Gallery image 8",
  },
  {
    id: 5,
    leftSrc:
      "/images/IMG_1511.JPG",
    rightSrc:
      "/images/IMG_0371.jpg",
    leftAlt: "Gallery image 9",
    rightAlt: "Gallery image 10",
  },
  {
    id: 6,
    leftSrc:
      "/images/IMG_2502.JPG",
    rightSrc:
      "/images/IMG_5298.jpg",
    leftAlt: "Gallery image 11",
    rightAlt: "Gallery image 12",
  },
  {
    id: 7,
    leftSrc:
      "/images/IMG_7752.jpg",
    rightSrc:
      "/images/IMG_0175.jpg",
    leftAlt: "Gallery image 13",
    rightAlt: "Gallery image 14",
  },
];

export function ImageGallery() {
  return (
    <section className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-12 relative z-10">
      <div className="hidden md:block absolute  bottom-[220px] right-0 transform -translate-y-1/4 z-0 ">
        <div className=" md:w-[450px] ">
          <img src={rightBgDots} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute bottom-[1100px] left-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[440px] ">
          <img src={leftVector} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute w-[150px] md:w-[250px] md:top-[600px] top-[400px] right-0 transform  -translate-y-1/2 z-0">
        <img
          src={IsolationMode1}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div className=" absolute w-[200px] bottom-[750px] left-0 transform  -translate-y-1/4 z-10">
        <img
          src={isolationMode2}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div className=" absolute w-[70px] bottom-[1160px] left-4 transform  -translate-y-1/4 z-10">
        <img
          src={LeftDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>

      <div className="max-w-[1244px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col w-full">
          {galleryImages.map((row, index) => (
            <GalleryRow
              key={row.id}
              leftSrc={row.leftSrc}
              rightSrc={row.rightSrc}
              leftAlt={row.leftAlt}
              rightAlt={row.rightAlt}
              isFirst={index === 0}
            />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ViewMoreButton />
        </div>
      </div>
    </section>
  );
}
