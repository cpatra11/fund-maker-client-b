import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full mb-12 sm:mb-16">
      <div className="relative w-[97%] sm:w-[96%] mx-auto bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0f0f0f] rounded-[32px] sm:rounded-[28px] overflow-hidden">
        <div className="absolute inset-x-0 -bottom-10 h-[70%] bg-gradient-to-t from-[#141414] via-[#141414]/95 to-transparent z-[1]" />

        <div className="absolute w-[771px] h-[771px] left-1/3 top-10 bg-gradient-to-r from-[#141414]/80 via-[#181818]/70 to-[#141414]/80 rounded-full blur-[124px]" />

        <div className="relative z-[2] flex flex-col items-center pt-6 sm:pt-8 md:pt-10 pb-6 sm:pb-10 md:pb-12">
          <div className="relative z-30 space-y-2 sm:space-y-3 text-center mb-16 sm:mb-20 md:mb-24">
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-gblack leading-[0.92] tracking-tighter
            bg-gradient-to-b from-mint-green-200 to-mint-green-50 text-transparent bg-clip-text"
            >
              MOONER
              <br />
              MONEY
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

          <div className="relative w-full overflow-visible">
            <div className="relative mx-auto w-full max-w-[1396px]">
              <div className="relative w-full aspect-[16/3.5]">
                <div className="absolute inset-x-0 -bottom-10 h-[40%] bg-gradient-to-t from-[#141414] via-[#141414]/80 to-transparent z-10" />
                <div className="relative w-full h-full translate-y-6">
                  <Image
                    className="w-full h-full object-cover opacity-40 scale-110"
                    src="/images/moon.png"
                    alt="Moon landscape"
                    width={1678}
                    height={336}
                    priority
                  />
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[160%] aspect-square rounded-full border-2 border-white/20 z-20">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-[1%] w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[47px] md:h-[47px] bg-[#141414] rounded-full border-[2px] border-mint-green-200 shadow-[0_0_10px_rgba(175,255,153,0.3)]" />

                  <div className="absolute left-[80%] top-[10%] -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[47px] md:h-[47px] bg-[#141414] rounded-full border-[2px] border-mint-green-200 shadow-[0_0_10px_rgba(175,255,153,0.3)]" />

                  <div className="absolute left-[21%] top-[9%] -translate-x-1/2 -translate-y-1/2 w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[47px] md:h-[47px] bg-[#141414] rounded-full border-[2px] border-mint-green-200 shadow-[0_0_10px_rgba(175,255,153,0.3)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
