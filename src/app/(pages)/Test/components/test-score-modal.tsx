"use client";

import Button from "@common/button";
import ModalPopup from "@common/modal/modal-popup";
import { css } from "@styled-system/css";
import { useRouter } from "next/navigation";
import { IWordRes } from "../../../api/word";

interface ITestScoreModal {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  allWords: IWordRes[];
  correctCount: number;
}

const TestScoreModal = ({
  modalOpen,
  setModalOpen,
  allWords,
  correctCount,
}: ITestScoreModal) => {
  const router = useRouter();

  return (
    <ModalPopup
      isOpen={modalOpen}
      setModalOpen={setModalOpen}
      useCloseButton={false}
    >
      <div
        className={css({
          textStyle: "Text-16-M",
          textAlign: "center",
          mt: "20px",
        })}
      >
        총 {allWords?.length}개 단어 중 {correctCount} 맞췄습니다 🥳
      </div>
      <Button
        text="테스트 종료하기"
        className={css({ mt: "2.5rem!" })}
        onClick={() => router.push("/")}
      />
    </ModalPopup>
  );
};

export default TestScoreModal;
