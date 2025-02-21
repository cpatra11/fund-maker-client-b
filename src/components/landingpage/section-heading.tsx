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
      <div className="flex items-center gap-4">
        {icon}
        <h2
          className={cn(
            "text-center text-gray-900 text-4xl md:text-6xl font-semibold font-gregular",
            !subheading && "mb-20",
            className
          )}
        >
          {children}
        </h2>
      </div>
      {subheading && (
        <p className="text-center text-[#141414]/60 text-lg md:text-2xl font-normal font-gsemibold mt-10">
          {subheading}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
