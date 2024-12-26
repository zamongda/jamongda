"use client";

import { getWords } from "../../../api/word";

export const useMyWords = async () => {
  const { data: myWords } = await getWords({});

  if (!myWords) {
    return 0;
  }

  return JSON.parse(myWords);
};

export const useMemorizedWords = async () => {
  const { data: memorizedWords } = await getWords({
    is_memorized: true,
  });

  if (!memorizedWords) {
    return 0;
  }

  return JSON.parse(memorizedWords);
};

export const useTodayMemorizedWords = async () => {
  const { data: todayMemorizedWords } = await getWords({
    is_memorized: true,
    memory_date: new Date().toLocaleDateString(),
  });

  if (!todayMemorizedWords) {
    return 0;
  }

  return JSON.parse(todayMemorizedWords);
};
