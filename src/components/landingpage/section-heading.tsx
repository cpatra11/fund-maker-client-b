import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  subheading?: string;
  icon?: React.ReactNode;
}

const SectionHeading = ({
  children,
  className,
  subheading,
  icon,
}: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-3 ">
        {icon && (
          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center translate-y-[2px]">
            {icon}
          </div>
        )}
        <h2
          className={cn(
            "text-center text-gray-900 text-xl sm:text-3xl md:text-4xl font-sans font-bold tracking-tight whitespace-nowrap ",
            !subheading && "mb-8",
            className
          )}
        >
          {children}
        </h2>
      </div>
      {subheading && (
        <p className="text-center text-[#141414]/60 text-xs sm:text-base font-stretch-100% font-gregular mt-3 mb-4">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
