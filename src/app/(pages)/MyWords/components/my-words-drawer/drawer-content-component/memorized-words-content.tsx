import { css } from "@styled-system/css";
import { IWordRes } from "../../../../../api/word";
import { useMemorizedWords } from "../../../hooks/use-my-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";
import useWordsList from "../hooks/use-words-list";

const MemorizedWordsContent = () => {
  const memorizedWordsData = useMemorizedWords();
  return <MemorizedWordsList memorizedWords={memorizedWordsData} />;
};

const MemorizedWordsList = ({
  memorizedWords,
}: {
  memorizedWords?: IWordRes[];
}) => {
  const { filteredWords, setCategory } = useWordsList(memorizedWords);

  return (
    <div>
      <MyWordsDrawerFilter setCategory={setCategory} />
      <div className={css({ py: "10px" })}>
        {/* TODO: EMPTY 컴포넌트 필요 */}
        {!filteredWords || filteredWords.length === 0 ? (
          <div>암기한 단어가 없습니다.</div>
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

export default MemorizedWordsContent;
