import React from "react";
import { IWordRes, modifyWord } from "../../../../../api/word";
import WordModal, {
  IHandleWordSaveProps,
} from "../../../../../components/word-modal";

interface IEditWordModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  originWord: IWordRes;
}

const EditWordModal = ({
  modalOpen,
  setModalOpen,
  originWord,
}: IEditWordModalProps) => {
  const handleWordSave = async ({ word, meaning }: IHandleWordSaveProps) => {
    if (word.trim() === "") {
      alert("단어를 입력해주세요.");
      return;
    }
    if (meaning.trim() === "") {
      alert("뜻을 입력해주세요.");
      return;
    }

    const { success } = await modifyWord(originWord.id, {
      ko: meaning,
      en: word,
    });

    if (!success) {
      alert("단어 저장에 실패했습니다.");
      return false;
    }
    alert("단어가 저장되었습니다.");
    setModalOpen(false);
    return true;
  };
  return (
    <WordModal
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      handleWordSave={handleWordSave}
      originWord={originWord.en}
      originMeaning={originWord.ko}
    />
  );
};

export default React.memo(EditWordModal);
