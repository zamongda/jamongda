"use client";

import Form from "@common/form/form";
import DrawerPopup from "@common/modal/drawer-popup";
import { useState } from "react";
import { css, sva } from "@styled-system/css";
import useMyWords from "../hooks/use-my-words";
import MyWordsCard from "./my-words-card";

const MyWords = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const { cardList } = useMyWords();

  const myWordsStyle = MyWordsSva();
  const wordsListStyle = WordsListSva();

  return (
    <>
      <div className={myWordsStyle.wrapper}>
        <div className={myWordsStyle.inner}>
          {cardList.map((card, idx) => {
            console.log(card, "card");
            return (
              <MyWordsCard
                key={idx}
                card={card}
                onClick={() => setModalOpen(true)}
              />
            );
          })}
        </div>
      </div>
      <DrawerPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
        <Form className={wordsSelectStyle}>
          <select name="wordsList" id="wordsList">
            <option value="all" selected>
              전체
            </option>
            <option value="business">비즈니스</option>
            <option value="conversation">회화</option>
          </select>
        </Form>
        <ul className={wordsListStyle.wrapper}>
          <li className={wordsListStyle.item}>
            <div>
              <div className={wordsListStyle.EngWord}>English Word</div>
              <div className={wordsListStyle.KorWord}>영어 단어</div>
            </div>
            <div className={wordsListStyle.buttonWrapper}>
              <button>
                <img
                  src="/icons/icon-pencil.svg"
                  alt="수정"
                  className={css({ w: "18px" })}
                />
              </button>
              <button>
                <img src="/icons/icon-close.svg" alt="삭제" />
              </button>
            </div>
          </li>
          <li className={wordsListStyle.item}>
            <div>
              <div className={wordsListStyle.EngWord}>English Word</div>
              <div className={wordsListStyle.KorWord}>영어 단어</div>
            </div>
            <div className={wordsListStyle.buttonWrapper}>
              <button>
                <img
                  src="/icons/icon-pencil.svg"
                  alt="수정"
                  className={css({ w: "18px" })}
                />
              </button>
              <button>
                <img src="/icons/icon-close.svg" alt="삭제" />
              </button>
            </div>
          </li>
        </ul>
      </DrawerPopup>
    </>
  );
};

export default MyWords;

const MyWordsSva = sva({
  slots: ["wrapper", "inner"],
  base: {
    wrapper: {
      w: "100vw",
      h: "100dvh",
      bgColor: "green",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      "&:before": {
        content: "''",
        w: "100%",
        h: "70%",
        bgColor: "#FAFAFA",
        position: "absolute",
        left: "0",
        bottom: "0",
        borderTopRadius: "3.125rem",
      },
    },
    inner: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      w: "100%",
      h: "80%",
      p: "0 1.25rem 2.5rem",
      rowGap: "1.875rem",
      columnGap: "1.1875rem",
    },
  },
});

const WordsListSva = sva({
  slots: [
    "wrapper",
    "item",
    "wordWrapper",
    "EngWord",
    "KorWord",
    "buttonWrapper",
  ],
  base: {
    wrapper: {
      "& li ~ li": {
        borderTop: "1px solid #E5E5E5",
        mt: "20px",
        pt: "20px",
      },
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pr: "10px",
    },
    EngWord: {
      textStyle: "Text-20-M",
    },
    KorWord: {
      textStyle: "Text-16-M",
      color: "gray.05",
    },
    buttonWrapper: {
      display: "flex",
      gap: "12px",
    },
  },
});

const wordsSelectStyle = css({
  position: "absolute",
  top: "30px",
  right: "30px",
  w: "auto",
  textStyle: "Text-14-M",
});
