"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/landingpage/section-heading";

const Featured = () => {
  return (
    <section className="relative w-full max-w-3xl mx-auto flex-col gap-8 items-center justify-start mt-16 px-4 mb-16">
      <SectionHeading>Cha-Ching Champion</SectionHeading>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
        <motion.div
          className="w-full max-w-[340px] h-[400px] bg-white rounded-2xl shadow-lg border-2 border-black/20 flex flex-col items-center justify-start gap-4 overflow-hidden p-5"
          whileHover={{ y: -12 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.3,
          }}
        >
          <Image
            className="w-full h-auto rounded-[20px]"
            src="/images/girl.svg"
            alt="YapTrade DAO"
            width={350}
            height={250}
          />
          <div className="flex items-center justify-between w-full gap-4">
            <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold font-gsemibold leading-[1.1]">
              YapTrade
              <br />
              DAO
            </h2>
            <div className="relative w-[80px] h-[78px] bg-[#afff99] rounded-xl border border-black/40 flex items-center justify-center">
              <Image
                className="absolute top-0 w-[69px] h-[67px] transform scale-x-100 "
                src="/images/trophy.png"
                alt="YapTrade icon"
                width={69}
                height={67}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-[340px] h-[400px] bg-white rounded-2xl shadow-lg border-2 border-black/20 flex flex-col items-center justify-start gap-4 overflow-hidden p-5"
          whileHover={{ y: -12 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: 0.3,
          }}
        >
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-gray-900/50 text-base font-medium">
                MARKETCAP
              </div>
              <div className="flex items-center gap-2">
                <div className="text-gray-900 text-2xl font-bold">
                  $461,849.00
                </div>
                <div className="text-mint-green-550 text-base font-bold">
                  (+200%)
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-gray-900/50 text-base font-medium">
                VOLUME
              </div>
              <div className="flex items-center gap-2">
                <div className="text-gray-900 text-2xl font-bold">
                  $137,720.63
                </div>
                <div className="text-mint-green-550 text-base font-bold">
                  (+200%)
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-gray-900/50 text-base font-medium">
                LIQUIDITY
              </div>
              <div className="flex justify-start items-center">
                <div className="text-gray-900 text-2xl font-bold">
                  $119,185.21
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-gray-900/50 text-base font-medium">
                WL PARTICIPANTS
              </div>
              <div className="flex justify-start items-center">
                <div className="text-gray-900 text-2xl font-bold">1010</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
