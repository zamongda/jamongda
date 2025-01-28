import { css, sva } from "@styled-system/css";
import { addCategory, deleteCategory } from "../../../../../api/category";
import useCategory from "../../../../../hooks/use-category";
import IconPlus from "../../icon-plus";
import { useState } from "react";
import AddCategoryModal from "./add-category-modal";

const MyCategoryList = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const categoryList = useCategory();

  const handleModify = () => {
    console.log("수정");
  };

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
        <button onClick={() => setModalOpen(true)}><IconPlus fill="#000" /><span>카테고리 추가하기</span></button>
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
              <button onClick={handleModify}>
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
        {modalOpen && <AddCategoryModal modalOpen={modalOpen} setModalOpen={setModalOpen} />}
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
      width:"160px",
      position: "sticky",
      bg: "white",
      top: "35px",
      margin:"0 0 20px auto",
      "& > button": {
        display: 'flex',
        gap:"10px",
        textStyle: "Text-16-M",
      }
    },
  },
});
