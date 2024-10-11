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
          className={css({ mt: "20px!" })}
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
      p: "100px 30px 40px",
      display: "flex",
      flexDir: "column",
      gap: "40px",
    },
    card: {
      w: "100%",
      minH: "200px",
      bgColor: "white",
      borderRadius: "30px",
      boxShadow: "0rem .25rem .625rem 0rem rgba(0, 0, 0, 0.1)",
      pos: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      p: "20px",
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
      right: "20px",
      bottom: "20px",
    },
    answer: {
      w: "100%",
      bgColor: "white",
      borderRadius: "30px",
      p: "30px 30px 30px 20px",
      flexGrow: "1",
    },
    input: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
      "& input": {
        borderBottom: "1px solid {colors.black}",
        w: "100%",
        outline: "none",
      },
    },
  },
});
const testStyle = TestSva();
