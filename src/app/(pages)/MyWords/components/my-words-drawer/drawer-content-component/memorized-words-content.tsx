import { use } from "react";
import { css } from "@styled-system/css";
import { IWordRes } from "../../../../../api/word";
import { useMemorizedWords } from "../../../hooks/use-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";

const MemorizedWordsContent = () => {
  const memorizedWordsData = useMemorizedWords();
  return (
    <div>
      <MyWordsDrawerFilter />
      <MemorizedWordsList memorizedWordsData={memorizedWordsData} />
    </div>
  );
};

const MemorizedWordsList = ({
  memorizedWordsData,
}: {
  memorizedWordsData: Promise<IWordRes[]>;
}) => {
  const memorizedWords = use(memorizedWordsData);
  if (memorizedWords.length === 0) {
    // TODO: EMPTY 컴포넌트 필요
    return <div>암기한 단어가 없습니다.</div>;
  }
  return (
    <div className={css({ py: "10px" })}>
      {memorizedWords.map((word) => (
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

export default MemorizedWordsContent;
