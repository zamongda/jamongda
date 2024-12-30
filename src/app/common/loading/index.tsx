"use client";

import { cva } from "@styled-system/css";

interface LoadingProps {
  color?: "orange" | "white";
}

const Loading = ({ color = "white" }: LoadingProps) => {
  const loadingImage =
    color === "orange"
      ? "/images/loading-orange.svg"
      : "/images/loading-white.svg";

  return (
    <div className={loadingStyle({ color })}>
      <img src={loadingImage} alt="loading" />
    </div>
  );
};

export default Loading;

const loadingStyle = cva({
  base: {
    w: "100vw",
    h: "100dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  variants: {
    color: {
      orange: {
        bgColor: "white",
      },
      white: {
        bgColor: "lightOrange",
      },
    },
  },
});
