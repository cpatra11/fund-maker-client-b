import Image from "next/image";
import SectionHeading from "@/components/landingpage/section-heading";

const LivePriceCard = () => {
  return (
    <div
      className="w-full max-w-[1100px] mx-auto h-auto min-h-[90px] sm:min-h-[100px] md:min-h-[110px] bg-white rounded-xl shadow-md border border-black/10 
      flex flex-col sm:flex-row items-start sm:items-center p-2.5 sm:p-3 md:p-4 gap-2.5 sm:gap-3 md:gap-4 transition-all duration-300 ease-in-out
      hover:bg-gray-100/70"
    >
      <Image
        className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full"
        src="/images/alameda.png"
        alt="Profile"
        height={80}
        width={80}
      />
      <div className="flex flex-col items-start justify-center flex-grow">
        <div className="text-[#141414] text-base sm:text-lg md:text-xl lg:text-2xl font-semibold font-gsemibold">
          ALAMEDA V2
        </div>
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[#afff99]/40 rounded flex items-center gap-2">
            <div className="text-[#5bd739] text-base sm:text-lg lg:text-xl font-normal font-gsemibold">
              BUY
            </div>
          </div>
          <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white rounded flex items-center gap-1.5">
            <div className="h-5 pl-[7px] pr-1.5 pt-[3px] pb-0.5 bg-[#5451ff] rounded-full flex items-center justify-center">
              <div className="text-white text-xs font-normal font-gsemibold">
                $
              </div>
            </div>
            <div className="text-[#141414]/80 text-base sm:text-lg lg:text-xl font-normal font-gsemibold">
              0.0006
            </div>
          </div>
          <div className="px-2 py-1 bg-white rounded flex items-center gap-1.5">
            <div className="w-5 h-5 bg-[#5451ff] rounded-full flex items-center justify-center">
              <Image
                className="w-5 h-5 rounded-full"
                src="/images/alameda.png"
                alt="Icon"
                height={20}
                width={20}
              />
            </div>
            <div className="text-[#141414]/80 text-lg md:text-xl font-normal font-gsemibold">
              51,900.06
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start sm:items-end gap-1.5 sm:gap-2 w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
        <div className="text-[#141414]/80 text-sm sm:text-base md:text-lg font-normal font-gsemibold">
          2 Minutes Ago
        </div>
        <div className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-white rounded flex items-center gap-1.5">
          <div className="h-5 pl-[7px] pr-1.5 pt-[3px] pb-0.5 bg-[#5451ff] rounded-full flex items-center justify-center">
            <div className="text-white text-xs font-normal font-gsemibold">
              $
            </div>
          </div>
          <div className="text-[#141414]/80 text-lg md:text-xl font-normal font-gsemibold">
            0xe9...422a
          </div>
        </div>
      </div>
    </div>
  );
};

const GreenDot = () => (
  <div className="w-[42px] h-[42px] relative inline-flex items-center justify-center">
    <div className="w-6 h-6 bg-[#5bd739] rounded-full absolute" />
    <div className="w-[34px] h-[34px] absolute rounded-full border border-[#5cd83a]/30" />
    <div className="w-[42px] h-[42px] absolute rounded-full border border-[#5cd83a]/10" />
  </div>
);

const LivePrice = () => {
  return (
    <section className="flex flex-col items-center justify-start mt-6 sm:mt-8 lg:mt-50 mb-6 sm:mb-8 lg:mb-30 px-2 sm:px-4">
      <div className="w-full max-w-[1200px] mx-auto mb-3 sm:mb-4 lg:mb-8">
        <SectionHeading
          className="!mb-0"
          subheading="Latest Activities"
          icon={<GreenDot />}
        >
          LIVE Price Actions
        </SectionHeading>
      </div>
      <div className="w-full max-w-[1200px] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-lg border-2 border-black/10 p-2.5 sm:p-3 md:p-4 lg:p-5 flex flex-col gap-2.5 sm:gap-3 md:gap-4">
        <LivePriceCard />
        <LivePriceCard />
        <LivePriceCard />
        <LivePriceCard />
        <LivePriceCard />
      </div>
    </section>
  );
};

export default LivePrice;
