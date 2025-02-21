"use client";
import React, { useState, useEffect } from "react";
import FundSlider from "./fund-slider";
import UpcomingFundCard from "./upcoming-fund-card";

const UPCOMING_FUNDS = [
  {
    image: "/images/girl.png",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "YKTR",
    name: "Yaki DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "PHNX",
    name: "Phoenix DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "PHNX",
    name: "Phoenix DAO",
  },
  {
    image: "/images/girl.png",
    symbol: "PHNX",
    name: "Phoenix DAO",
  },
];

const UpcomingFunds = () => {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
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
      title="Upcoming Funds"
      subheading="Discover Future Opportunities"
      items={UPCOMING_FUNDS}
      itemWidth="w-[400px]"
      maxWidth="max-w-[1440px]"
      itemsPerView={itemsPerView}
      className="mt-25 mb-20"
      renderItem={(fund) => (
        <div className="px-3">
          <UpcomingFundCard {...fund} />
        </div>
      )}
    />
  );
};

export default UpcomingFunds;
