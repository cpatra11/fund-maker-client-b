"use client";
import React, { useState, useRef } from "react";
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

  const handleDragEnd = (event: any, info: PanInfo) => {
    const moveThreshold = 100;
    const movement = info.offset.x;

    if (Math.abs(movement) > moveThreshold) {
      if (movement > 0 && currentIndex > 0) {
        handlePrev();
      } else if (movement < 0 && currentIndex < maxIndex) {
        handleNext();
      } else {
        controls.start({ x: -currentIndex * (100 / itemsPerView) + "%" });
      }
    } else {
      controls.start({ x: -currentIndex * (100 / itemsPerView) + "%" });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    controls.start({ x: -newIndex * (100 / itemsPerView) + "%" });
  };

  const handleNext = () => {
    const newIndex = Math.min(currentIndex + 1, maxIndex);
    setCurrentIndex(newIndex);
    controls.start({ x: -newIndex * (100 / itemsPerView) + "%" });
  };

  return (
    <section
      className={`flex flex-col justify-start items-center gap-10 px-4 ${className}`}
    >
      <SectionHeading subheading={subheading}>{title}</SectionHeading>
      <div className={`relative w-full ${maxWidth} px-16`}>
        <div className="w-full overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex gap-6"
            drag="x"
            dragConstraints={containerRef}
            onDragEnd={handleDragEnd}
            animate={controls}
            initial={false}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.3,
            }}
          >
            {items.map((item, index) => (
              <div key={index} className={`${itemWidth} flex-shrink-0`}>
                {renderItem(item, index)}
              </div>
            ))}
          </motion.div>
        </div>
        {currentIndex > 0 && (
          <div className="absolute top-1/2 -translate-y-1/2 -left-4">
            <CircularArrow
              direction="left"
              onClick={handlePrev}
              progress={progress}
              disabled={false}
              progressColor="#374151"
            />
          </div>
        )}
        {currentIndex < maxIndex && (
          <div className="absolute top-1/2 -translate-y-1/2 -right-4">
            <CircularArrow
              direction="right"
              onClick={handleNext}
              progress={progress}
              disabled={false}
              progressColor="#374151"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default FundSlider;
