import React from "react";
import PageTitle from "../Components/PageTitle";
import HeroImage from "../assets/images/IMG_0371.jpg";
import { Banner } from "../Components/gallery-banner/hero/Banner";
import { ImageGallery } from "../Components/gallery-images/gallery/ImageGallery";
import aboutRightVecotr from "@/assets/images/aboutRightVector.png";
import leftVector from "@/assets/images/leftVector.png";

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
      <div className="hidden md:block absolute mt-[350px] left-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[370px] ">
          <img src={bgDots} alt="Decorative oval" />
        </div>
      </div>
      <div className="hidden md:block absolute mt-[-40px] right-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[500px] ">
          <img src={aboutRightVecotr} alt="Decorative oval" />
        </div>
      </div>
      <ImageGallery />
      <Banner />
      <div className="hidden md:block absolute mt-[-40px] left-0 transform -translate-y-1/2 z-0 ">
        <div className=" md:w-[440px] ">
          <img src={leftVector} alt="Decorative oval" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
