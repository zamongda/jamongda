"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getUser } from "../api/auth";

const AuthContext = createContext<{ isLogin: boolean } | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const checkIsLogin = await getUser();
      setIsLogin(!!checkIsLogin);
    };

    fetchUser();
  }, []);
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
