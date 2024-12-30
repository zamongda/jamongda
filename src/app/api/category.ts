import { getUserInClient } from "./get-client-user";
import { createClient } from "./supabase/create-client";

const supabase = createClient();

export const addCategory = async (name: string) => {
  const { user, error: userError } = await getUserInClient();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const { error } = await supabase
    .from("category")
    .insert([{ category_name: name, user_id: userId }])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const deleteCategory = async (id: number) => {
  const { user, error: userError } = await getUserInClient();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const { error } = await supabase.from("category").delete().eq("id", id);
  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const getCategories = async () => {
  const { user, error: userError } = await getUserInClient();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const { data, error } = await supabase
    .from("category")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return { data: data ? JSON.stringify(data) : "" };
};
