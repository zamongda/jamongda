"use client";
import { css } from "@styled-system/css";
import { Swiper, SwiperSlide } from "swiper/react";

const CardSlide = () => {
  return (
    <div className={SwierStyle}>
      <Swiper loop={true} slidesPerView="auto" centeredSlides={true}>
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
    "& .swiper-wrapper": {
      pt: "1.25rem",
      "& .swiper-slide": {
        transition: "all 0.3s",
        scale: "0.6",
        bgColor: "white",
        color: "black",
        borderRadius: "1.875rem",
        w: "200px !important",
        h: "18.75rem !important",
        boxShadow: "0rem -0.3125rem 1.25rem 0rem rgba(0, 0, 0, 0.1)",
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