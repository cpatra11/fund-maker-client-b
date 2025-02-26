import Image from "next/image";
import SectionHeading from "@/components/landingpage/section-heading";

const LivePriceCard = () => {
  return (
    <div
      className="w-full max-w-[800px] mx-auto h-auto min-h-[70px] bg-white rounded-xl shadow-sm border border-black/10 
      flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 gap-3 transition-all duration-300 ease-in-out
      hover:bg-gray-100/70"
    >
      <Image
        className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full"
        src="/images/alameda.png"
        alt="Profile"
        height={80}
        width={80}
      />
      <div className="flex flex-col items-start justify-center flex-grow">
        <div className="text-[#141414] text-xs sm:text-sm md:text-base font-semibold font-gsemibold">
          ALAMEDA V2
        </div>
        <div className="flex flex-wrap items-center gap-1">
          <div className="px-1.5 py-0.5 bg-[#afff99]/40 rounded flex items-center gap-1.5">
            <div className="text-[#5bd739] text-xs sm:text-sm font-normal font-gsemibold">
              BUY
            </div>
          </div>
          <div className="px-1.5 py-0.5 bg-white rounded flex items-center gap-1">
            <div className="h-4 pl-[5px] pr-1 pt-[2px] pb-0.5 bg-[#5451ff] rounded-full flex items-center justify-center">
              <div className="text-white text-[10px] font-normal font-gsemibold">
                $
              </div>
            </div>
            <div className="text-[#141414]/80 text-xs sm:text-sm font-normal font-gsemibold">
              0.0006
            </div>
          </div>
          <div className="px-1.5 py-0.5 bg-white rounded flex items-center gap-1">
            <div className="w-4 h-4 bg-[#5451ff] rounded-full flex items-center justify-center">
              <Image
                className="w-4 h-4 rounded-full"
                src="/images/alameda.png"
                alt="Icon"
                height={16}
                width={16}
              />
            </div>
            <div className="text-[#141414]/80 text-xs sm:text-sm font-normal font-gsemibold">
              51,900.06
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start sm:items-end gap-1.5 w-full sm:w-auto sm:ml-auto mt-1 sm:mt-0">
        <div className="text-[#141414]/60 text-[10px] sm:text-xs font-normal font-gsemibold">
          2 Minutes Ago
        </div>
        <div className="px-1.5 py-0.5 bg-white rounded flex items-center gap-1">
          <div className="h-4 pl-[5px] pr-1 pt-[2px] pb-0.5 bg-[#5451ff] rounded-full flex items-center justify-center">
            <div className="text-white text-[10px] font-normal font-gsemibold">
              $
            </div>
          </div>
          <div className="text-[#141414]/80 text-xs sm:text-sm font-normal font-gsemibold">
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
    <section className="flex flex-col items-center justify-start mt-8 sm:mt-12 lg:mt-20 mb-8 sm:mb-12 lg:mb-20 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto mb-5 sm:mb-6">
        <SectionHeading
          className="!mb-0"
          subheading="Latest Activities"
          icon={<GreenDot />}
        >
          LIVE Price Actions
        </SectionHeading>
      </div>
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl sm:rounded-2xl shadow-md border border-black/10 p-3 sm:p-4 lg:p-5 flex flex-col gap-3 sm:gap-4">
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
