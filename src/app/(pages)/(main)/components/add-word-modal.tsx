import Button from "@common/button/button";
import Form from "@common/form/form";
import Input from "@common/input/input";
import ModalPopup from "@common/modal/modal-popup";
import { useEffect, useState } from "react";
import { css } from "@styled-system/css";
import { useRouter } from "next/navigation";
import { addWord } from "../../../api/word";
import { useLogin } from "../../../providers/auth-provider";

interface IAddWordModal {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
}

const AddWordModal = ({ modalOpen, setModalOpen }: IAddWordModal) => {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState("");
  const router = useRouter();
  const { isLogin } = useLogin();

  useEffect(() => {
    if (!isLogin) {
      alert("로그인이 필요합니다.");
      router.push("/Login");
      return;
    }
  }, [isLogin, router]);

  const handleSaveWord = async () => {
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
    <ModalPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
      <Form>
        <Input
          text="단어 또는 문장"
          name="word"
          placeholder="단어 또는 문장을 입력하세요"
          onChange={(e) => setWord(e.target.value)}
        />
        <Input
          text="뜻"
          name="meaning"
          placeholder="뜻을 입력하세요"
          onChange={(e) => setMeaning(e.target.value)}
        />
      </Form>
      <Button
        text="저장하기"
        className={css({ mt: "2.5rem!" })}
        onClick={handleSaveWord}
      />
    </ModalPopup>
  );
};

export default AddWordModal;
