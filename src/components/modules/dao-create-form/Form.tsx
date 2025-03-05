import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { type DaoFormData } from "@/validation/dao.validation";
import { CSVRow } from "@/utils/csv";
import Form1 from "./form-1";
import Form2 from "./form-2";
import Form3 from "./form-3";

interface IData extends DaoFormData {
  whitelist: CSVRow[];
  logoFile: File | null;
  userName: string;
  userXHandle: string;
  fundName: string;
  fundTicker: string;
  fundDescription: string;
  fundXHandle?: string;
  fundTelegramLink?: string;
  fundManagerXHandle?: string;
  fundManagerTelegramLink?: string;
}

interface Props {
  onSubmit: (data: IData) => void;
  address?: string;
}

const DAOForm: React.FC<Props> = ({ address = "", onSubmit }) => {
  const { data: sessionData } = useSession();

  const [formData, setFormData] = useState<Partial<IData>>({
    walletAddress: address,
    userXHandle: sessionData?.user?.name || "",
  });
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleFileChange = (file: File) => {
    setPosterFile(file);
    setFormData((prev) => ({
      ...prev,
      logoFile: file,
    }));
  };

  // Handle form progression
  const handleNext = (stepData: Partial<IData>) => {
    // Merge the new data with existing data
    const updatedData = {
      ...formData,
      ...stepData,
    };
    setFormData(updatedData);
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (finalStepData: Partial<IData>) => {
    const combinedData = {
      ...formData,
      ...finalStepData,
      walletAddress: address,
      logoFile: posterFile,
    } as IData;

    console.log("Final Submit Data:", combinedData);
    onSubmit(combinedData);
  };

  // Render the current step
  const renderStep = () => {
    const totalSteps = 3; // Changed from 4 to 3

    switch (currentStep) {
      case 0:
        return (
          <Form1
            onNext={handleNext}
            initialData={formData}
            onFileChange={handleFileChange}
          />
        );
      case 1:
        return (
          <Form2
            onNext={handleNext}
            onPrevious={handlePrevious}
            initialData={formData}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      case 2:
        return (
          <Form3
            onNext={handleSubmit} // Changed to handleSubmit for the final step
            onPrevious={handlePrevious}
            initialData={formData}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="min-h-[400px]">{renderStep()}</div>
    </div>
  );
};

export default DAOForm;
