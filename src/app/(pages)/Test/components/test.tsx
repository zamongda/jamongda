"use client";

import Button from "@common/button/button";
import { ToastPopup } from "@common/toast/toast-popup";
import { useState } from "react";
import { toast } from "react-toastify";
import { css, sva } from "@styled-system/css";

const Test = () => {
  const [answer, setAnswer] = useState("");

  const openAddCardModal = () => {
    toast(<ToastPopup type="correct" />);
  };

  return (
    <div className={testStyle.wrapper}>
      <div className={testStyle.card}>
        <div className={testStyle.word}>grapefruit</div>
        <span className={testStyle.count}>1 / 20</span>
      </div>
      <div className={testStyle.answerWrapper}>
        <div className={testStyle.answer}>
          <div className={testStyle.input}>
            <img src="/icons/icon-pencil.svg" alt="작성하기" />
            <input type="text" onChange={(e) => setAnswer(e.target.value)} />
          </div>
        </div>
        <Button
          text="확인"
          disabled={!answer}
          className={css({ mt: "1.25rem!" })}
          onClick={openAddCardModal}
        />
      </div>
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
