import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full mb-12 sm:mb-16">
      <div className="relative w-[97%] sm:w-[96%] mx-auto bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-[32px] sm:rounded-[28px] overflow-hidden">
        <div className="absolute inset-x-0 -bottom-10 h-[70%] bg-gradient-to-t from-[#141414] via-[#141414]/95 to-transparent z-[1]" />
        <div className="absolute w-[771px] h-[771px] left-1/3 top-10 bg-gradient-to-r from-[#141414]/80 via-[#181818]/70 to-[#141414]/80 rounded-full blur-[124px]" />

        <div className="relative z-[2] flex flex-col items-center pt-6 sm:pt-8 md:pt-10">
          <div className="relative z-30 space-y-2 sm:space-y-3 text-center">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-gblack font-black leading-[0.92] tracking-tighter
            bg-gradient-to-b from-mint-green-200 to-mint-green-50 text-transparent bg-clip-text"
            >
              FUNDMAKER
            </h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-white font-semibold font-sans leading-[1.2]">
              Pool, Trade, Thrive
            </h2>

            <button className="mt-4 sm:mt-5 px-5 sm:px-8 py-2 sm:py-3 bg-gradient-to-t from-mint-green-200 to-white rounded-xl shadow-[0px_6px_0px_0px_rgba(97,201,68,1.00)] border border-[#bbffa9] transition-all duration-200 active:translate-y-1 hover:translate-y-1 hover:shadow-[0px_3px_0px_0px_rgba(97,201,68,1.00)] hover:cursor-pointer">
              <span className="text-base sm:text-lg text-[#1e1e1e]/80 font-gblack font-bold">
                Create DAO Fund
              </span>
            </button>
          </div>

          <div className="relative w-[320px] sm:w-[400px] md:w-[480px] mt-25 sm:mt-35">
            {/* Back coin */}
            <div className="absolute w-[75%] aspect-[2/1.2] bottom-0 left-[95%] -translate-x-1/2 opacity-60">
              <Image
                src="/images/coin-back.svg"
                alt="Coin illustration back"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Middle coin (largest) */}
            <div className="absolute w-full aspect-[2/1.2] bottom-0 left-1/2 -translate-x-1/2">
              <Image
                src="/images/coin.svg"
                alt="Coin illustration middle"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Front coin (smallest) */}
            <div className="relative w-[70%] aspect-[2/1.2] bottom-[-20px] mx-auto -ml-24">
              <Image
                src="/images/coin-front.svg"
                alt="Coin illustration front"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
