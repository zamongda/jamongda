import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { addWord } from "../../../api/word";
import WordModal, {
  IHandleWordSaveProps,
} from "../../../components/word-modal";
import { useLogin } from "../../../providers/auth-provider";

interface IAddWordModal {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const AddWordModal = ({ modalOpen, setModalOpen }: IAddWordModal) => {
  const router = useRouter();
  const { isLogin } = useLogin();

  useEffect(() => {
    if (modalOpen && !isLogin) {
      alert("로그인이 필요합니다.");
      router.push("/Login");
      return;
    }
  }, [isLogin, router, modalOpen]);

  const handleWordSave = async ({
    word,
    meaning,
    categoryId,
  }: IHandleWordSaveProps) => {
    if (word.trim() === "") {
      alert("단어를 입력해주세요.");
      return;
    }
    if (meaning.trim() === "") {
      alert("뜻을 입력해주세요.");
      return;
    }

    const { success } = await addWord([
      {
        ko: meaning,
        en: word,
        category_id: categoryId,
      },
    ]);

    if (!success) {
      alert("단어 저장에 실패했습니다.");
      return;
    }
    alert("단어가 저장되었습니다.");
    setModalOpen(false);
  };

  return (
    <WordModal
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      handleWordSave={handleWordSave}
    />
  );
};

export default AddWordModal;
