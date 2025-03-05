"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("assets");
  const [buyMode, setBuyMode] = useState(true);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-2 md:p-6 w-full min-h-screen bg-white">
      {/* Left Column */}
      <div className="flex flex-col gap-6 w-full md:w-[48%]">
        <div className="w-full h-auto md:h-[140px] bg-white rounded-[12px]  border-[2.5px] border-black/10 flex items-center relative p-6">
          <div className="flex flex-col md:flex-row w-full h-full items-center ">
            <div className="flex items-center w-full md:w-[38%] mb-2 md:mb-0">
              <Image
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-[12px]"
                alt="logo"
                src="/images/girl.svg"
                width={100}
                height={100}
              />

              <div className="flex flex-col items-start ml-4">
                <h1 className="text-[#2b2b2b] text-2xl md:text-[32px] font-bold font-gblack">
                  $RWOK
                </h1>
                <p className="text-[#141414]/60 text-xs md:text-[13px] font-bold font-gbold">
                  RWOK DAO
                </p>
              </div>
            </div>

            {/* grey divider */}
            <div className="hidden md:block h-[140px] w-[2px] bg-black/10 mx-4"></div>

            <div className="h-auto md:h-[80px] flex-col justify-center items-start gap-2 w-full md:w-auto">
              <h2 className="text-center pl-6 md:text-left text-[#2b2b2b]/50 text-sm md:text-base font-normal font-gsemibold">
                MARKETCAP
              </h2>
              <p className="text-center pl-6 md:text-left text-[#2b2b2b] text-2xl md:text-[32px] font-bold font-gsemibold">
                $461,849.00
              </p>
              <p className="text-center pl-6 md:text-left text-[#60c844] text-xs md:text-sm font-bold font-gbold">
                $17,200(+200%)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-auto md:h-[140px] bg-white rounded-[12px] border-[2.5px] border-black/10 flex items-center p-4 relative">
          <div className="flex flex-col md:flex-row w-full h-full items-center">
            <div className="flex items-center justify-start w-full md:w-[38%] mb-2 md:mb-0">
              <div className="h-[65px] flex-col justify-center items-start gap-1 ml-3 inline-flex">
                <h2 className="self-stretch text-[#2b2b2b]/50 text-sm md:text-base font-normal font-gregular">
                  YOUR HOLDINGS
                </h2>
                <p className="self-stretch text-[#2b2b2b] text-2xl md:text-[32px] font-normal font-gbold">
                  0 RWOK
                </p>
              </div>
            </div>
            {/* grey divider */}
            <div className="hidden md:block h-[140px] w-[2px] bg-black/10 mx-4"></div>

            <div className="h-auto md:h-[80px] flex-col justify-center items-start gap-2 w-full md:w-auto">
              <h2 className="self-stretch text-center pl-6  md:text-left text-[#2b2b2b]/50 text-sm md:text-base font-normal font-gregular">
                YOUR MARKET VALUE
              </h2>
              <p className="self-stretch text-center pl-6  md:text-left text-[#2b2b2b] text-2xl md:text-[32px] font-semibold font-gsemibold">
                $0.00
              </p>
              <p className="self-stretch text-center pl-6  md:text-left text-[#60c844] text-xs md:text-sm font-semibold font-gsemibold">
                $0.00(+0.0%)
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-[90px] bg-[#afff99] rounded-[16px] border-2 border-[#5bd739] border-b-6 flex items-center justify-center">
          <h3 className="text-[#2b2b2b] text-lg font-black font-gblack uppercase">
            deposit liquidity
          </h3>
        </div>

        <div className="w-full flex-1 mt-10">
          <div className="flex relative">
            <div
              className={`w-1/2 h-14 flex justify-center items-center cursor-pointer ${
                activeTab === "assets" ? "text-[#2b2b2b]" : "text-[#2b2b2b]/50"
              }`}
              onClick={() => setActiveTab("assets")}
            >
              <div className="text-lg font-gblack font-bold">ASSETS</div>
            </div>
            <div
              className={`w-1/2 h-14 flex justify-center items-center cursor-pointer ${
                activeTab === "details" ? "text-[#2b2b2b]" : "text-[#2b2b2b]/50"
              }`}
              onClick={() => setActiveTab("details")}
            >
              <div className="text-lg font-gblack font-bold">DETAILS</div>
            </div>
            <div className="absolute bottom-0 w-full h-[3px] bg-[#f2f2f2]"></div>
            <motion.div
              className="absolute bottom-0 w-1/2 h-[3px] bg-[#141414]/80"
              initial={false}
              animate={{ x: activeTab === "assets" ? 0 : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <div className="p-4">
            {activeTab === "assets" ? (
              <>
                <div className="flex mb-4 text-black/80 text-sm font-gblack font-bold">
                  <div className="w-[25%]">Token Name</div>
                  <div className="w-[25%]">Balance</div>
                  <div className="w-[25%]">Price</div>
                  <div className="w-[25%]">Value</div>
                </div>

                {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center py-2 border-b border-gray-100 text-lg font-gblack font-bold"
                  >
                    <div className="w-[25%] flex items-center">
                      <div className="w-[20px] h-[20px] mr-3 bg-[#d5e5d1] rounded-full" />
                      <span className="">cbDtc</span>
                    </div>
                    <div className="w-[25%] font-gblack">1.06</div>
                    <div className="w-[25%] font-gblack">$103,456.32</div>
                    <div className="w-[25%] font-gblack">$123,456.32</div>
                  </div>
                ))}
              </>
            ) : (
              <div className="space-y-4">
                <div className="text-base md:text-xl">
                  <span className="font-bold">Founded By:</span> Gautam Adani
                </div>
                <div className="text-base md:text-xl">
                  <span className="font-bold">Bio:</span> Good boy from Gujarat
                </div>
                <div className="text-base md:text-xl">
                  <span className="font-bold">DAO Owner's Address:</span>{" "}
                  1FfmbHfnpaZjKFvyi1okTjJJusN455paPH
                </div>
                <div className="text-base md:text-xl">
                  <span className="font-bold">Treasury Address:</span>{" "}
                  1FfmbHfnpaZjKFvyi1okTjJJusN455paPΗ
                </div>
                <div className="text-base md:text-xl">
                  <span className="font-bold">DAO Coin Address:</span>{" "}
                  1FfmbHfnpaZjKFvyilokTjJJusN455paΡΗ
                </div>
                <div className="text-base md:text-xl">
                  <span className="font-bold">Created:</span> 25th January 2024
                </div>
                <div className="text-base md:text-xl">
                  <span className="font-bold">Trading Ends:</span> 25th February
                  2025
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden mt-6">
          <div className="flex flex-col gap-6 w-full">
            <div className="w-full h-[60px] relative bg-white rounded-[12px] border border-black/20 flex items-center justify-between overflow-hidden p-2">
              <div className="w-[48%] h-full bg-white rounded-xl shadow-[0px_47.7px_38.87px_0px_rgba(0,0,0,0.04)] border-2 border-[#5bd739] flex items-center justify-center">
                <div className="text-[#5bd739] text-xl font-normal font-gblack uppercase">
                  SWAP
                </div>
              </div>
              <div className="w-[48%] h-full bg-white rounded-xl shadow-[0px_47.7px_38.87px_0px_rgba(0,0,0,0.04)] flex items-center justify-center">
                <div className="text-[#ff715f] text-xl font-normal font-gblack uppercase">
                  SELL
                </div>
              </div>
            </div>

            <div className="flex flex-wrap md:flex-nowrap justify-between gap-2">
              {[1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className={`h-12 md:h-16 px-4 md:px-8 py-2 md:py-4 bg-white rounded-[12px] flex items-center justify-center flex-1 min-w-[calc(50%-0.5rem)] md:min-w-0
                    ${
                      index === 0
                        ? "border-2 border-black"
                        : "border border-black/20"
                    }`}
                >
                  <div
                    className={`text-base md:text-lg font-gblack font-black uppercase 
                    ${index === 0 ? "text-[#2b2b2b]" : "text-[#2b2b2b]/20"}`}
                  >
                    5 apt
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full space-y-3">
              <div className="w-full h-[110px] rounded-[16px] border border-black/10 p-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="text-[#2b2b2b] text-xs font-gsemibold uppercase">
                    From
                  </div>
                  <div className="flex items-center">
                    <span className="text-[#2b2b2b] text-xs font-gsemibold uppercase mr-2">
                      Wallet: $1,000.36
                    </span>
                    <span className="text-[#5bd739] text-xs font-gblack uppercase pl-4">
                      max
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-[#2b2b2b] text-3xl font-gblack uppercase">
                    88.653
                  </div>
                  <div className="p-1 bg-[#2b2b2b] rounded">
                    <div className="text-white text-xs font-gbold font-bold uppercase">
                      apt
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-[110px] rounded-[16px] border border-black/10 p-4">
                <div className="text-[#2b2b2b] text-xs font-gsemibold uppercase mb-1">
                  to
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-[#2b2b2b] text-3xl font-gblack uppercase">
                    88.653
                  </div>
                  <div className="p-1 bg-[#2b2b2b] rounded">
                    <div className="text-white text-xs  font-gbold font-bold uppercase">
                      abslf
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full p-3 rounded-[16px]">
              <div className="flex justify-between items-center">
                <div className="text-[#2b2b2b] text-lg font-black font-gblack">
                  Price Impact
                </div>
                <div className="text-[#2b2b2b] text-lg font-black font-gblack">
                  1.07%
                </div>
              </div>
            </div>
            <div className="w-full p-3 rounded-[16px]">
              <div className="flex justify-between items-center">
                <div className="text-[#2b2b2b] text-lg font-gblack">
                  Platform Fees
                </div>
                <div className="text-[#2b2b2b] text-lg font-gblack">$5.00</div>
              </div>
            </div>

            <div className="w-full h-[70px] bg-[#afff99] font-black font-gblack rounded-[16px] border-2 border-[#5bd739] border-b-8 flex items-center justify-center">
              <p className="text-[#2b2b2b] text-lg uppercase">
                {buyMode ? "Swap RWOK Token" : "Sell RWOK Token"}
              </p>
            </div>

            <div className="w-full rounded-[16px] overflow-hidden">
              <Image
                className="w-full h-[320px] object-cover"
                src="/images/chart.svg"
                alt="chart"
                width={842}
                height={424}
              />
            </div>
          </div>
        </div>
      </div>

      {/* middle divider - between two cols */}
      <div className="hidden md:block h-full">
        <div className="fixed top-[10%] w-[1.5px] h-[80%] bg-black/10"></div>
      </div>

      <div className="hidden md:flex flex-col gap-6 w-[48%]">
        <div className="w-full h-[86px] relative bg-white rounded-[20px]  border-2 border-black/20 flex items-center justify-between px-3">
          <div className="w-[48%] h-[68px] bg-mint-green-200 rounded-2xl  border-2 border-[#5bd739] flex items-center justify-center">
            <div className="text-mint-green-700 text-2xl font-black font-gblack uppercase">
              BUY
            </div>
          </div>
          <div className="w-[48%] h-[68px] bg-white rounded-2xl  flex items-center justify-center">
            <div className="text-[#ff715f] text-2xl font-black font-gblack uppercase">
              SELL
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className={`h-16 px-8 py-8 bg-white rounded-[12px] flex items-center justify-center flex-1 
                ${
                  index === 0
                    ? "border-2 border-black"
                    : "border border-black/20"
                }`}
            >
              <div
                className={`text-lg font-gblack font-black uppercase 
                ${index === 0 ? "text-[#2b2b2b]" : "text-[#2b2b2b]/20"}`}
              >
                5 apt
              </div>
            </div>
          ))}
        </div>

        <div className="w-full space-y-3">
          <div className="w-full h-[110px] rounded-[16px] border border-black/10 p-4">
            <div className="flex justify-between items-center mb-1">
              <div className="text-[#2b2b2b] text-xs font-gsemibold uppercase">
                From
              </div>
              <div className="flex items-center">
                <span className="text-[#2b2b2b] text-xs font-gsemibold uppercase mr-2">
                  Wallet: $1,000.36
                </span>
                <span className="text-[#5bd739] text-xs font-['Gilroy-Black'] uppercase">
                  max
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-[#2b2b2b] text-3xl font-gblack uppercase">
                88.653
              </div>
              <div className="p-1 bg-[#2b2b2b] rounded">
                <div className="text-white text-xs font-gbold font-bold uppercase">
                  apt
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[110px] rounded-[16px] border border-black/10 p-4">
            <div className="text-[#2b2b2b] text-xs font-gsemibold uppercase mb-1">
              to
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="text-[#2b2b2b] text-3xl font-gblack uppercase">
                88.653
              </div>
              <div className="p-1 bg-[#2b2b2b] rounded">
                <div className="text-white text-xs  font-gbold font-bold uppercase">
                  abslf
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-3 rounded-[16px]">
          <div className="flex justify-between items-center">
            <div className="text-[#2b2b2b] text-lg font-gblack">
              Price Impact
            </div>
            <div className="text-[#2b2b2b] text-lg font-gblack">1.07%</div>
          </div>
        </div>

        <div className="w-full h-[90px] bg-[#afff99] rounded-[16px] border-2 border-[#5bd739] border-b-6 flex items-center justify-center">
          <h3 className="text-[#2b2b2b] text-lg font-black font-gblack uppercase">
            {buyMode ? "Swap for the sake of god" : "Sell RWOK Token"}
          </h3>
        </div>

        <div className="w-full rounded-[16px] overflow-hidden">
          <Image
            className="w-full h-[320px] object-cover"
            src="/images/chart.svg"
            alt="chart"
            width={842}
            height={424}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
