"use client";

import { createContext, useContext } from "react";

const AuthContext = createContext<{ isLogin: boolean } | undefined>(undefined);

export const AuthProvider = ({
  children,
  isLogin,
}: {
  children: React.ReactNode;
  isLogin: boolean;
}) => {
  return (
    <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(AuthContext);

  return {
    isLogin: context?.isLogin,
  };
};
