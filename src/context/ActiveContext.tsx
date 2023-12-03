"use client";
import { createContext, useState, useContext } from "react";

type ActiveContextType = {
  isActive: boolean;
  setInactive: () => void;
  setActive: () => void;
};
const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

export const ActiveProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(true);

  const setInactive = () => {
    setIsActive(false);
  };

  const setActive = () => {
    setIsActive(true);
  };

  return (
    <ActiveContext.Provider value={{ isActive, setInactive, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};

export const useActive = () => {
  const context = useContext(ActiveContext);
  if (!context) {
    throw new Error("useActive must be used within an ActiveProvider");
  }
  return context;
};
