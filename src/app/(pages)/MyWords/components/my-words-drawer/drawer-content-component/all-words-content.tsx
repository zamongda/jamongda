import Form from "@common/form/form";
import ModalPopup from "@common/modal/modal-popup";
import { use, useState } from "react";
import { css } from "@styled-system/css";
import { IWordRes, deleteWord } from "../../../../../api/word";
import { useMyWords } from "../../../hooks/use-words";
import MyWordsDrawerFilter from "../drawer-filter";
import DrawerListItem from "../drawer-list-item";
import useWordsList from "../hooks/use-words-list";
import EditWordModal from "./edit-word-modal";

const AllWordsContent = () => {
  const allWordsData = useMyWords();

  return <AllWordsList allWordsData={allWordsData} />;
};

const AllWordsList = ({
  allWordsData,
}: {
  allWordsData: Promise<IWordRes[]>;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [word, setWord] = useState<IWordRes | null>(null);
  const allWords = use(allWordsData);
  const { filteredWords, setCategory } = useWordsList(allWords);

  const handleWordDelete = async (id: number) => {
    const { success } = await deleteWord(id);

    if (!success) {
      alert("잠시 후 다시 시도해주세요.");
      return;
    }
  };

  return (
    <div>
      <MyWordsDrawerFilter setCategory={setCategory} />
      <div className={css({ py: "10px" })}>
        {filteredWords.length === 0 ? (
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
      {word && (
        <EditWordModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          originWord={word}
        />
      )}
    </div>
  );
};

export default AllWordsContent;
