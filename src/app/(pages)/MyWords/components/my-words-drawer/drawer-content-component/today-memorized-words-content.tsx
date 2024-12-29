import { use } from "react";
import { css } from "@styled-system/css";
import { IWordRes } from "../../../../../api/word";
import { useTodayMemorizedWords } from "../../../hooks/use-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";
import useWordsList from "../hooks/use-words-list";

const TodayMemorizedWordsContent = () => {
  const todayMemorizedWordsData = useTodayMemorizedWords();
  return (
    <TodayMemorizedWordsList
      todayMemorizedWordsData={todayMemorizedWordsData}
    />
  );
};

const TodayMemorizedWordsList = ({
  todayMemorizedWordsData,
}: {
  todayMemorizedWordsData: Promise<IWordRes[]>;
}) => {
  const todayMemorizedWords = use(todayMemorizedWordsData);
  const { filteredWords, setCategory } = useWordsList(todayMemorizedWords);

  return (
    <div>
      <MyWordsDrawerFilter setCategory={setCategory} />
      <div className={css({ py: "10px" })}>
        {/* TODO: EMPTY 컴포넌트 필요 */}
        {filteredWords.length === 0 ? (
          <div>오늘 암기한 단어가 없습니다.</div>
        ) : (
          filteredWords.map((word) => (
            <DrawerListItem
              key={word.id}
              word={word.en}
              meaning={word.ko}
              readonly
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodayMemorizedWordsContent;
