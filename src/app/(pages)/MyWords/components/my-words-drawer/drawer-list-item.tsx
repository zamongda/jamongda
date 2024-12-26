import React from "react";
import { css, sva } from "@styled-system/css";

interface IDrawerListItemProps {
  word: string;
  meaning: string;
  handleModify: () => void;
  handleDelete: () => void;
}

const DrawerListItem = ({
  word,
  meaning,
  handleModify,
  handleDelete,
}: IDrawerListItemProps) => {
  const wordsListItemStyle = WordsListItemSva();
  return (
    <li className={wordsListItemStyle.item}>
      <div>
        <div className={wordsListItemStyle.word}>{word}</div>
        <div className={wordsListItemStyle.meaning}>{meaning}</div>
      </div>
      <div className={wordsListItemStyle.buttonWrapper}>
        <button onClick={handleModify}>
          <img
            src="/icons/icon-pencil.svg"
            alt="수정"
            className={css({ w: "18px" })}
          />
        </button>
        <button onClick={handleDelete}>
          <img src="/icons/icon-close.svg" alt="삭제" />
        </button>
      </div>
    </li>
  );
};

export default React.memo(DrawerListItem);

const WordsListItemSva = sva({
  slots: ["item", "word", "meaning", "buttonWrapper"],
  base: {
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pr: "10px",
    },
    word: {
      textStyle: "Text-20-M",
    },
    meaning: {
      textStyle: "Text-16-M",
      color: "gray.05",
    },
    buttonWrapper: {
      display: "flex",
      gap: "12px",
    },
  },
});
