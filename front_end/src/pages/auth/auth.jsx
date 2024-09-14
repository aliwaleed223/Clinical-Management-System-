import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const authcontext = createContext(null);

export const ContextProvider = ({ children }) => {
  const navigate = useNavigate(); // Fixed naming

  const [user, setUser] = useState("");
  
  const login = (user) => {
    setUser(user);
    if (user!== "") {
        console.log(typeof user);
        // console.log(user.split(" "));
      navigate("/", { replace: true }); // Fixed the `navigate` usage

    }
else{console.log("error")}
  };

  const logout = () => {
    setUser("");
    navigate("/login"); // No need to use `{replace: true}` here unless you want to.
  };

  return (
    <authcontext.Provider value={{ user, login, logout }}>
      {children}
    </authcontext.Provider>
  );
};

export const Auth = () => {
  return useContext(authcontext);
};
