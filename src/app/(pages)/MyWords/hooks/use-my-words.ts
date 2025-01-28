"use client";
import useWords from "../../../hooks/use-words";

export const useMemorizedWords = () => {
return useWords({
  is_memorized: true,
})
};

export const useTodayMemorizedWords = () => {
  return useWords({
    is_memorized: true,
    memory_date: new Date().toISOString().split("T")[0],
  })
};
