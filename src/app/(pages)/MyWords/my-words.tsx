"use client";

import DrawerPopup from "@common/modal/drawer-popup";
import { useState } from "react";
import { css, sva } from "@styled-system/css";

const CardDetail = [
  {
    title: "나의 단어",
    icon: "/icons/icon-note.svg",
    count: 120,
    color: "#FF8168",
  },
  {
    title: "내가 암기한 단어",
    icon: "/icons/icon-check.svg",
    count: 120,
    color: "#618B7B",
  },
  {
    title: "오늘 암기한 단어",
    icon: "/icons/icon-calendar.svg",
    count: 120,
    color: "#618B7B",
  },
  {
    title: "나의 카테고리",
    icon: "/icons/icon-chart.svg",
    count: 120,
    color: "#FF8168",
  },
];

const MyWords = () => {
  const myWordsStyle = MyWordsSva();
  const wordsListStyle = WordsListSva();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={myWordsStyle.wrapper}>
        <div className={myWordsStyle.inner}>
          {CardDetail.map((card, idx) => (
            <div
              key={idx}
              className={myWordsStyle.card}
              onClick={() => setModalOpen(true)}
            >
              <div className={myWordsStyle.cardTitle}>
                <img src={card.icon} alt={card.title} />
                <div>{card.title}</div>
              </div>
              <div
                className={myWordsStyle.count}
                style={{ "--count-color": card.color } as React.CSSProperties}
              >
                {card.count}개
              </div>
            </div>
          ))}
        </div>
      </div>
      <DrawerPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
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
  slots: ["wrapper", "inner", "card", "cardTitle", "count"],
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
    card: {
      bgColor: "white",
      color: "black",
      borderRadius: "1.875rem",
      boxShadow: "0rem -0.3125rem 1.25rem 0rem rgba(0, 0, 0, 0.1)",
      h: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      p: "2.5rem 1.25rem",
    },
    cardTitle: {
      display: "flex",
      flexDir: "column",
      gap: ".625rem",
      "& img": {
        w: "1.5rem",
        h: "1.5rem",
      },
      "& div": {
        textStyle: "Text-16-M",
        color: "gray.05",
      },
    },
    count: {
      textStyle: "Text-28-B",
      position: "relative",
      pb: "1.25rem",
      "&:before": {
        content: "''",
        w: "3.125rem",
        h: ".3125rem",
        bgColor: "var(--count-color)",
        position: "absolute",
        left: "0",
        bottom: "0",
        borderRadius: "3.125rem",
      },
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
