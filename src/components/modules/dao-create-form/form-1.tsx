"use client";

import SectionHeading from "@/components/landingpage/section-heading";
import React, { useState, useRef, useEffect } from "react";
import { CustomInput } from "./custom-input";
import { useFormik } from "formik";
import { CustomButton } from "./custom-button";
import Image from "next/image";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

interface Form1Props {
  onNext: (values: Form1Values) => void;
  initialData: Partial<Form1Values>;
  onFileChange: (file: File) => void;
}

interface Form1Values {
  userName: string;
  userXHandle: string;
  logoFile: File | null;
}

const validationSchema = z.object({
  userName: z.string().min(1, "Name is required"),
  userXHandle: z.string().min(1, "X Handle is required"),
  logoFile: z
    .custom<File>()
    .refine((file) => file instanceof File, "A logo image is required")
    .refine(
      (file) => file instanceof File && file.size <= 4 * 1024 * 1024,
      "File is too large, max 4MB allowed"
    )
    .refine(
      (file) =>
        file instanceof File &&
        ["image/jpeg", "image/png", "image/svg+xml"].includes(file.type),
      "Unsupported file format. Use JPEG, PNG or SVG"
    ),
});

const Form1: React.FC<Form1Props> = ({ onNext, initialData, onFileChange }) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik<Form1Values>({
    initialValues: {
      userName: initialData?.userName || "",
      userXHandle: initialData?.userXHandle || "",
      logoFile: null,
    },
    validationSchema: toFormikValidationSchema(validationSchema),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      formik.setFieldValue("logoFile", file);
      onFileChange(file);

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (formik.isValid) {
      const values = {
        ...formik.values,
        logoFile: formik.values.logoFile,
      };
      onNext(values);
      onFileChange(formik.values.logoFile as File);
    }
  };

  return (
    <div className="flex-1 space-y-2 md:space-y-4  min-w-sm max-w-md">
      <SectionHeading subheading="Enter your basic information">
        Let's create your DAO (1/3)
      </SectionHeading>

      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div className="space-y-4">
          <CustomInput
            name="userName"
            label="Your Name"
            placeholder="Type your name"
            value={formik.values.userName}
            onChange={formik.handleChange}
          />
          <CustomInput
            name="userXHandle"
            label="Your X Handle"
            placeholder="@YourTwitterHandle"
            value={formik.values.userXHandle}
            onChange={formik.handleChange}
          />

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/jpeg,image/png,image/svg+xml"
            className="hidden"
            data-testid="logo-file-input"
          />

          {/* Upload area */}
          <div
            onClick={triggerFileInput}
            className="w-[844px] h-[336px] pt-12 pb-[70px] bg-[#f8f8f8] rounded-[20px] border-2 border-black/20 flex-col justify-start items-center gap-[65px] inline-flex overflow-hidden cursor-pointer hover:bg-[#f0f0f0] transition-colors max-w-full relative"
          >
            {previewUrl ? (
              <div className="w-full h-full relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={previewUrl}
                    alt="Logo preview"
                    layout="fill"
                    objectFit="contain"
                    className="p-8"
                  />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center text-[#9e9e9e] bg-white/80 py-2">
                  Click to change image
                </div>
              </div>
            ) : (
              <>
                <div data-svg-wrapper>
                  <svg
                    width="129"
                    height="129"
                    viewBox="0 0 129 129"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_185_488)">
                      <path
                        d="M41.7119 35.751L56.6592 20.7985L56.772 94.0674C56.772 98.52 60.3816 102.13 64.8342 102.13C69.2868 102.13 72.8963 98.52 72.8963 94.0674L72.7835 20.89L87.6448 35.7513C90.7381 38.954 95.842 39.0427 99.0447 35.9493C102.247 32.856 102.336 27.7521 99.2427 24.5494C99.1777 24.4822 99.1117 24.4162 99.0447 24.3514L81.7808 7.08757C72.3355 -2.358 57.0215 -2.358 47.5759 7.08731L47.5756 7.08757L30.3121 24.3512C27.2187 27.5538 27.3074 32.6577 30.5101 35.751C33.6344 38.7686 38.5876 38.7686 41.7119 35.751Z"
                        fill="#9C9C9C"
                        fillOpacity="0.4"
                      />
                      <path
                        d="M120.935 77.939C116.483 77.939 112.873 81.5486 112.873 86.0012V110.677C112.87 111.889 111.888 112.872 110.675 112.875H18.3254C17.1126 112.872 16.13 111.889 16.1272 110.677V86.0012C16.1272 81.5486 12.5177 77.939 8.06508 77.939C3.61251 77.939 0.00292969 81.5486 0.00292969 86.0012V110.677C0.014771 120.791 8.21121 128.987 18.3254 128.999H110.675C120.789 128.987 128.985 120.791 128.997 110.677V86.0012C128.997 81.5486 125.388 77.939 120.935 77.939Z"
                        fill="#9C9C9C"
                        fillOpacity="0.4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_185_488">
                        <rect width="129" height="129" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-[#9e9e9e]/80 text-[32px] font-normal font-['Gilroy-Medium'] leading-normal">
                  [max 4MB]
                </div>
              </>
            )}
          </div>

          {formik.touched.logoFile && formik.errors.logoFile && (
            <div className="text-red-500 mt-2">{formik.errors.logoFile}</div>
          )}
        </div>

        <CustomButton
          height="tall"
          onClick={handleSubmit}
          type="button"
          disabled={!formik.values.logoFile || formik.isSubmitting}
          className={
            !formik.values.logoFile || formik.isSubmitting
              ? "opacity-70 cursor-not-allowed w-full"
              : "w-full"
          }
        >
          Next
        </CustomButton>
      </form>
    </div>
  );
};

export default Form1;
