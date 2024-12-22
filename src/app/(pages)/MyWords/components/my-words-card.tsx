import React from "react";
import { sva } from "@styled-system/css";

interface IMyWordsCardProps {
  card: {
    id?: number;
    title: string;
    icon: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    count: any;
    color: string;
  };
  onClick: () => void;
}

const MyWordsCard = ({ card, onClick }: IMyWordsCardProps) => (
  <div className={myWordsStyle.card} onClick={onClick}>
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
);

export default React.memo(MyWordsCard);

const MyWordsSva = sva({
  slots: ["card", "cardTitle", "count"],
  base: {
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

const myWordsStyle = MyWordsSva();
