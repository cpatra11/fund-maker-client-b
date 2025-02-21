import { motion } from "framer-motion";

interface FundCardProps {
  image: string;
  symbol: string;
  name: string;
  status?: string;
}

const FundCard = ({ image, symbol, name, status = "LIVE" }: FundCardProps) => {
  return (
    <motion.div
      className="grow shrink basis-0 h-[400px] sm:h-[460px] md:h-[520px] pt-3 flex-col justify-end items-center inline-flex hover:cursor-pointer"
      whileHover={{ y: -12 }}
      transition={{
        type: "tween",
        ease: "easeInOut",
        duration: 0.3,
      }}
    >
      <div
        className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[380px] sm:h-[440px] md:h-[500px] 
                    relative bg-white rounded-2xl shadow-[0px_34px_44px_0px_rgba(0,0,0,0.04)] border-2 border-black/20 
                    flex flex-col justify-start items-start p-3 sm:p-4 gap-4 sm:gap-6 overflow-hidden"
      >
        <img
          className="w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-xl object-cover"
          src={image}
          alt={name}
        />
        <div className="flex items-center justify-between w-full gap-2 sm:gap-3">
          <div className="text-[#2b2b2b] text-2xl sm:text-3xl md:text-[42px] font-bold font-gbold leading-none">
            ${symbol}
          </div>
          <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-[#afff99]/40 rounded-lg">
            <div className="text-[#5bd739] text-sm sm:text-base font-bold font-gbold">
              {status}
            </div>
          </div>
        </div>
        <div className="text-[#141414]/60 text-lg sm:text-xl md:text-2xl font-bold font-gsemibold">
          {name}
        </div>
      </div>
    </motion.div>
  );
};

export default FundCard;
