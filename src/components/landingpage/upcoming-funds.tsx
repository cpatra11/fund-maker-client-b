"use client";
import React, { useState, useEffect } from "react";
import FundSlider from "./fund-slider";
import UpcomingFundCard from "./upcoming-fund-card";

const UPCOMING_FUNDS = [
  {
    image: "/images/girl.svg",
    symbol: "RWOK",
    name: "RWOK DAO",
  },
  {
    image: "/images/girl.svg",
    symbol: "YKTR",
    name: "Yaki DAO",
  },
  {
    image: "/images/girl.svg",
    symbol: "PHNX",
    name: "Phoenix DAO",
  },
  {
    image: "/images/girl.svg",
    symbol: "PHNX",
    name: "Phoenix DAO",
  },
  {
    image: "/images/girl.svg",
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
      title="Upcoming Funds"
      subheading="Join the Waitlist"
      items={UPCOMING_FUNDS}
      itemWidth="w-full sm:w-[260px] md:w-[280px] lg:w-[300px]"
      maxWidth="max-w-[60%] xl:max-w-[1000px]"
      itemsPerView={itemsPerView}
      className=" px-4 sm:px-6"
      renderItem={(fund) => (
        <div>
          <UpcomingFundCard {...fund} />
        </div>
      )}
    />
  );
};

export default UpcomingFunds;
