"use server";

import { createServerSupabaseClient } from "./supabase/server-client";

export const signUp = async (email: string, password: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  // 회원가입 후에 이메일 인증을 위한 이메일이 발송됩니다.
  // 이메일 인증을 완료하면 로그인이 가능합니다.

  return { data: JSON.stringify(data), error: JSON.stringify(error) };
};

export const login = async (email: string, password: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  // 서버에서 클라이언트로 데이터를 넘겨줄 객체를 넘길수 없다는 에러가 떠서
  // JSON.stringify를 사용하여 문자열로 변환
  return { data: JSON.stringify(data), error: JSON.stringify(error) };
};

export const resetPassword = async (email: string) => {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_URL}/resetPassword`,
  });

  return { error: JSON.stringify(error) };
};

export const updatePassword = async (password: string) => {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.updateUser({ password });

  return { error: JSON.stringify(error) };
};

export const getUser = async () => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.auth.getUser();

  return { user: JSON.stringify(data.user), error: JSON.stringify(error) };
};

export const logout = async () => {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.auth.signOut();

  if (error) alert("잠시 후 다시 시도해주세요.");

  return {};
};
