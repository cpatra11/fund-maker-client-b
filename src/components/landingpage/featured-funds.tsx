"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, PanInfo } from "framer-motion";
import SectionHeading from "./section-heading";
import FundCard from "./fund-card";
import CircularArrow from "./circular-arrow";

const FEATURED_FUNDS = [
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
];

const FeaturedFunds = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const totalItems = FEATURED_FUNDS.length;
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3); // Always show 3 items on large screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const progress = (currentIndex + Math.floor(itemsPerView)) / totalItems;
  const maxIndex = totalItems - Math.floor(itemsPerView);

  const handleDragEnd = (event: any, info: PanInfo) => {
    const moveThreshold = 50;
    const movement = info.offset.x;

    if (Math.abs(movement) > moveThreshold) {
      if (movement > 0 && currentIndex > 0) {
        handlePrev();
      } else if (movement < 0 && currentIndex < maxIndex) {
        handleNext();
      } else {
        controls.start({ x: -currentIndex * 400 });
      }
    } else {
      controls.start({ x: -currentIndex * 400 });
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(newIndex);
    controls.start({ x: -newIndex * 400 });
  };

  const handleNext = () => {
    const newIndex = Math.min(maxIndex, currentIndex + 1);
    setCurrentIndex(newIndex);
    controls.start({ x: -newIndex * 400 });
  };

  return (
    <section className="flex flex-col justify-start items-center gap-8 px-4 mt-25 mb-20">
      <SectionHeading subheading="Most In-Demand Hedge Funds">
        Featured Funds
      </SectionHeading>
      <div className="relative w-full max-w-[1440px] px-16">
        <div className="w-full overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
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
            {FEATURED_FUNDS.map((fund, index) => (
              <div key={index} className="w-[400px] px-3 flex-shrink-0">
                <FundCard {...fund} />
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

export default FeaturedFunds;
