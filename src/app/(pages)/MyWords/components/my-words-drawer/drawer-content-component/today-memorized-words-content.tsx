import { use } from "react";
import { css } from "@styled-system/css";
import { IWordRes } from "../../../../../api/word";
import { useTodayMemorizedWords } from "../../../hooks/use-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";

const TodayMemorizedWordsContent = () => {
  const todayMemorizedWordsData = useTodayMemorizedWords();
  return (
    <div>
      <MyWordsDrawerFilter />
      <TodayMemorizedWordsList
        todayMemorizedWordsData={todayMemorizedWordsData}
      />
    </div>
  );
};

const TodayMemorizedWordsList = ({
  todayMemorizedWordsData,
}: {
  todayMemorizedWordsData: Promise<IWordRes[]>;
}) => {
  const todayMemorizedWords = use(todayMemorizedWordsData);
  if (todayMemorizedWords.length === 0) {
    // TODO: EMPTY 컴포넌트 필요
    return <div>오늘 암기한 단어가 없습니다.</div>;
  }
  return (
    <div className={css({ py: "10px" })}>
      {todayMemorizedWords.map((word) => (
        <DrawerListItem
          key={word.id}
          word={word.en}
          meaning={word.ko}
          readonly
        />
      ))}
    </div>
  );
};

export default TodayMemorizedWordsContent;
