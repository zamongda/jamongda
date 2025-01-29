'use client';

import { useEffect, useMemo, useState } from "react";
import { getWords, IGetWordsArgs, IWordRes } from "../api/word";

const useWords = (args?:IGetWordsArgs) => {
const [words, setWords] = useState<IWordRes[]>();

// eslint-disable-next-line react-hooks/exhaustive-deps
const memoizedArgs = useMemo(() => args, [JSON.stringify(args)]);

const fetchWords = async () => {
  try {
    const { data: myWords } = await getWords({...memoizedArgs});

    if (!myWords) {
      return;
    }

    setWords(JSON.parse(myWords));
    return ;
  } catch (e) {
    console.error(e);
  }
}


useEffect(() => {
    fetchWords();
  }, []);

  return {words, refetch: fetchWords};
}

export default useWords;