import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import CarouselControls from "./CarouselControls";
import { teamData } from "./teamData";
import bg from "@/assets/images/mainSquaresBg.png";

function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      position: "absolute",
    }),
  };

  const paginate = (newDirection) => {
  const newIndex = currentIndex + newDirection * slidesToShow;

  // Prevent overflow or underflow based on visible group
  if (newIndex < 0 || newIndex + slidesToShow > teamData.length) return;

  setDirection(newDirection);
  setCurrentIndex(newIndex);
};

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (currentIndex + i) % teamData.length;
      slides.push(slideIndex);
    }
    return slides;
  };

  return (
    <section className="w-full py-10 md:py-12">
      <div className="flex flex-col items-center py-8 overflow-hidden px-4 sm:px-6 md:px-8 mx-auto max-w-[1350px]">
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

        <div className="relative w-full flex flex-col items-center">
          <div className="my-7">
            <CarouselControls
              onPrevious={() => paginate(-1)}
              onNext={() => paginate(1)}
              currentIndex={currentIndex}
              totalSlides={teamData.length}
            />
          </div>

          {/* Slider section */}
          <div className="relative w-full overflow-hidden h-[600px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="flex gap-4 justify-center px-2 sm:px-4 w-full"
              >
                {getVisibleSlides().map((slideIndex) => (
                  <div
                    key={slideIndex}
                    className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
                  >
                    <TeamMemberCard {...teamData[slideIndex]} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
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
