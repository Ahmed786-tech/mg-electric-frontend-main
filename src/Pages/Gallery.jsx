import React from "react";
import PageTitle from "../Components/PageTitle";
import HeroImage from "../assets/images/IMG_0371.jpg";
import { Banner } from "../Components/gallery-banner/hero/Banner";
import { ImageGallery } from "../Components/gallery-images/gallery/ImageGallery";
import aboutRightVecotr from "@/assets/images/aboutRightVector.png";
import leftVector from "@/assets/images/leftVector.png";
import leftSquareVector from "@/assets/images/squareVector.png";

import bgDots from "@/assets/images/bgDots.png";
function Gallery() {
  return (
    <div className="">
      <PageTitle
        tag="Gallery"
        title="Our Projects Showcase"
        subtitle="Take a look at some of our recent electrical projects. From large scale commercial lighting projects to smaller residential works, each projects reflects the care, precision, and workmanship that goes into everything we do."
        imageSrc={HeroImage}
        imageAlt="Healthcare and Commercial Electrical Services"
      />
      <div className=" absolute md:mt-[350px] mt-[180px] left-0 transform -translate-y-1/2 z-0 ">
        <div className="w-[200px] md:w-[370px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <div className=" absolute mt-[-40px] right-0 transform -translate-y-1/2 z-0 ">
        <div className="w-[200px] md:w-[500px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <ImageGallery />
      <div className=" absolute mt-[-100px] left-0 transform -translate-y-1/2 z-0 opacity-30 ">
        <div className="w-[200px] md:w-[400px] ">
          <img src={leftSquareVector} alt="Decorative oval" />
        </div>
      </div>
      <Banner />
      <div className=" absolute md:mt-[-40px] mt-[0px] left-0 transform -translate-y-1/2 z-0 ">
        <div className="w-[300px] md:w-[440px] ">
          <img src={leftVector} alt="Decorative oval" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
