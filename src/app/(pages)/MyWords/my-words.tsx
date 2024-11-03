"use client";

import { sva } from "@styled-system/css";

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

  return (
    <div className={myWordsStyle.wrapper}>
      <div className={myWordsStyle.inner}>
        {CardDetail.map((card, idx) => (
          <div key={idx} className={myWordsStyle.card}>
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
        borderTopRadius: "50px",
      },
    },
    inner: {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      w: "100%",
      h: "80%",
      p: "0 20px 40px",
      rowGap: "30px",
      columnGap: "19px",
    },
    card: {
      bgColor: "white",
      color: "black",
      borderRadius: "30px",
      boxShadow: "0px -5px 20px 0px rgba(0, 0, 0, 0.1)",
      h: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      p: "40px 20px",
    },
    cardTitle: {
      display: "flex",
      flexDir: "column",
      gap: "10px",
      "& img": {
        w: "24px",
        h: "24px",
      },
      "& div": {
        textStyle: "Text-16-M",
        color: "gray.05",
      },
    },
    count: {
      textStyle: "Text-28-B",
      position: "relative",
      pb: "20px",
      "&:before": {
        content: "''",
        w: "50px",
        h: "5px",
        bgColor: "var(--count-color)",
        position: "absolute",
        left: "0",
        bottom: "0",
        borderRadius: "50px",
      },
    },
  },
});
