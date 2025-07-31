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
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/e88474c13aa9954ec3060495bf446857ec14ef80e58adfab2cb03f8927837286?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    rightSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/f4b8138528c161b0a4d3fc4c97f10805ee7335ed9890163ee953f9e95724d94d?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    leftAlt: "Gallery image 1",
    rightAlt: "Gallery image 2",
  },
  {
    id: 2,
    leftSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/a6ded1a42b01612385f0d2c972307c36ec0fd4032883ee9f69683288ace3e194?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    rightSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/d9497926adcda57d8eb971612628f3cdd3267ba499e5dd01d286c4df79e86aab?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    leftAlt: "Gallery image 3",
    rightAlt: "Gallery image 4",
  },
  {
    id: 3,
    leftSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/bff60fbb2c719466b9d64a993385113694f2540cb9d7b07b095c51911d37889e?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    rightSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/2e0ba3953e8448f123ddaa4f10c2c8f335fcec3a8bcdafd01d35bf14a3411635?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    leftAlt: "Gallery image 5",
    rightAlt: "Gallery image 6",
  },
  {
    id: 4,
    leftSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/e8a5c55fc70b81c5eebda5697cf4566654456afc91fedbb14615d842b5ddf49f?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    rightSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/c45bba8a16da9372dc255d3812e58b1880ac843623728512de468e7d9b08c86b?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    leftAlt: "Gallery image 7",
    rightAlt: "Gallery image 8",
  },
  {
    id: 5,
    leftSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/861b52c33a0391b221f15650ae9377d9590d29d045c5faee2af26a46c62954d7?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    rightSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/77cde2e8ac69e49857b00ff7cd2658345a751c6e7974c15302f868a861298b18?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    leftAlt: "Gallery image 9",
    rightAlt: "Gallery image 10",
  },
  {
    id: 6,
    leftSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/8eca8d1fb30f7ca3dae5fa40a7dfe0d267cba7092cb025516a245fe9db9e3c1c?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    rightSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/7d2ecf4b049654a5cf439ac21e4dad94993461540ec71ae317d5a94e7a569ec8?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    leftAlt: "Gallery image 11",
    rightAlt: "Gallery image 12",
  },
  {
    id: 7,
    leftSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/2aca6e47b88e7adcb7f384818aec23b76b1ea2bda945fd2c1dd1d5437401f174?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
    rightSrc:
      "https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/0babf7104f37cc791cd4f20372d5269fa05a82569bc23c6b349bab830351b459?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&",
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
      <div className="hidden md:block absolute bottom-[1100px] left-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[440px] ">
          <img src={leftVector} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute w-[250px] top-[600px] right-0 transform  -translate-y-1/2 z-10">
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
