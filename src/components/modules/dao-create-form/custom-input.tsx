import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  name: string;
  className?: string;
  inputClassName?: string;
  placeholderClassName?: string;
  description?: string;
  label?: string;
  isTextArea?: boolean;
  rows?: number;
}

export const CustomInput = ({
  placeholder,
  value,
  onChange,
  name,
  className,
  inputClassName,
  placeholderClassName,
  description,
  label,
  isTextArea = false,
  rows = 4,
  ...props
}: CustomInputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-base font-medium text-gray-400 pl-[24px]"
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          "w-full h-16 pl-[51px] pr-[51px] py-4 bg-white rounded-[20px] border-2 border-black/20 justify-start items-center inline-flex overflow-hidden relative",
          isTextArea && "h-auto min-h-[120px]",
          className
        )}
      >
        {isTextArea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange as any}
            className={cn(
              "absolute inset-0 w-full h-full pl-[51px] pt-4 focus:outline-none bg-transparent resize-none",
              inputClassName
            )}
            placeholder={placeholder}
            rows={rows}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={name}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            className={cn(
              "absolute inset-0 w-full h-full pl-[51px] focus:outline-none bg-transparent",
              inputClassName
            )}
            placeholder={placeholder}
            {...props}
          />
        )}
      </div>
      {description && (
        <p className="mt-2 text-sm text-gray-400 pl-[51px]">
          {/* Added pl-[51px] for consistent alignment */}
          {description}
        </p>
      )}
    </div>
  );
};
