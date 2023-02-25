import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  const [token, setToken] = useState(null);
  const loginUser = (token) => {
    setToken(token);
    setisAuth(true);
  };
  const logoutUser = () => {
    setToken("");
    setisAuth(false);
  };
  return (
    <AuthContext.Provider
      value={{ token ,loginUser, logoutUser, isAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
