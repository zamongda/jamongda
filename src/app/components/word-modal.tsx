import Button from "@common/button/button";
import Form from "@common/form/form";
import Input from "@common/input/input";
import ModalPopup from "@common/modal/modal-popup";
import React, { use, useState } from "react";
import { css } from "@styled-system/css";
import { mainStyle } from "../(pages)/(main)/components/main";
import {
  IUseCategoryListReturn,
  useCategoryList,
} from "../(pages)/MyWords/hooks/use-category";
import CategorySelect from "./category-select";

export interface IHandleWordSaveProps {
  word: string;
  meaning: string;
  categoryId?: number;
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
    categoryId?: number;
  }) => void;
  categoryListData: Promise<IUseCategoryListReturn[]>;
  originWord?: string;
  originMeaning?: string;
}

const WordModal = ({
  modalOpen,
  setModalOpen,
  handleWordSave,
  originWord,
  originMeaning,
  categoryListData,
}: IWordModalProps) => {
  const [word, setWord] = useState(originWord || "");
  const [meaning, setMeaning] = useState(originMeaning || "");
  const [category, setCategory] = useState("ALL");

  const categoryList = use(categoryListData);

  return (
    <ModalPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
      <Form>
        <CategorySelect setCategory={setCategory} categoryList={categoryList} />
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
        onClick={() =>
          handleWordSave({
            word,
            meaning,
            categoryId: category === "ALL" ? undefined : Number(category),
          })
        }
      />
    </ModalPopup>
  );
};

export default React.memo(WordModal);
