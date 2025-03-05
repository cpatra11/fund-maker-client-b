"use client";

import React, { createContext, useContext, ReactNode } from "react";

// Mock session data for development testing
const mockSession = {
  data: {
    user: {
      id: "dev-user-id",
      name: "Developer Test User",
      email: "dev@example.com",
      username: "devuser",
      image: "https://avatars.githubusercontent.com/u/1234567?v=4",
    },
    expires: "2099-12-31T23:59:59.999Z",
  },
  status: "authenticated",
  update: () => Promise.resolve(mockSession.data),
};

// Mock wallet data for development testing
const mockWallet = {
  account: {
    address: "0xDev1234567890AbcdefDevelopmentWalletAddressForTesting",
    publicKey: "0xDevPublicKeyForTesting",
  },
  connected: true,
  connect: () => Promise.resolve(),
  disconnect: () => Promise.resolve(),
  signMessage: () => Promise.resolve({ signature: "mock-signature" }),
};

// Create contexts for the mocks
const MockSessionContext = createContext<any>(null);
const MockWalletContext = createContext<any>(null);

// Provider component
export const MockProvidersWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <MockSessionContext.Provider value={mockSession}>
      <MockWalletContext.Provider value={mockWallet}>
        {children}
      </MockWalletContext.Provider>
    </MockSessionContext.Provider>
  );
};

// Custom hooks to use the mock values
export const useMockSession = () => useContext(MockSessionContext);
export const useMockWallet = () => useContext(MockWalletContext);

// Helper to detect if we're in the /blau route
export const useIsDevelopmentRoute = () => {
  if (typeof window !== "undefined") {
    return window.location.pathname.startsWith("/blau");
  }
  return false;
};
