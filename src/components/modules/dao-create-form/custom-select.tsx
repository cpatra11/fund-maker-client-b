import React from "react";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  name: string;
  label?: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  onBlur,
  placeholder,
  required = true,
  disabled = false,
  className,
}) => {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium pl-[51px] mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex gap-[11px] w-full">
        <div className="w-10 h-10 relative rounded-[10px] bg-[#e9e9e9] flex items-center justify-center">
          <span className="text-[17px] mt-0.5 text-[#9C9C9C] font-bold">
            {label?.charAt(0) || name.charAt(0).toUpperCase()}
          </span>
        </div>
        <select
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          disabled={disabled}
          className="w-full px-[20px] py-[10px] text-[17px] rounded-[15px] border border-black/30 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/50 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
