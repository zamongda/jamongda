import { use } from "react";
import { css } from "@styled-system/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { IWordRes } from "../../../api/word";

const CardSlide = ({ allWordsData }: { allWordsData: Promise<IWordRes[]> }) => {
  const allWords = use(allWordsData);
  return (
    <div className={SwierStyle}>
      <Swiper
        loop={true}
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween="-20"
        // loopAdditionalSlides={4}
      >
        {allWords.map((word) => (
          <SwiperSlide>
            <div>{word.en}</div>
          </SwiperSlide>
        ))}
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
