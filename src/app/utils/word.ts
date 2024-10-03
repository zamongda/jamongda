'use server';

import { getUser } from './auth';
import { createClient } from './supabase/create-client';

const supabase = createClient();

export const getWords = async () => {
	const { user, error: userError } = await getUser();
	if (userError) {
		throw new Error(userError.message);
	}
	if (!user?.id) {
		throw new Error('User not found');
	}
	const { data, error } = await supabase
		.from('words')
		.select('*')
		.eq('user_id', user?.id);

	if (error) {
		throw new Error(error.message);
	}

	return { data: data ? JSON.stringify(data) : '' };
};

export const addWord = async (
	words: { ko: string; en: string; category?: string }[]
) => {
	const { user, error: userError } = await getUser();
	const userId = user?.id;

	if (userError) {
		throw new Error(userError.message);
	}
	if (!userId) {
		throw new Error('User not found');
	}

	const newWordsArray = words.map((word) => {
		return { ...word, user_id: userId };
	});

	const { error } = await supabase.from('words').insert(newWordsArray);

	if (error) {
		throw new Error(error.message);
	}

	return { success: true };
};

export const deleteWord = async (id: string) => {
	const { user, error: userError } = await getUser();
	const userId = user?.id;

	const { error } = await supabase
		.from('words')
		.delete()
		.eq('id', id)
		.eq('user_id', userId);

	if (userError) {
		throw new Error(userError.message);
	}
	if (!userId) {
		throw new Error('User not found');
	}

	if (error) {
		throw new Error(error.message);
	}

	return { success: true };
};
