"use client";
import { motion } from "framer-motion";

const NavBar = () => {
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  };

  const buttonStyle =
    "w-full sm:w-auto px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-medium uppercase transition-all cursor-pointer rounded-[6px]";

  return (
    <>
      <nav className="z-50 w-full sticky top-0 bg-white/90 border-b backdrop-blur-xs border-[#2b2b2b]/5 drop-shadow-sm/20">
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 sm:py-3 md:py-3.5 gap-3 sm:gap-0">
            <motion.span
              className="text-base sm:text-lg md:text-xl font-black tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              MOONER.MONEY
            </motion.span>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full sm:w-auto gap-1.5 sm:gap-3 md:gap-4">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`${buttonStyle} tracking-normal font-semibold bg-white border border-gray-200 text-black
                  hover:shadow-md hover:border-gray-300`}
              >
                Connect Wallet
              </motion.button>
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className={`${buttonStyle} tracking-normal font-semibold bg-mint-green-200 text-black
                  hover:shadow-md hover:bg-mint-green-300`}
              >
                Connect Wallet
              </motion.button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
