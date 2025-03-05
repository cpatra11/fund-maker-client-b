import React from "react";
import Hero from "@/components/landingpage/hero";
import Featured from "@/components/landingpage/featured";
import FeaturedFunds from "@/components/landingpage/featured-funds";
import UpcomingFunds from "@/components/landingpage/upcoming-funds";
import LivePrice from "@/components/landingpage/live-price";
import { Container } from "@/components/ui/container";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Featured /> {/* Cha-Ching Champion section */}
      {/* <LivePrice /> */}
      <div className="w-full px-4">
        <FeaturedFunds />
        <UpcomingFunds />
      </div>
    </>
  );
};

export default Home;
