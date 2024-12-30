"use client";

import Button from "@common/button";
import { ToastPopup } from "@common/toast";
import { Suspense, useState } from "react";
import { toast } from "react-toastify";
import { css, sva } from "@styled-system/css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { finishTest } from "../../../api/word";
import { useMyWords } from "../../MyWords/hooks/use-words";
import TestCard from "./test-card";
import TestScoreModal from "./test-score-modal";

const Test = () => {
  const [answer, setAnswer] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctWordIds, setCorrectWordIds] = useState<string[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const allWordsData = useMyWords();

  const handleAnswerSubmit = async () => {
    const allWords = await allWordsData;
    const currentWord = allWords[currentIndex];

    if (currentWord) {
      // 정답 처리
      if (answer.trim() === currentWord.ko) {
        setCorrectWordIds((prev) => [...prev, currentWord.id]);
        toast(<ToastPopup type="correct" />);
      } else {
        toast(<ToastPopup type="error" />);
      }
      // 다음 단어로 이동
      const nextIndex = currentIndex + 1;
      if (nextIndex < allWords?.length) {
        setCurrentIndex(nextIndex);
      } else {
        // 모든 단어를 완료한 경우
        await finishTest(correctWordIds);
        console.log("finished");
        setModalOpen(true);
      }
      setAnswer(""); // 입력 초기화
    }
  };

  return (
    <div className={testStyle.wrapper}>
      <ErrorBoundary errorComponent={undefined}>
        <Suspense fallback={null}>
          <TestCard allWordsData={allWordsData} currentIndex={currentIndex} />
        </Suspense>
      </ErrorBoundary>
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
      <ErrorBoundary errorComponent={undefined}>
        <Suspense fallback={null}>
          <TestScoreModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            allWordsData={allWordsData}
            correctCount={correctWordIds.length}
          />
        </Suspense>
      </ErrorBoundary>
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
