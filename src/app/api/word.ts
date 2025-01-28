"use client";

import { getUserInClient } from "./get-client-user";
import { createClient } from "./supabase/create-client";

export interface IGetWordsArgs {
  category_id?: string;
  is_memorized?: boolean;
  memory_date?: string;
}

export interface IWordRes {
  id: number;
  user_id: string;
  en: string;
  ko: string;
  category_id?: number;
  is_memorized: boolean;
  memory_date?: string;
  created_at: string;
}

const supabase = createClient();

export const getWords = async (conditions: IGetWordsArgs) => {
  const { user, error: userError } = await getUserInClient();
  if (userError) {
    throw new Error(userError.message);
  }
  if (!user?.id) {
    throw new Error("User not found");
  }

  let query = supabase.from("words").select("*").eq("user_id", user?.id).order("created_at", { ascending: false });

  for (const key in conditions) {
    query = query.eq(key, conditions[key as keyof IGetWordsArgs]);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(error.message);
  }

  return { data: data ? JSON.stringify(data) : "" };
};

export const addWord = async (
  words: { ko: string; en: string; category_id?: number }[],
) => {
  const { user, error: userError } = await getUserInClient();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const newWordsArray = words.map((word) => {
    return { ...word, user_id: userId };
  });

  const { error } = await supabase.from("words").insert(newWordsArray).select();

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const deleteWord = async (id: number) => {
  const { user, error: userError } = await getUserInClient();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const { error } = await supabase
    .from("words")
    .delete()
    .eq("id", id)
    .eq("user_id", userId).select();

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const modifyWord = async (
  id: number,
  word: { en: string; ko: string },
) => {
  const { user, error: userError } = await getUserInClient();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const { error } = await supabase
    .from("words")
    .update(word)
    .eq("id", id)
    .eq("user_id", userId)
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const finishTest = async (ids: string[]) => {
  const { user, error: userError } = await getUserInClient();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const { data, error } = await supabase
    .from("words")
    .update({
      is_memorized: true,
      memory_date: new Date().toLocaleDateString(),
    })
    .in("id", ids)
    .eq("user_id", userId);

  console.log(data, error);
  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};
