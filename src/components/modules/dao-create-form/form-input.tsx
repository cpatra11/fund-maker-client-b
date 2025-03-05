import React, { HTMLInputTypeAttribute, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import DatePicker from "@/components/molecules/DatePicker";
import { getLabel } from "@/utils/formatters";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type InputSize = "default" | "sm" | "lg" | "xl";

interface BaseFormProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  formik?: any;
  disabled?: boolean;
  className?: string;
  size?: InputSize;
  variant?: "default" | "outline" | "dark";
  showLabel?: boolean;
}

interface FormInputProps extends BaseFormProps {
  type?: HTMLInputTypeAttribute | "textarea";
}

interface FormSelectProps extends BaseFormProps {
  options: { key: string; value: string | number }[];
}

interface FormCompactInputProps extends BaseFormProps {
  type?: HTMLInputTypeAttribute;
}

const getSizeClassNames = (size: InputSize = "default") => {
  switch (size) {
    case "sm":
      return "h-12 md:h-14 px-4 py-2 text-base md:text-lg";
    case "lg":
      return "h-18 md:h-22 px-8 py-5 text-lg md:text-xl";
    case "xl":
      return "h-20 md:h-24 px-8 py-5 text-3xl md:text-4xl";
    default:
      return "h-14 md:h-16 px-6 py-4 text-base md:text-lg";
  }
};

const getVariantClassNames = (variant: string = "default") => {
  switch (variant) {
    case "outline":
      return "bg-transparent border-2 border-white/20 text-white";
    case "dark":
      return "bg-gray-900 border-2 border-gray-700 text-white";
    default:
      return "bg-white rounded-[20px] border-2 border-black/20 text-black";
  }
};

const getFormFieldClassNames = (formik: any, name: string) =>
  cn(
    "w-full bg-white/5 text-white",
    formik.errors[name] && formik.touched[name]
      ? "border-red-500 bg-red-800/10"
      : ""
  );

const FormField: React.FC<{ formik: any; name: string }> = ({
  formik,
  name,
}) => {
  const hasError = useMemo(
    () => formik.errors[name] && formik.touched[name],
    [formik.errors[name], formik.touched[name], name]
  );

  if (!hasError) return null;
  return <p className="text-red-500 text-sm">{String(formik.errors[name])}</p>;
};

const FormWrapper: React.FC<{ children: React.ReactNode } & BaseFormProps> = ({
  children,
  name,
  label,
  required = true,
  showLabel = true,
}) => {
  const displayLabel = useMemo(() => label ?? getLabel(name), [label, name]);

  if (!showLabel) return <>{children}</>;

  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="text-muted">
        {displayLabel}
        {required && <span className="text-red-500">*</span>}
      </Label>
      {children}
    </div>
  );
};

const FormInput: React.FC<FormCompactInputProps> = ({
  name,
  label,
  placeholder = "",
  type = "text",
  required = true,
  formik,
  disabled = false,
  className = "",
  size = "lg",
  variant = "default",
  showLabel = true,
}) => {
  const fieldClassNames = useMemo(
    () =>
      cn(
        "w-full font-bold font-gbold uppercase focus:outline-none focus:ring-2 focus:ring-black/30 caret-black caret-[0.5em] rounded-[20px]",
        getSizeClassNames(size),
        getVariantClassNames(variant),
        formik.errors[name] && formik.touched[name] ? "border-red-500" : "",
        className
      ),
    [formik.errors[name], formik.touched[name], name, size, variant, className]
  );

  return (
    <FormWrapper
      name={name}
      label={label}
      required={required}
      showLabel={showLabel}
    >
      <div className="relative">
        <Input
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          disabled={disabled || formik.isSubmitting}
          autoComplete="off"
          type={type}
          className={fieldClassNames}
          style={{ caretWidth: "1px", caretColor: "black" }}
          onWheel={(e) =>
            type === "number" &&
            e.target instanceof HTMLElement &&
            e.target.blur()
          }
        />
      </div>
      <FormField formik={formik} name={name} />
    </FormWrapper>
  );
};

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  label,
  placeholder = "",
  required = true,
  formik,
  disabled = false,
  options,
  className = "",
  size = "default",
  variant = "default",
  showLabel = true,
}) => {
  const baseClassNames = useMemo(
    () => getFormFieldClassNames(formik, name),
    [formik.errors[name], formik.touched[name], name]
  );

  const fieldClassNames = cn(
    baseClassNames,
    getSizeClassNames(size),
    getVariantClassNames(variant),
    className
  );

  const memoizedOptions = useMemo(
    () =>
      options.map((option) => (
        <SelectItem key={option.key} value={String(option.value)}>
          {option.key}
        </SelectItem>
      )),
    [options]
  );

  return (
    <FormWrapper
      name={name}
      label={label}
      required={required}
      showLabel={showLabel}
    >
      <Select
        onValueChange={(value) => formik.setFieldValue(name, value)}
        defaultValue={formik.values[name]}
        disabled={disabled || formik.isSubmitting}
      >
        <SelectTrigger className={fieldClassNames}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>{memoizedOptions}</SelectContent>
      </Select>
      <FormField formik={formik} name={name} />
    </FormWrapper>
  );
};

export { FormInput, FormSelect, FormField, FormWrapper };
