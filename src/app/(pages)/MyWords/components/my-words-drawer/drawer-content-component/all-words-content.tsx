import { use } from "react";
import { css } from "@styled-system/css";
import { IWordRes } from "../../../../../api/word";
import { useMyWords } from "../../../hooks/use-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";
import useWordsList from "../hooks/use-words-list";

const AllWordsContent = () => {
  const allWordsData = useMyWords();

  return <AllWordsList allWordsData={allWordsData} />;
};

const AllWordsList = ({
  allWordsData,
}: {
  allWordsData: Promise<IWordRes[]>;
}) => {
  const allWords = use(allWordsData);
  const { filteredWords, setCategory } = useWordsList(allWords);

  // TODO: EMPTY 컴포넌트 필요 / 단어추가하러가기 클릭하면 홈으로

  return (
    <div>
      <MyWordsDrawerFilter setCategory={setCategory} />
      <div className={css({ py: "10px" })}>
        {filteredWords.length === 0 ? (
          <div>추가한 단어가 없습니다.</div>
        ) : (
          filteredWords.map((word) => (
            <DrawerListItem
              key={word.id}
              word={word.en}
              meaning={word.ko}
              handleDelete={() => {}}
              handleModify={() => {}}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllWordsContent;
