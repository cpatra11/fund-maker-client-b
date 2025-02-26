"use client";
import React, { useState, useEffect } from "react";
import FundSlider from "./fund-slider";
import FeaturedFundCard from "./featured-fund-card";

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
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 900) {
        setItemsPerView(1.5);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FundSlider
      title="Featured Funds"
      subheading="Most In-Demand Hedge Funds"
      items={FEATURED_FUNDS}
      itemWidth="w-full sm:w-[260px] md:w-[280px] lg:w-[300px]"
      maxWidth="max-w-[60%] xl:max-w-[1000px]"
      itemsPerView={itemsPerView}
      className="mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6"
      renderItem={(fund) => (
        <div>
          <FeaturedFundCard {...fund} />
        </div>
      )}
    />
  );
};

export default FeaturedFunds;
