import { useEffect, useState } from "react";
import { IWordRes } from "../../../../../api/word";

const useWordsList = (wordList?: IWordRes[]) => {
  const [category, setCategory] = useState<string>("ALL");
  const [filteredWords, setFilteredWords] = useState<IWordRes[] | undefined>(wordList);

  useEffect(() => {
    if (category === "ALL") {
      setFilteredWords(wordList);
    } else {
      setFilteredWords(
        wordList?.filter((word) => {
          console.log(word.category_id, category);  
          return word.category_id === Number(category)}),
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
