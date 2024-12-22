"use client";

import { createContext, useContext } from "react";
import { createClient } from "../api/supabase/create-client";

const AuthContext = createContext<{ isLogin: boolean } | undefined>(undefined);

export const AuthProvider = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const supabase = createClient();
  const getUser = async () => {
    const { data } = await supabase.auth.getUser();
    console.log(data.user);
    return data.user;
  };

  const isLogin = (await getUser()) ? true : false;

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
