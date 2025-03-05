import React from "react";
import { cn } from "@/lib/utils";

interface StepIndicatorProps {
  steps: string[];
  currentStep: number;
  onStepClick?: (step: number) => void;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  currentStep,
  onStepClick,
}) => {
  return (
    <div className="mb-8 w-full">
      <div className="hidden sm:flex justify-between mb-2">
        {steps.map((step, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onStepClick && onStepClick(i)}
            disabled={i > currentStep}
            className={cn(
              "text-xs font-medium transition-colors",
              i <= currentStep ? "text-white" : "text-gray-500",
              onStepClick
                ? "cursor-pointer hover:text-white/80"
                : "cursor-default"
            )}
          >
            {step}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center space-x-2 sm:hidden mb-4">
        <span className="text-white font-medium">{steps[currentStep]}</span>
        <span className="text-gray-500">
          ({currentStep + 1}/{steps.length})
        </span>
      </div>

      <div className="w-full bg-gray-700 h-2 rounded-full">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default StepIndicator;
