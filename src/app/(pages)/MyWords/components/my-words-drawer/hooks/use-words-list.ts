import { useEffect, useState } from "react";
import { IWordRes } from "../../../../../api/word";

const useWordsList = (wordList: IWordRes[]) => {
  const [category, setCategory] = useState<string>("ALL");
  const [filteredWords, setFilteredWords] = useState<IWordRes[]>(wordList);

  useEffect(() => {
    if (category === "ALL") {
      setFilteredWords(wordList);
    } else {
      setFilteredWords(
        wordList.filter((word) => word.category_id === category),
      );
    }
  }, [category, wordList]);

  return {
    category,
    setCategory,
    filteredWords,
  };
};

export default useWordsList;
