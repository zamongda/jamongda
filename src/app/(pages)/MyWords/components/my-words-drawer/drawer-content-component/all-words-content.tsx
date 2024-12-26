import { use } from "react";
import { IWordRes } from "../../../../../api/word";
import { useMyWords } from "../../../hooks/use-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";

const AllWordsContent = () => {
  const allWordsData = useMyWords();

  return (
    <div>
      <MyWordsDrawerFilter />
      <h2>All My Words Drawer Component</h2>
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
  return allWords.map((word) => (
    <DrawerListItem
      key={word.id}
      word={word.en}
      meaning={word.ko}
      handleDelete={() => {}}
      handleModify={() => {}}
    />
  ));
};

export default AllWordsContent;
