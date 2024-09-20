import React, { createContext } from "react";

export const ClinicalContext = createContext(null);

const ClinicalContextProvider = ({ children }) => {
  const value = {token:localStorage.getItem('token'),username:localStorage.getItem('username')};
  
  return (
    <ClinicalContext.Provider value={value}>
      {children}
    </ClinicalContext.Provider>
  );
};

export default ClinicalContextProvider;
