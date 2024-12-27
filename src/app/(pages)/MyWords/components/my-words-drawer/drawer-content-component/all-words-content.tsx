import { use } from "react";
import { css } from "@styled-system/css";
import { IWordRes } from "../../../../../api/word";
import { useMyWords } from "../../../hooks/use-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";

const AllWordsContent = () => {
  const allWordsData = useMyWords();

  return (
    <div>
      <MyWordsDrawerFilter />
      <AllWordsList allWordsData={allWordsData} />
    </div>
  );
};

const AllWordsList = ({
  allWordsData,
}: {
  allWordsData: Promise<IWordRes[]>;
}) => {
  const allWords = use(allWordsData);
  if (allWords.length === 0) {
    // TODO: EMPTY 컴포넌트 필요 / 단어추가하러가기 클릭하면 홈으로
    return <div>추가한 단어가 없습니다.</div>;
  }

  return (
    <div className={css({ py: "10px" })}>
      {allWords.map((word) => (
        <DrawerListItem
          key={word.id}
          word={word.en}
          meaning={word.ko}
          handleDelete={() => {}}
          handleModify={() => {}}
        />
      ))}
    </div>
  );
};

export default AllWordsContent;
