import { css, sva } from "@styled-system/css";
import { deleteCategory } from "../../../../../api/category";
import useCategory, { IUseCategoryListReturn } from "../../../../../hooks/use-category";
import IconPlus from "../../icon-plus";
import { useState } from "react";
import AddCategoryModal from "./add-category-modal";
import EditCategoryModal from "./edit-category-modal";

const MyCategoryList = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState<IUseCategoryListReturn>();

  const categoryList = useCategory();

  const handleCloseEditModal = () => {
    setEditModalOpen(undefined);
  }

  const handleDelete = async (id: number) => {
    const { success } = await deleteCategory(id);

    if (success) {
      alert("삭제되었습니다.");
      return;
    }
    alert("잠시후 다시 시도해주세요.");
    return;
  };

  const categoryListItemStyle = CategoryListItemSva();

  if (!categoryList || categoryList.length === 0) {
    // TODO: EMPTY 컴포넌트 필요
    return <div>카테고리가 없습니다.</div>;
  }
  return (
    <div>
      <div className={categoryListItemStyle.addButtonWrapper}>
        <button onClick={() => setAddModalOpen(true)}><IconPlus fill="#000" /><span>카테고리 추가</span></button>
      </div>
      <div>
        {categoryList.map((category) => (
          <li className={categoryListItemStyle.item} key={category.id}>
            <div>
              <div className={categoryListItemStyle.categoryName}>
                {category.category_name}
              </div>
            </div>
            <div className={categoryListItemStyle.buttonWrapper}>
              <button onClick={() => setEditModalOpen(category)}>
                <img
                  src="/icons/icon-pencil.svg"
                  alt="수정"
                  className={css({ w: "18px" })}
                />
              </button>
              <button onClick={() => handleDelete(category.id)}>
                <img src="/icons/icon-close.svg" alt="삭제" />
              </button>
            </div>
          </li>
        ))}
      </div>
        {addModalOpen && <AddCategoryModal modalOpen={addModalOpen} setModalOpen={setAddModalOpen} />}
        {editModalOpen && <EditCategoryModal modalOpen={!!editModalOpen} setModalOpen={handleCloseEditModal} category={editModalOpen} />}
    </div>
  );
};

export default MyCategoryList;

const CategoryListItemSva = sva({
  slots: ["item", "categoryName", "buttonWrapper", "addButtonWrapper"],
  base: {
    item: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      pr: "10px",
    },
    categoryName: {
      textStyle: "Text-20-M",
    },
    buttonWrapper: {
      display: "flex",
      gap: "12px",
    },
    addButtonWrapper: {
      width:"130px",
      position: "sticky",
      bg: "white",
      top: "35px",
      margin:"0 0 20px auto",
      "& > button": {
        display: 'flex',
        paddingTop: "10px",
        gap:"10px",
        textStyle: "Text-16-M",
      }
    },
  },
});
