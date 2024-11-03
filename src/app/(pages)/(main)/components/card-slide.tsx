"use client";

import { css } from "@styled-system/css";
import { Swiper, SwiperSlide } from "swiper/react";

const CardSlide = () => {
  return (
    <div className={SwierStyle}>
      <Swiper
        loop={true}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween="-20"
        // loopAdditionalSlides={4}
      >
        <SwiperSlide>
          <div>test01</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>test02</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>test03</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>test04</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>test05</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>test06</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSlide;

const SwierStyle = css({
  "& .swiper": {
    w: "100vw",
    overflow: "visible!",
    overflowX: "hidden",
    "& .swiper-wrapper": {
      pt: "20px",
      w: "100%",
      "& .swiper-slide": {
        transition: "all 0.3s",
        scale: "0.5",
        bgColor: "white",
        color: "black",
        borderRadius: "30px",
        w: "60% !important",
        h: "45vh !important",
        boxShadow: "0px -5px 20px 0px rgba(0, 0, 0, 0.1)",
        textStyle: "Text-22-M",
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
