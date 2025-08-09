import React, { useState, useEffect, useRef } from "react";
import TeamMemberCard from "./TeamMemberCard";
import RightDots from "@/assets/images/RightDots.png";
import leftArrow from "@/assets/svgs/Arrow 1.svg";
import rightArrow from "@/assets/svgs/Arrow 2.svg";
import IsolationMode1 from "@/assets/images/IsolationMode1.png";

import { teamData } from "./teamData";

function TeamCarousel() {
  const [itemsToShow, setItemsToShow] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef(null);
  const cardWidthRef = useRef(0);

  useEffect(() => {
    const updateItems = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsToShow(1);
      else if (width < 1024) setItemsToShow(2);
      else setItemsToShow(3);
      setCurrentIndex(0);
    };

    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  useEffect(() => {
    const firstCard = containerRef.current?.querySelector(".team-card");
    if (firstCard) {
      const style = getComputedStyle(firstCard);
      const marginRight = parseInt(style.marginRight || "0");
      cardWidthRef.current = firstCard.offsetWidth + marginRight;
    }
  }, [itemsToShow]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: currentIndex * cardWidthRef.current,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = cardWidthRef.current;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < teamData.length) {
        setCurrentIndex(newIndex);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentIndex, teamData.length]);

  const maxIndex = teamData.length - itemsToShow;

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const dotsCount = teamData.length;

  return (
    <section className="w-full bg-cover bg-center bg-no-repeat">
      <div className="absolute w-[70px] right-4 top-[370px] z-10">
        <img
          src={RightDots}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className=" absolute w-[120px] md:w-[250px] md:mt-[100px] mt-[50px] right-0 transform  -translate-y-1/2 z-10">
        <img
          src={IsolationMode1}
          alt="Decorative oval"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="flex flex-col items-center md:py-8 py-0 overflow-hidden px-4 sm:px-6 md:px-8 mx-auto max-w-[1350px]">
        <p className="font-normal text-[20px] text-[#01B8FF] mb-3 font-andika">
          Team
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center font-andika">
          Our Team Members
        </h1>
        <p className="mt-6 text-sm leading-8 text-center text-white w-full max-w-[882px] font-inter">
          Our experienced team of professionals is passionate about their work
          and dedicated to providing excellent service. We value our{" "}
          <br className="hidden sm:block" />
          employees and foster a positive and supportive work environment.
        </p>

        <div className="relative w-full flex flex-col items-center">
          {/* Dots - positioned on upper side */}
          <div className="flex items-center justify-center mt-8 mb-4 gap-4">
            {Array.from({ length: dotsCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-cyan-400"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          {/* Carousel */}
          <div className="overflow-hidden relative md:h-[400px] h-[320px] w-full">
            <div
              ref={containerRef}
              className="flex overflow-x-auto no-scrollbar scroll-smooth h-full"
              style={{
                gap: "16px",
                scrollSnapType: "x mandatory",
                scrollPaddingLeft: 0,
              }}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                const startX = touch.clientX;
                const startScrollLeft = containerRef.current.scrollLeft;
                
                const handleTouchMove = (e) => {
                  const touch = e.touches[0];
                  const x = touch.clientX;
                  const walk = (startX - x) * 2;
                  containerRef.current.scrollLeft = startScrollLeft + walk;
                };
                
                const handleTouchEnd = () => {
                  document.removeEventListener('touchmove', handleTouchMove);
                  document.removeEventListener('touchend', handleTouchEnd);
                };
                
                document.addEventListener('touchmove', handleTouchMove);
                document.addEventListener('touchend', handleTouchEnd);
              }}
            >
              {teamData.map((member, index) => (
                <div
                  key={index}
                  className="team-card flex-shrink-0"
                  style={{
                    scrollSnapAlign: "start",
                    width:
                      itemsToShow === 1
                        ? "100%"
                        : itemsToShow === 2
                        ? "48.5%"
                        : "32.3%",
                  }}
                >
                  <TeamMemberCard {...member} />
                </div>
              ))}
            </div>

            {/* Prev/Next buttons */}
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className={`p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors absolute top-1/2 -left-6 md:-left-10 -translate-y-1/2 z-10 ${
                currentIndex === 0 ? "opacity-30 cursor-not-allowed" : ""
              }`}
              aria-label="Previous team members"
            >
              <img src={leftArrow} alt="left" />
            </button>

            <button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className={`p-2 text-cyan-400 hover:text-cyan-300 hover:bg-slate-800 rounded-md transition-colors absolute top-1/2 -right-6 md:-right-10 -translate-y-1/2 z-10 ${
                currentIndex >= maxIndex ? "opacity-30 cursor-not-allowed" : ""
              }`}
              aria-label="Next team members"
            >
              <img src={rightArrow} alt="right" />
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar cross-browser */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default TeamCarousel;
