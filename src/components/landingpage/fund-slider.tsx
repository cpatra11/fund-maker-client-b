"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import SectionHeading from "./section-heading";
import CircularArrow from "./circular-arrow";

interface FundSliderProps {
  title: string;
  subheading: string;
  items: any[];
  itemWidth: string;
  maxWidth: string;
  itemsPerView: number;
  renderItem: (item: any, index: number) => React.ReactNode;
  className?: string;
}

const FundSlider = ({
  title,
  subheading,
  items,
  itemWidth,
  maxWidth,
  itemsPerView,
  renderItem,
  className = "",
}: FundSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = items.length;
  const progress = (currentIndex + Math.floor(itemsPerView)) / totalItems;
  const maxIndex = totalItems - Math.floor(itemsPerView);

  const calculateCardPosition = (index: number) => {
    if (!containerRef.current) return 0;

    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = containerWidth / itemsPerView;
    const gapWidth = 16;

    const initialOffset = (containerWidth - cardWidth) / 2;

    return initialOffset - index * (cardWidth + gapWidth);
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);

    controls.start({
      x: calculateCardPosition(newIndex),
    });
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);

    controls.start({
      x: calculateCardPosition(newIndex),
    });
  };

  useEffect(() => {
    const updatePosition = () => {
      controls.start({
        x: calculateCardPosition(currentIndex),
      });
    };

    updatePosition();

    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [controls, currentIndex, itemsPerView]); // Stable dependency array

  return (
    <section
      className={`flex flex-col justify-start items-center gap-6 sm:gap-8 ${className}`}
    >
      <SectionHeading subheading={subheading}>{title}</SectionHeading>
      <div
        className={`relative w-full ${maxWidth} overflow-hidden pb-16 sm:pb-20`}
      >
        <div className="absolute left-[calc(-50vw+50%)] top-0 bottom-16 sm:bottom-20 w-[calc(50vw-50%+8rem)] sm:w-[calc(50vw-50%+16rem)] bg-gradient-to-r from-white via-white to-transparent z-[5]" />
        <div className="absolute right-[calc(-50vw+50%)] top-0 bottom-16 sm:bottom-20 w-[calc(50vw-50%+8rem)] sm:w-[calc(50vw-50%+16rem)] bg-gradient-to-l from-white via-white to-transparent z-[5]" />

        <div className="w-full relative z-[2] pb-16" ref={containerRef}>
          <motion.div
            className="flex gap-4 sm:gap-5 lg:gap-6"
            animate={controls}
            initial={{ x: 0 }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            {items.map((item, index) => (
              <div key={index} className={`${itemWidth} flex-shrink-0`}>
                {renderItem(item, index)}
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 10000 }}
        >
          {currentIndex > 0 && (
            <button
              className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 lg:left-6 hidden sm:block pointer-events-auto"
              onClick={handlePrev}
            >
              <CircularArrow
                direction="left"
                onClick={handlePrev}
                progress={progress}
                disabled={false}
                progressColor="#374151"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </button>
          )}
          {currentIndex < maxIndex && (
            <button
              className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 lg:right-6 hidden sm:block pointer-events-auto"
              onClick={handleNext}
            >
              <CircularArrow
                direction="right"
                onClick={handleNext}
                progress={progress}
                disabled={false}
                progressColor="#374151"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FundSlider;
