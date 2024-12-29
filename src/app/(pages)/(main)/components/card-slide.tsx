"use client";

import { useState } from "react";
import { css } from "@styled-system/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IWordRes } from "../../../api/word";

const CardSlide = ({ allWords }: { allWords: IWordRes[] }) => {
  const [clickedCards, setClickedCards] = useState<Record<number, boolean>>({});

  const onClickCard = (id: number) => {
    setClickedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const onSlideChange = () => {
    setClickedCards({});
  };

  return (
    <div className={SwiperStyle}>
      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={-20}
        onSlideChange={onSlideChange}
      >
        {!allWords || allWords?.length === 0 ? (
          //  TODO: EMPTY 컴포넌트 필요
          <SwiperSlide>
            <div>저장된 단어가 없습니다.</div>
          </SwiperSlide>
        ) : (
          allWords.map((word) => (
            <SwiperSlide key={word.id}>
              <div onClick={() => onClickCard(word.id)}>
                {clickedCards[word.id] ? word.ko : word.en}
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default CardSlide;

const SwiperStyle = css({
  "& .swiper": {
    w: "100vw",
    overflow: "visible!",
    overflowX: "hidden",
    "& .swiper-wrapper": {
      pt: "1.25rem",
      w: "100%",
      "& .swiper-slide": {
        transition: "all 0.3s",
        scale: "0.5",
        bgColor: "white",
        color: "black",
        borderRadius: "1.875rem",
        w: "60% !important",
        h: "45vh !important",
        boxShadow: "0rem -0.3125rem 1.25rem 0rem rgba(0, 0, 0, 0.1)",
        textStyle: "Text-22-M",
        p: "1.25rem",
        "& > div": {
          w: "100%",
          h: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        "&.swiper-slide-active": {
          scale: "1",
          textStyle: "Text-28-B",
        },
      },
    },
  },
});
