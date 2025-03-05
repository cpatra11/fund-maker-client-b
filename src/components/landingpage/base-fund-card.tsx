"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export interface BaseFundCardProps {
  image: string;
  symbol: string;
  name: string;
  statusLabel?: string;
  statusColor?: string;
  statusBgColor?: string;
  children?: React.ReactNode;
}

const BaseFundCard = ({
  image,
  symbol,
  name,
  statusLabel,
  statusColor = "#5bd739",
  statusBgColor = "rgba(175, 255, 153, 0.4)",
  children,
}: BaseFundCardProps) => {
  return (
    <motion.div
      className="grow shrink basis-0 h-[240px] xs:h-[280px] sm:h-[320px] md:h-[360px] pt-2 sm:pt-3 flex-col justify-end items-center inline-flex hover:cursor-pointer rounded-xl sm:rounded-2xl overflow-visible w-full"
      whileHover={{
        y: -12,
        boxShadow: "0px 34px 44px 0px rgba(0,0,0,0.08)",
        zIndex: 20,
      }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      }}
    >
      <div className="w-full max-w-full xs:max-w-[280px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] h-[220px] xs:h-[260px] sm:h-[300px] md:h-[340px] relative bg-white rounded-xl sm:rounded-2xl border border-black/20 flex flex-col justify-start items-start p-3 xs:p-3.5 sm:p-4 md:p-5 gap-2 xs:gap-2.5 overflow-hidden">
        <Image
          className="w-full h-[120px] xs:h-[150px] sm:h-[180px] md:h-[210px] rounded-lg sm:rounded-xl object-cover"
          src={image}
          alt={name}
          height={200}
          width={200}
        />
        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center justify-between w-full gap-4 sm:gap-6">
            <div className="text-[#2b2b2b] text-xl sm:text-2xl md:text-[32px] font-bold font-gbold leading-none">
              ${symbol}
            </div>
            {statusLabel && (
              <div
                className="px-2 py-0.5 rounded-lg"
                style={{ backgroundColor: statusBgColor }}
              >
                <div
                  className="text-[10px] sm:text-[11px] font-bold font-gsemibold uppercase whitespace-nowrap"
                  style={{ color: statusColor }}
                >
                  {statusLabel}
                </div>
              </div>
            )}
          </div>
          <div className="text-[#141414]/60 text-xs sm:text-sm md:text-base font-medium font-gsemibold">
            {name}
          </div>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

export default BaseFundCard;
