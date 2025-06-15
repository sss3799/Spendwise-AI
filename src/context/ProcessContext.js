import React, { createContext, useContext, useState } from "react";

const ProcessContext = createContext();

export const ProcessProvider = ({ children }) => {
  const [isProcessed, setIsProcessed] = useState(false);
  return (
    <ProcessContext.Provider value={{ isProcessed, setIsProcessed }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const useProcess = () => useContext(ProcessContext);
