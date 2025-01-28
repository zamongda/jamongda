import Button from "@common/button";
import Form from "@common/form";
import Input from "@common/input";
import ModalPopup from "@common/modal/modal-popup";
import { BaseModalProps } from "@common/modal/types";
import { css } from "@styled-system/css";
import React, { useState } from "react";
import { IUseCategoryListReturn } from "../hooks/use-category";

interface ICategoryModalProps extends BaseModalProps {
	handleCategory: (name: string) => void;
	category?: IUseCategoryListReturn;
}

const CategoryModal = ({modalOpen, setModalOpen, handleCategory, category}:ICategoryModalProps) => {
	const [name, setName] = useState(category?.category_name || "");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		handleCategory(name);
		setModalOpen(false);
	}

	console.log("category", category);

    return <ModalPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
			<Form onSubmit={handleSubmit}>
			<Input
          text="카테고리 이름"
          name="categoryName"
          placeholder="카테고리 이름을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
       <Button
        type="submit"
        text="저장하기"
        className={css({ mt: "2.5rem!" })}
      />
			</Form>
    </ModalPopup>
};

export default React.memo(CategoryModal);