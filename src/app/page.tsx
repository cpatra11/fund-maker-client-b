import React from "react";
import Hero from "@/components/landingpage/hero";
import Featured from "@/components/landingpage/featured";
import FeaturedFunds from "@/components/landingpage/featured-funds";
import UpcomingFunds from "@/components/landingpage/upcoming-funds";
import LivePrice from "@/components/landingpage/live-price";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Featured /> {/* Cha-Ching Champion section */}
      <LivePrice />
      <FeaturedFunds />
      <UpcomingFunds />
    </>
  );
};

export default Home;
