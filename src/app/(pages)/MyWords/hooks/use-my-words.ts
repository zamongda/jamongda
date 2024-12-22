import {
  useCategoryCount,
  useMemorizedWordsCount,
  useMyWordsCount,
  useTodayMemorizedWordsCount,
} from "./use-words-count";

const useMyWords = () => {
  const myWordsCount = useMyWordsCount().then((data) => data);
  const myMemorizedWordsCount = useMemorizedWordsCount().then((data) => data);
  const todayMemorizedWordsCount = useTodayMemorizedWordsCount().then(
    (data) => data,
  );
  const categoryCount = useCategoryCount().then((data) => data);

  const cardList = [
    {
      id: 0,
      title: "나의 단어",
      icon: "/icons/icon-note.svg",
      count: myWordsCount,
      color: "#FF8168",
    },
    {
      id: 1,
      title: "내가 암기한 단어",
      icon: "/icons/icon-check.svg",
      count: myMemorizedWordsCount,
      color: "#618B7B",
    },
    {
      id: 2,
      title: "오늘 암기한 단어",
      icon: "/icons/icon-calendar.svg",
      count: todayMemorizedWordsCount,
      color: "#618B7B",
    },
    {
      id: 3,
      title: "나의 카테고리",
      icon: "/icons/icon-chart.svg",
      count: categoryCount,
      color: "#FF8168",
    },
  ];

  return {
    cardList,
  };
};

export default useMyWords;
