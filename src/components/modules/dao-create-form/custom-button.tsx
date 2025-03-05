"use client";

import React, { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  textClassName?: string;
  height?: "default" | "tall" | "large";
  sugg;
  variant?: "default" | "outline";
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className,
  textClassName,
  height = "default",
  variant = "default",
  ...props
}) => {
  const heightClass = {
    default: "h-[40px]",
    tall: "h-[50px]",
    large: "h-[86px] py-7",
  }[height];

  const baseStyles =
    "w-full max-w-[844px] rounded-[20px] justify-center items-center inline-flex overflow-hidden cursor-pointer";

  const variantStyles = {
    default:
      "bg-[#afff99] shadow-[0px_47.70000076293945px_38.86666488647461px_0px_rgba(0,0,0,0.04)] shadow-[0px_4px_0px_0px_rgba(92,216,58,1.00)] border-2 border-[#5bd739]",
    outline:
      "bg-white shadow-[0px_4px_0px_0px_rgba(0,0,0,0.1)] border-2 border-[#e0e0e0]",
  }[variant];

  return (
    <motion.button
      type={props.type || "submit"}
      className={cn(
        baseStyles,
        variantStyles,
        heightClass,
        height !== "large" && "py-4",
        className
      )}
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.02,
        backgroundColor: variant === "default" ? "#c3ffb3" : "#f5f5f5",
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.98,
        y: 4,
        boxShadow: "none",
        borderBottom: "2px solid transparent",
        borderBottomColor: "transparent",
        transition: { duration: 0.1 },
      }}
      whileFocus={{
        boxShadow:
          variant === "default"
            ? "0px 0px 0px 3px rgba(92,216,58,0.5), 0px 4px_0px_0px rgba(92,216,58,1.00)"
            : "0px 0px 0px 3px rgba(0,0,0,0.1), 0px 4px_0px_0px rgba(0,0,0,0.1)",
        outline: "none",
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <motion.span
        className={cn(
          "text-[#2b2b2b] text-md font-bold font-gblack uppercase",
          variant === "outline" && "text-gray-700",
          textClassName
        )}
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.9 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
};
