import React from "react";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface CircularArrowButtonProps {
  onClick: () => void;
  progress: number;
  className?: string;
}

const CircularArrowButton: React.FC<CircularArrowButtonProps> = ({
  onClick,
  progress,
  className,
}) => {
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-12 h-12 flex items-center justify-center cursor-pointer group",
        className
      )}
    >
      <svg
        className="absolute inset-0 w-full h-full -rotate-90 transform"
        viewBox="0 0 48 48"
      >
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="#5BD739"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <div className="relative z-10 flex items-center justify-center">
        <ArrowLeft
          size={24}
          className="text-gray-600 group-hover:text-gray-800 transition-colors"
        />
      </div>
    </button>
  );
};

export default CircularArrowButton;
