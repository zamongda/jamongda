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
  console.log(allWords);
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
