import { use } from "react";
import { css, sva } from "@styled-system/css";
import { deleteCategory } from "../../../../../api/category";
import { IUseCategoryListReturn } from "../../../hooks/use-category";

const MyCategoryList = ({
  categoryListData,
}: {
  categoryListData: Promise<IUseCategoryListReturn[]>;
}) => {
  const categoryList = use(categoryListData);

  const handleModify = () => {
    console.log("수정");
  };

  const handleDelete = async (id: number) => {
    const { success } = await deleteCategory(id);

    if (success) {
      alert("삭제되었습니다.");
      return;
    }
    return;
  };

  const categoryListItemStyle = CategoryListItemSva();

  if (!categoryList || categoryList.length === 0) {
    // TODO: EMPTY 컴포넌트 필요
    return <div>카테고리가 없습니다.</div>;
  }
  return (
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
  );
};

export default MyCategoryList;

const CategoryListItemSva = sva({
  slots: ["item", "categoryName", "buttonWrapper"],
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
  },
});
