"use client";

import { getWords } from "../../../api/word";

export const useMyWords = async () => {
  try {
    const { data: myWords } = await getWords({});

    if (!myWords) {
      return [];
    }

    return JSON.parse(myWords);
  } catch (e) {
    console.error(e);
  }
};

export const useMemorizedWords = async () => {
  try {
    const { data: memorizedWords } = await getWords({
      is_memorized: true,
    });

    if (!memorizedWords) {
      return [];
    }

    return JSON.parse(memorizedWords);
  } catch (e) {
    console.error(e);
  }
};

export const useTodayMemorizedWords = async () => {
  try {
    const { data: todayMemorizedWords } = await getWords({
      is_memorized: true,
      memory_date: new Date().toLocaleDateString(),
    });

    if (!todayMemorizedWords) {
      return [];
    }

    return JSON.parse(todayMemorizedWords);
  } catch (e) {
    console.error(e);
  }
};
