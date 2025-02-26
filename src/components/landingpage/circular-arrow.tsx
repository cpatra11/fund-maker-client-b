import { ArrowLeft, ArrowRight } from "lucide-react";

interface CircularArrowProps {
  direction: "left" | "right";
  onClick: () => void;
  progress: number;
  disabled?: boolean;
  progressColor?: string;
  className?: string;
}

const CircularArrow: React.FC<CircularArrowProps> = ({
  direction,
  onClick,
  progress,
  disabled,
  progressColor = "#374151",
  className,
}) => {
  const Icon = direction === "left" ? ArrowLeft : ArrowRight;
  const circumference = 2 * Math.PI * 22;

  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={!disabled ? onClick : undefined}
    >
      <div className="relative w-12 h-12">
        <svg width="48" height="48" viewBox="0 0 48 48">
          <circle
            cx="24"
            cy="24"
            r="22"
            fill="none"
            stroke={progressColor}
            strokeWidth="2"
            strokeDasharray={`${progress * circumference} ${circumference}`}
            transform="rotate(-90 24 24)"
            style={{ transition: "stroke-dasharray 0.3s ease" }}
          />
        </svg>
        <div className="absolute inset-0 rounded-full bg-white/80 shadow-lg border border-black/5 flex items-center justify-center hover:bg-white transition-colors">
          <Icon className="w-6 h-6 text-gray-800" strokeWidth={1.5} />{" "}
        </div>
      </div>
    </div>
  );
};

export default CircularArrow;
