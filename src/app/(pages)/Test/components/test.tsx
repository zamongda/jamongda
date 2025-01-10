"use client";

import Button from "@common/button";
import Loading from "@common/loading";
import { ToastPopup } from "@common/toast";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { css, sva } from "@styled-system/css";
import { IWordRes, finishTest, getWords } from "../../../api/word";
import TestCard from "./test-card";
import TestScoreModal from "./test-score-modal";

const Test = () => {
  const [answer, setAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [allWords, setAllWords] = useState<IWordRes[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const currentWord = allWords?.[currentIndex] ?? { en: "", ko: "" };
  const totalCount = allWords?.length ?? 0;

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const { data: myWords } = await getWords({});
        setAllWords(JSON.parse(myWords) as IWordRes[]);
      } catch (e) {
        console.error("Failed to fetch words:", e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchWords();
  }, []);

  const handleAnswerSubmit = async () => {
    const currentWord = allWords?.[currentIndex];
    if (currentWord) {
      if (answer.trim() === currentWord.ko) {
        setCorrectWordIds((prev) => [...prev, String(currentWord.id)]);
        toast(<ToastPopup type="correct" />);
      } else {
        toast(<ToastPopup type="error" />);
      }

      const nextIndex = currentIndex + 1;
      if (nextIndex < allWords?.length) {
        setCurrentIndex(nextIndex);
      } else {
        await finishTest(correctWordIds);
        console.log("finished");
        setModalOpen(true);
      }
      setAnswer("");
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={testStyle.wrapper}>
      <TestCard
        currentWord={currentWord}
        totalCount={totalCount}
        currentIndex={currentIndex}
      />
      <div className={testStyle.answerWrapper}>
        <div className={testStyle.answer}>
          <div className={testStyle.input}>
            <img src="/icons/icon-pencil.svg" alt="작성하기" />
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
          </div>
        </div>
        <Button
          text="확인"
          disabled={!answer}
          className={css({ mt: "1.25rem!" })}
          onClick={handleAnswerSubmit}
        />
      </div>
      <TestScoreModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        allWords={allWords}
        correctCount={correctWordIds.length}
      />
    </div>
  );
};

export default Test;

const TestSva = sva({
  slots: [
    "wrapper",
    "card",
    "word",
    "count",
    "answerWrapper",
    "answer",
    "input",
  ],
  base: {
    wrapper: {
      w: "100vw",
      h: "100dvh",
      bgColor: "lightOrange",
      p: "6.25rem 1.875rem 2.5rem",
      display: "flex",
      flexDir: "column",
      gap: "2.5rem",
    },
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
    word: {
      textStyle: "Text-28-B",
    },
    answerWrapper: {
      display: "flex",
      flexDir: "column",
      h: "100%",
    },
    count: {
      textStyle: "Text-12-M",
      color: "gray.05!",
      pos: "absolute",
      right: "1.25rem",
      bottom: "1.25rem",
    },
    answer: {
      w: "100%",
      bgColor: "white",
      borderRadius: "1.875rem",
      p: "1.875rem 1.875rem 1.875rem 1.25rem",
      flexGrow: "1",
    },
    input: {
      display: "flex",
      gap: ".625rem",
      alignItems: "center",
      "& input": {
        borderBottom: ".0625rem solid {colors.black}",
        w: "100%",
        outline: "none",
      },
    },
  },
});
const testStyle = TestSva();
