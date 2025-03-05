"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SectionHeading from "@/components/landingpage/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Form1 from "@/components/modules/dao-create-form/form-1";
import Form2 from "@/components/modules/dao-create-form/form-2";
import Form3 from "@/components/modules/dao-create-form/form-3";
import Form4 from "@/components/modules/dao-create-form/form-4";
import DAOForm from "@/components/modules/dao-create-form/Form";

// Developer tools page for easy form testing without wallet connections
export default function BlauDevTools() {
  const [formData, setFormData] = useState<any>({});
  const [activeForm, setActiveForm] = useState<number>(0);

  // Handlers for all forms
  const handleNext = (data: any) => {
    console.log("Form data received:", data);
    setFormData((prev) => ({ ...prev, ...data }));
    setActiveForm((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevious = () => {
    setActiveForm((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = (data: any) => {
    const finalData = { ...formData, ...data };
    console.log("Final form submission:", finalData);
    alert("Form submitted! Check console for data");
  };

  const handleFileChange = (file: File) => {
    console.log("File selected:", file.name);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-2">
          Developer Testing Environment
        </h1>
        <p className="text-gray-500">
          Test forms without authentication or wallet connections
        </p>
      </div>

      <Tabs defaultValue="individual" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="individual">Individual Forms</TabsTrigger>
          <TabsTrigger value="complete">Complete Flow</TabsTrigger>
        </TabsList>

        <TabsContent value="individual" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Individual Form Testing</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="form1">
                <TabsList>
                  <TabsTrigger value="form1">Form 1</TabsTrigger>
                  <TabsTrigger value="form2">Form 2</TabsTrigger>
                  <TabsTrigger value="form3">Form 3</TabsTrigger>
                  <TabsTrigger value="form4">Form 4</TabsTrigger>
                </TabsList>

                <TabsContent value="form1" className="mt-6">
                  <div className="border p-6 rounded-lg">
                    <Form1
                      onNext={handleNext}
                      initialData={formData}
                      onFileChange={handleFileChange}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="form2" className="mt-6">
                  <div className="border p-6 rounded-lg">
                    <Form2
                      onNext={handleNext}
                      onPrevious={handlePrevious}
                      initialData={formData}
                      currentStep={1}
                      totalSteps={4}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="form3" className="mt-6">
                  <div className="border p-6 rounded-lg">
                    <Form3
                      onNext={handleNext}
                      onPrevious={handlePrevious}
                      initialData={formData}
                      currentStep={2}
                      totalSteps={4}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="form4" className="mt-6">
                  <div className="border p-6 rounded-lg">
                    <Form4
                      onSubmit={handleSubmit}
                      onPrevious={handlePrevious}
                      initialData={formData}
                      currentStep={3}
                      totalSteps={4}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="complete">
          <Card>
            <CardHeader>
              <CardTitle>Complete Form Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border p-6 rounded-lg">
                <DevDAOForm />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Current Form Data:</h3>
        <pre className="bg-gray-800 text-white p-4 rounded text-sm overflow-auto max-h-96">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

// Special version of the DAOForm component for development testing
const DevDAOForm = () => {
  const handleSubmit = (data: any) => {
    console.log("Complete form submission:", data);
    alert("Form submitted! Check console for data");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <SectionHeading subheading="Development Testing Mode">
        DAO Creation Form
      </SectionHeading>
      <p className="text-gray-500 mb-6">
        All form data will be logged to console instead of being submitted
      </p>

      <DAOForm onSubmit={handleSubmit} address="0x123456789DevWalletAddress" />
    </div>
  );
};
