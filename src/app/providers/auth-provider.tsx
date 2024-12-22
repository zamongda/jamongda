"use client";

import { createContext, useContext } from "react";

interface IuserData {
  id: string;
  email?: string;
}

const AuthContext = createContext<
  { isLogin: boolean; userData?: IuserData | null } | undefined
>(undefined);

export const AuthProvider = ({
  children,
  isLogin,
}: {
  children: React.ReactNode;
  isLogin: boolean;
  userData?: IuserData | null;
}) => {
  return (
    <AuthContext.Provider value={{ isLogin }}>{children}</AuthContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(AuthContext);

  return {
    isLogin: context?.isLogin,
    userData: context?.userData,
  };
};
