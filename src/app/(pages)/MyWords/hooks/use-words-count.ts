import { getCategories } from "../../../api/category";
import { getWords } from "../../../api/word";

export const useMyWordsCount = async () => {
  const { data: myWords } = await getWords({});

  if (!myWords) {
    return 0;
  }

  return JSON.parse(myWords).length;
};

export const useMemorizedWordsCount = async () => {
  const { data: memorizedWords } = await getWords({
    is_memorized: true,
  });

  if (!memorizedWords) {
    return 0;
  }

  return JSON.parse(memorizedWords).length;
};

export const useTodayMemorizedWordsCount = async () => {
  const { data: todayMemorizedWords } = await getWords({
    is_memorized: true,
    memory_date: new Date().toLocaleDateString(),
  });

  if (!todayMemorizedWords) {
    return 0;
  }

  return JSON.parse(todayMemorizedWords).length;
};

export const useCategoryCount = async () => {
  const list = await getCategories();

  return JSON.parse(list.data).length;
};
