import Button from "@common/button";
import Form from "@common/form";
import Input from "@common/input";
import ModalPopup from "@common/modal/modal-popup";
import React, { useState } from "react";
import { css } from "@styled-system/css";

export interface IHandleWordSaveProps {
  word: string;
  meaning: string;
}

interface IWordModalProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  handleWordSave: ({
    word,
    meaning,
  }: {
    word: string;
    meaning: string;
  }) => void;
  originWord?: string;
  originMeaning?: string;
}

const WordModal = ({
  modalOpen,
  setModalOpen,
  handleWordSave,
  originWord,
  originMeaning,
}: IWordModalProps) => {
  const [word, setWord] = useState(originWord || "");
  const [meaning, setMeaning] = useState(originMeaning || "");
  return (
    <ModalPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
      <Form>
        <Input
          text="단어 또는 문장"
          name="word"
          placeholder="단어 또는 문장을 입력하세요"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <Input
          text="뜻"
          name="meaning"
          placeholder="뜻을 입력하세요"
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
        />
      </Form>
      <Button
        text="저장하기"
        className={css({ mt: "2.5rem!" })}
        onClick={() => handleWordSave({ word, meaning })}
      />
    </ModalPopup>
  );
};

export default React.memo(WordModal);