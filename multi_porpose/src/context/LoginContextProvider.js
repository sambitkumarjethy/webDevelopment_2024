import React, { useState, createContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userDetail, setUserDetails] = useState(true);
  return <LoginContext.Provider value={true}>{children}</LoginContext.Provider>;
};

export default LoginContextProvider;
