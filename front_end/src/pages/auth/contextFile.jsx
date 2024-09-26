import React, { createContext ,useState,useEffect} from "react";

export const ClinicalContext = createContext(null);

const ClinicalContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    

    if (savedToken) setToken(savedToken);
    
  }, []);
  const handleLogin = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };
  const value = {token,username:localStorage.getItem('username'),handleLogin};
  
  return (
    <ClinicalContext.Provider value={value}>
      {children}
    </ClinicalContext.Provider>
  );
};

export default ClinicalContextProvider;
