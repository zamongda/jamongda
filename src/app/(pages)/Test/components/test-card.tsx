"use client";

import { use } from "react";
import { css, sva } from "@styled-system/css";
import { IWordRes } from "../../../api/word";

const TestCard = ({
  allWordsData,
  currentIndex,
}: {
  allWordsData: Promise<IWordRes[]>;
  currentIndex: number;
}) => {
  const allWords = use(allWordsData);
  const currentWord = allWords[currentIndex];

  return (
    <div className={testStyle.card}>
      <div className={css({ textStyle: "Text-28-B" })}>{currentWord.en}</div>
      <span className={testStyle.count}>
        {currentIndex + 1} / {allWords?.length}
      </span>
    </div>
  );
};

export default TestCard;

const TestSva = sva({
  slots: ["card", "count"],
  base: {
    card: {
      w: "100%",
      minH: "12.5rem",
      bgColor: "white",
      borderRadius: "1.875rem",
      boxShadow: "0rem .25rem .625rem 0rem rgba(0, 0, 0, 0.1)",
      pos: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: "1.25rem",
    },

    count: {
      textStyle: "Text-12-M",
      color: "gray.05!",
      pos: "absolute",
      right: "1.25rem",
      bottom: "1.25rem",
    },
  },
});
const testStyle = TestSva();
