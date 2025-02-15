"use client";

import { ReactNode, Suspense, memo, useState } from "react";
import { sva } from "@styled-system/css";
import useMyWordCards from "../hooks/use-my-word-cards";
import MyWordsCard from "./my-words-card";
import MyWordsDrawerContainer from "./my-words-drawer";

const MyWords = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState< ReactNode | null>(null);

  const myWordsStyle = MyWordsSva();

  return (
    <>
      <div className={myWordsStyle.wrapper}>
        <MyWordsContainer
          setModalOpen={setModalOpen}
          setModalContent={setModalContent}
        />
      </div>
      <MyWordsDrawerContainer modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Suspense fallback={<>loading</>}>{modalContent}</Suspense>
      </MyWordsDrawerContainer>
    </>
  );
};

const MyWordsContainer = memo(
  ({
    setModalOpen,
    setModalContent,
  }: {
    setModalOpen: (value: boolean) => void;
    setModalContent: (value:ReactNode) => void;
  }) => {
    const { cardList } = useMyWordCards();

    const myWordsStyle = MyWordsSva();

    return (
      <div className={myWordsStyle.inner}>
        <Suspense fallback={<>loading</>}>
          {cardList.map((card) => {
            return (
              <MyWordsCard
                key={card.id}
                card={card}
                onClick={() => {
                  setModalOpen(true);
                    setModalContent(<card.modalContent />);
                }}
              />
            );
          })}
        </Suspense>
      </div>
    );
  },
);

MyWordsContainer.displayName = "MyWordsContainer";

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
