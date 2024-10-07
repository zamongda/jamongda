import { css, cva, sva } from "@styled-system/css";

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
  w: "343px",
  p: "13px 20px",
  bgColor: "rgba(0, 0, 0, 0.8)",
  color: "white",
  backdropBlur: "10px",
  rounded: "15px",
  zIndex: "3",
  "& span": {
    textStyle: "Text-16-M",
  },
});
