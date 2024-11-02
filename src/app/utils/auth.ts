"use server";

import { createClient } from "./supabase/create-client";

const supabase = createClient();

export const signUp = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  // 회원가입 후에 이메일 인증을 위한 이메일이 발송됩니다.
  // 이메일 인증을 완료하면 로그인이 가능합니다.

  return { data, error };
};

export const login = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // 서버에서 클라이언트로 데이터를 넘겨줄 객체를 넘길수 없다는 에러가 떠서
  // JSON.stringify를 사용하여 문자열로 변환
  return { data: JSON.stringify(data), error: JSON.stringify(error) };
};

export const getUser = async () => {
  const {
    data,
    error,
  } = await supabase.auth.getSession();

  return { user: data.session?.user, error };
};
