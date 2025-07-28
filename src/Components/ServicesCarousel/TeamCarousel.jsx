import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";
import CarouselControls from "./CarouselControls";
import { teamData } from "./teamData";
import bg from "@/assets/images/Bg6.png";

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
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + teamData.length) % teamData.length
    );
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
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-10 md:py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center py-8 overflow-hidden px-4 sm:px-6 md:px-8 mx-auto max-w-[1350px]">
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
          <div className="h-[600px] w-full flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <div className="flex gap-4 justify-center px-2 sm:px-4 w-full">
                {getVisibleSlides().map((slideIndex) => (
                  <motion.div
                    key={slideIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                      const swipe = swipePower(offset.x, velocity.x);
                      if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                      } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                      }
                    }}
                    className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
                  >
                    <TeamMemberCard {...teamData[slideIndex]} />
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCarousel;
