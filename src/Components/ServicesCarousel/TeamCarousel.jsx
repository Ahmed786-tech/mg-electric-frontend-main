import React, { useState, useEffect } from "react";
import TeamMemberCard from "./TeamMemberCard";
import CarouselControls from "./CarouselControls";
import { teamData } from "./teamData";
import bg from "@/assets/images/mainSquaresBg.png";

function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    if (window.innerWidth < 768) setSlidesToShow(1);
    else if (window.innerWidth < 1024) setSlidesToShow(2);
    else setSlidesToShow(3);
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const totalSlides = teamData.length;
  const maxIndex = totalSlides - slidesToShow; // max allowed index

  const paginate = (direction) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = 0;
    else if (newIndex > maxIndex) newIndex = maxIndex;
    setCurrentIndex(newIndex);
  };

  const cardWidthPercent = 100 / slidesToShow;

  return (
    <section className="w-full py-10 md:py-12">
      <div className="flex flex-col items-center py-8 overflow-hidden px-4 sm:px-6 md:px-8 mx-auto max-w-[1300px] relative">
        <div className="absolute hidden md:block md:w-[700px] opacity-30 z-10">
          <img
            src={bg}
            alt="Decorative oval"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <p className="font-normal text-[20px] text-[#01B8FF] mb-3 font-andika">
          Our Services
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center font-andika">
          Premium electrical services in Surrey
        </h1>

        <div className="relative w-full flex flex-col items-center z-30">
          <div className="my-7 w-full max-w-[900px]">
            <CarouselControls
              onPrevious={() => paginate(-1)}
              onNext={() => paginate(1)}
              currentIndex={currentIndex}
              totalSlides={maxIndex + 1}
              goToSlide={(index) => setCurrentIndex(index)}
            />
          </div>

          {/* Carousel viewport */}
          <div
            className="relative w-full overflow-hidden"
            style={{ height: "600px" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(100 / slidesToShow) * totalSlides}%`,
                transform: `translateX(-${(100 / totalSlides) * currentIndex}%)`,
              }}
            >
              {teamData.map((member, idx) => (
                <div
                  key={idx}
                  className="px-2 box-border w-full flex justify-center"
                >
                  <TeamMemberCard {...member} />
                </div>
              ))}
            </div>
          </div>

          <button className="border-2 text-[#01B8FF] border-[#01B8FF] rounded-lg py-3 px-20 font-medium mt-10">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}

export default TeamCarousel;
