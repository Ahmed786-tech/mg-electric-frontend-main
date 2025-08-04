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
  const [paginatedSlides, setPaginatedSlides] = useState([]);

  const chunkArray = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    const pages = Math.ceil(teamData.length / slidesToShow);
    const slides = chunkArray(teamData, slidesToShow);
    setPaginatedSlides(slides);

    // Reset currentIndex if out of bounds or data changes
    setCurrentIndex((prevIndex) => (prevIndex >= pages ? 0 : prevIndex));
  }, [slidesToShow]);

  useEffect(() => {
    console.log("Current index changed:", currentIndex);
  }, [currentIndex]);

  const totalPages = paginatedSlides.length;

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
    const newIndex = currentIndex + newDirection;
    console.log("Paginate clicked. New index:", newIndex);

    if (newIndex < 0) {
      setDirection(newDirection);
      setCurrentIndex(totalPages - 1);
    } else if (newIndex >= totalPages) {
      setDirection(newDirection);
      setCurrentIndex(0);
    } else {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  };

  const goToSlide = (pageIndex) => {
    if (pageIndex === currentIndex) return;
    setDirection(pageIndex > currentIndex ? 1 : -1);
    setCurrentIndex(pageIndex);
  };

  return (
    <section className="w-full py-10 md:py-12">
      <div className="flex flex-col items-center py-8 overflow-hidden px-4 sm:px-6 md:px-8 mx-auto max-w-[1300px]">
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
          <div className="my-7">
            <CarouselControls
              onPrevious={() => paginate(-1)}
              onNext={() => paginate(1)}
              currentIndex={currentIndex}
              totalSlides={totalPages}
              goToSlide={goToSlide}
            />
          </div>

          {/* Slider section */}
          <div className="relative w-full overflow-hidden h-[600px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`page-${currentIndex}`}
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
                {/* Safely render only if paginatedSlides[currentIndex] exists */}
                {paginatedSlides[currentIndex]?.map((slide, idx) => (
                  <div
                    key={idx}
                    className="w-full sm:w-1/2 lg:w-1/3 flex justify-center"
                  >
                    <TeamMemberCard {...slide} />
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
