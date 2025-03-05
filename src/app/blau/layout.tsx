import React from "react";

export default function BlauLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="fixed top-0 left-0 right-0 bg-emerald-600 text-white p-2 text-center text-sm">
        Developer Testing Mode - No Authentication Required
      </div>
      <div className="pt-8">{children}</div>
    </div>
  );
}
