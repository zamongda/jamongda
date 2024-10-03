'use server';

import { createClient } from './supabase/create-client';

const supabase = createClient();

export const signUp = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
	});

	return { data, error };
};

export const login = async (email: string, password: string) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	return { data, error };
};

export const getUser = async () => {
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	return { user, error };
};
