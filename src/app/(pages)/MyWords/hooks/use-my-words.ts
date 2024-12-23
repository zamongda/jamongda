import { useMemo } from "react";
import AllMyWordsDrawerComponent from "../components/my-words-drawer/all-my-words-drawer-component";
import { useCategoryList } from "./use-category";
import {
  useMemorizedWordsCount,
  useMyWordsCount,
  useTodayMemorizedWordsCount,
} from "./use-words";

const useMyWords = () => {
  const myWordsCount = useMyWordsCount();
  const myMemorizedWordsCount = useMemorizedWordsCount();
  const todayMemorizedWordsCount = useTodayMemorizedWordsCount();
  const categoryCount = useCategoryList().then((list) => list.length);

  const cardList = useMemo(
    () => [
      {
        id: 0,
        title: "나의 단어",
        icon: "/icons/icon-note.svg",
        count: myWordsCount,
        color: "#FF8168",
        modalContent: AllMyWordsDrawerComponent,
      },
      {
        id: 1,
        title: "내가 암기한 단어",
        icon: "/icons/icon-check.svg",
        count: myMemorizedWordsCount,
        color: "#618B7B",
        modalContent: AllMyWordsDrawerComponent,
      },
      {
        id: 2,
        title: "오늘 암기한 단어",
        icon: "/icons/icon-calendar.svg",
        count: todayMemorizedWordsCount,
        color: "#618B7B",
        modalContent: AllMyWordsDrawerComponent,
      },
      {
        id: 3,
        title: "나의 카테고리",
        icon: "/icons/icon-chart.svg",
        count: categoryCount,
        color: "#FF8168",
        modalContent: AllMyWordsDrawerComponent,
      },
    ],
    [
      myWordsCount,
      myMemorizedWordsCount,
      todayMemorizedWordsCount,
      categoryCount,
    ],
  );

  return {
    cardList,
  };
};

export default useMyWords;
