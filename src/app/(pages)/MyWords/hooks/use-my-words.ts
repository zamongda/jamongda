"use client";
import useWords from "../../../hooks/use-words";

export const useMemorizedWords = () => {
const {words} = useWords({
  is_memorized: true,
})

return words;
};

export const useTodayMemorizedWords = () => {
  const {words} =  useWords({
    is_memorized: true,
    memory_date: new Date().toISOString().split("T")[0],
  })

  return words;
};
