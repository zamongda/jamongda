import { BaseModalProps } from "@common/modal/types";
import React from "react";
import CategoryModal from "../../../../../components/category-modal";
import { modifyCategory } from "../../../../../api/category";
import { IUseCategoryListReturn } from "../../../../../hooks/use-category";

interface IEditCategoryModalProps extends BaseModalProps {
    category: IUseCategoryListReturn
}

const EditCategoryModal = ({modalOpen, setModalOpen, category}: IEditCategoryModalProps) => {
    const handleEditCategory = async (name: string) => {
        const {success} = await modifyCategory(category.id, name);

        if (success) {
            alert("수정되었습니다.");
            return;
          }
          alert("잠시후 다시 시도해주세요.");
          return;
    }

    return(
        <CategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} handleCategory={handleEditCategory} category={category} />
    )

}

export default React.memo(EditCategoryModal);