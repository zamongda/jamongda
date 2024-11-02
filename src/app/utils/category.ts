import { getUser } from "./auth";
import { createClient } from "./supabase/create-client";

const supabase = createClient();

export const addCategory = async (name: string) => {
  const { user, error: userError } = await getUser();
  const userId = user?.id;

  if (userError) {
    throw new Error(userError.message);
  }
  if (!userId) {
    throw new Error("User not found");
  }

  const { error } = await supabase
    .from("category")
    .insert([{ category_name: name, user_id: userId }]);

  if (error) {
    throw new Error(error.message);
  }

  return { success: true };
};

export const deleteCategory = async (id: string) => {
  const { user, error: userError } = await getUser();
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
