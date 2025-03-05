"use client";

import SectionHeading from "@/components/landingpage/section-heading";
import React from "react";
import { CustomInput } from "./custom-input";
import { useFormik } from "formik";
import { CustomButton } from "./custom-button";
import CircularArrowButton from "./circular-arrow-button";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Form2Props {
  onNext: (values: Form2Values) => void;
  onPrevious: () => void;
  initialData: Partial<Form2Values>;
  currentStep: number;
  totalSteps: number;
}

interface Form2Values {
  fundName: string;
  fundTicker: string;
  fundDescription: string;
}

const validationSchema = z.object({
  fundName: z.string().min(1, "Fund name is required"),
  fundTicker: z.string().min(1, "Fund ticker is required"),
  fundDescription: z.string().min(1, "Fund description is required"),
});

const Form2: React.FC<Form2Props> = ({
  onNext,
  onPrevious,
  initialData,
  currentStep,
  totalSteps,
}) => {
  const formik = useFormik<Form2Values>({
    initialValues: {
      fundName: initialData?.fundName || "",
      fundTicker: initialData?.fundTicker || "",
      fundDescription: initialData?.fundDescription || "",
    },
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      onNext(values);
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
    onNext(formik.values);
  };

  return (
    <div className="flex-1 space-y-2 md:space-y-4 min-w-sm max-w-md">
      <div className="flex items-center">
        <CircularArrowButton
          onClick={onPrevious}
          progress={currentStep / (totalSteps - 1)}
          className="mr-10"
        />
        <SectionHeading subheading="Enter your fund details">
          Let's create your DAO (2/3)
        </SectionHeading>
      </div>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="space-y-4 w-full">
          <CustomInput
            name="fundName"
            label="Fund Name"
            placeholder="Type Your Fund Name"
            value={formik.values.fundName}
            onChange={formik.handleChange}
          />
          <CustomInput
            name="fundTicker"
            label="Fund Ticker"
            placeholder="Type Your Fund Ticker..."
            value={formik.values.fundTicker}
            onChange={formik.handleChange}
          />
          <CustomInput
            name="fundDescription"
            label="Fund Description"
            placeholder="Type Your Fund Description"
            value={formik.values.fundDescription}
            onChange={formik.handleChange}
            isTextArea={true}
            rows={6}
            className="mb-2"
          />
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

export default Form2;
