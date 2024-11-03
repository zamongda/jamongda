import { css } from "@styled-system/css";

interface ToastPopupProps {
  text?: React.ReactNode;
  type?: "toast" | "correct" | "error";
}

export function ToastPopup({ text, type = "toast" }: ToastPopupProps) {
  const toastText =
    type === "correct"
      ? "정답입니다 ✅"
      : type === "error"
        ? "오답입니다 ❌"
        : text;

  return (
    <div className={ToastWrapper}>
      <span>{toastText}</span>
    </div>
  );
}

const ToastWrapper = css({
  pos: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  w: "21.4375rem",
  p: ".8125rem 1.25rem",
  bgColor: "rgba(0, 0, 0, 0.8)",
  color: "white!",
  backdropBlur: ".625rem",
  rounded: ".9375rem",
  zIndex: "3",
  "& span": {
    textStyle: "Text-16-M",
  },
});
