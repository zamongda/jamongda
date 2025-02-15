import { useState } from "react";
import { css } from "@styled-system/css";
import { IWordRes, deleteWord } from "../../../../../api/word";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";
import useWordsList from "../hooks/use-words-list";
import EditWordModal from "./edit-word-modal";
import useWords from "../../../../../hooks/use-words";

const AllWordsContent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [word, setWord] = useState<IWordRes | null>(null);

  const {words, refetch} = useWords();
  const { filteredWords, setCategory } = useWordsList(words);

  const handleWordDelete = async (id: number) => {
    console.log("delete")
    const { success } = await deleteWord(id);

    if (!success) {
      alert("잠시 후 다시 시도해주세요.");
      return;
    }

    alert("삭제되었습니다.");
    refetch();
  };

  return (
    <div>
      <MyWordsDrawerFilter setCategory={setCategory} />
      <div className={css({ py: "10px" })}>
        {!filteredWords || filteredWords.length === 0 ? (
          // TODO: EMPTY 컴포넌트 필요 / 단어추가하러가기 클릭하면 홈으로
          <div>추가한 단어가 없습니다.</div>
        ) : (
          filteredWords.map((word) => (
            <DrawerListItem
              key={word.id}
              word={word.en}
              meaning={word.ko}
              handleDelete={() => handleWordDelete(word.id)}
              handleModify={() => {
                setWord(word);
                setModalOpen(true);
              }}
            />
          ))
        )}
      </div>
        <EditWordModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          originWord={word}
          refetch={refetch}
        />
    </div>
  );
};

export default AllWordsContent;
