import { createClient } from "./supabase/create-client";

const supabase = createClient();

export const getUserInClient = async () => {
  const { data, error } = await supabase.auth.getUser();

  return { user: data.user, error };
};
