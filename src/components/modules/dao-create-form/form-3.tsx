"use client";

import SectionHeading from "@/components/landingpage/section-heading";
import React from "react";
import { CustomInput } from "./custom-input";
import { useFormik } from "formik";
import { CustomButton } from "./custom-button";
import CircularArrowButton from "./circular-arrow-button";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Form3Props {
  onNext: (values: Form3Values) => void; // Changed from onSubmit to onNext
  onPrevious: () => void;
  initialData: Partial<Form3Values>;
  currentStep: number;
  totalSteps: number;
}

interface Form3Values {
  fundXHandle: string;
  fundTelegramLink: string;
  fundManagerXHandle: string;
  fundManagerTelegramLink: string;
}

const validationSchema = z.object({
  fundXHandle: z
    .string()
    .regex(/^@?[\w]+$/, "Enter a valid X handle")
    .transform((value) => (value.startsWith("@") ? value : `@${value}`)),
  fundTelegramLink: z
    .string()
    .regex(
      /^(https?:\/\/)?(www\.)?t\.me\/[\w-]+$/,
      "Enter a valid Telegram link"
    )
    .transform((value) => {
      if (!value) return value;
      if (value.startsWith("https://") || value.startsWith("http://"))
        return value;
      return `https://t.me/${value.replace("@", "").replace("t.me/", "")}`;
    }),
  fundManagerXHandle: z
    .string()
    .regex(/^@?[\w]+$/, "Enter a valid X handle")
    .transform((value) => (value.startsWith("@") ? value : `@${value}`)),
  fundManagerTelegramLink: z
    .string()
    .regex(
      /^(https?:\/\/)?(www\.)?t\.me\/[\w-]+$/,
      "Enter a valid Telegram link"
    )
    .transform((value) => {
      if (!value) return value;
      if (value.startsWith("https://") || value.startsWith("http://"))
        return value;
      return `https://t.me/${value.replace("@", "").replace("t.me/", "")}`;
    }),
});

const Form3: React.FC<Form3Props> = ({
  onNext, // Changed from onSubmit to onNext
  onPrevious,
  initialData,
  currentStep,
  totalSteps,
}) => {
  const formik = useFormik<Form3Values>({
    initialValues: {
      fundXHandle: initialData?.fundXHandle || "",
      fundTelegramLink: initialData?.fundTelegramLink || "",
      fundManagerXHandle: initialData?.fundManagerXHandle || "",
      fundManagerTelegramLink: initialData?.fundManagerTelegramLink || "",
    },
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      onNext({
        ...initialData,
        ...values,
      });
    },
  });

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formik.isValid) {
      // Touch all fields to show validation errors
      Object.keys(formik.values).forEach((field) => {
        formik.setFieldTouched(field, true);
      });
      return;
    }
    onNext(formik.values); // Changed from onSubmit to onNext
  };

  return (
    <div className="flex-1 space-y-2 md:space-y-4 min-w-sm max-w-md">
      <div className="flex items-center">
        <CircularArrowButton
          onClick={onPrevious}
          progress={currentStep / (totalSteps - 1)}
          className="mr-10"
        />
        <SectionHeading subheading="Enter social media information">
          Let's create your DAO (3/3)
        </SectionHeading>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <CustomInput
            name="fundXHandle"
            placeholder="@FundName"
            label="Fund's X Handle"
            value={formik.values.fundXHandle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fundXHandle && formik.errors.fundXHandle && (
            <div className="text-red-500 text-sm mt-1 pl-[51px]">
              {formik.errors.fundXHandle}
            </div>
          )}

          <CustomInput
            name="fundTelegramLink"
            placeholder="t.me/FundName"
            label="Fund's Telegram Link"
            value={formik.values.fundTelegramLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fundTelegramLink &&
            formik.errors.fundTelegramLink && (
              <div className="text-red-500 text-sm mt-1 pl-[51px]">
                {formik.errors.fundTelegramLink}
              </div>
            )}

          <CustomInput
            name="fundManagerXHandle"
            placeholder="@YourHandle"
            label="Fund Manager's X Handle"
            value={formik.values.fundManagerXHandle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fundManagerXHandle &&
            formik.errors.fundManagerXHandle && (
              <div className="text-red-500 text-sm mt-1 pl-[51px]">
                {formik.errors.fundManagerXHandle}
              </div>
            )}

          <CustomInput
            name="fundManagerTelegramLink"
            placeholder="t.me/YourUsername"
            label="Fund Manager's Telegram Link"
            value={formik.values.fundManagerTelegramLink}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.fundManagerTelegramLink &&
            formik.errors.fundManagerTelegramLink && (
              <div className="text-red-500 text-sm mt-1 pl-[51px]">
                {formik.errors.fundManagerTelegramLink}
              </div>
            )}
        </div>

        <CustomButton
          height="tall"
          onClick={handleSubmit}
          type="button"
          className="w-full"
        >
          Next
        </CustomButton>
      </form>
    </div>
  );
};

export default Form3;
