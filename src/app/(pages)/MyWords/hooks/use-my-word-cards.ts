import { useMemo } from "react";
import AllWordsContent from "../components/my-words-drawer/drawer-content-component/all-words-content";
import MemorizedWordsContent from "../components/my-words-drawer/drawer-content-component/memorized-words-content";
import MyCategoryContent from "../components/my-words-drawer/drawer-content-component/my-category-content";
import TodayMemorizedWordsContent from "../components/my-words-drawer/drawer-content-component/today-memorized-words-content";
import { useCategoryList } from "./use-category";
import {
  useMemorizedWords,
  useTodayMemorizedWords,
} from "./use-my-words";
import useWords from "../../../hooks/use-words";

const useMyWordCards = () => {
  const myWordsCount = useWords()?.length
   const myMemorizedWordsCount = useMemorizedWords()?.length
  const todayMemorizedWordsCount = useTodayMemorizedWords()?.length
  const categoryCount = 0
  // useCategoryList().then((list) => list?.length);

  const cardList = useMemo(
    () => [
      {
        id: 0,
        title: "나의 단어",
        icon: "/icons/icon-note.svg",
        count: myWordsCount,
        color: "#FF8168",
        modalContent: AllWordsContent,
      },
      {
        id: 1,
        title: "내가 암기한 단어",
        icon: "/icons/icon-check.svg",
        count: myMemorizedWordsCount,
        color: "#618B7B",
        modalContent: MemorizedWordsContent,
      },
      {
        id: 2,
        title: "오늘 암기한 단어",
        icon: "/icons/icon-calendar.svg",
        count: todayMemorizedWordsCount,
        color: "#618B7B",
        modalContent: TodayMemorizedWordsContent,
      },
      {
        id: 3,
        title: "나의 카테고리",
        icon: "/icons/icon-chart.svg",
        count: categoryCount,
        color: "#FF8168",
        modalContent: MyCategoryContent,
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

export default useMyWordCards;
