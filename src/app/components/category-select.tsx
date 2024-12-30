import React, { use } from "react";
import { mainStyle } from "../(pages)/(main)/components/main";
import { IUseCategoryListReturn } from "../(pages)/MyWords/hooks/use-category";

interface ICategorySelectProps {}

const CategorySelect = ({
  setCategory,
  categoryList,
}: {
  setCategory: (value: string) => void;
  categoryList: IUseCategoryListReturn[];
}) => {
  return (
    <select
      name="category"
      id="category"
      className={mainStyle.select}
      onChange={(e) => setCategory(e.target.value)}
      defaultValue={"ALL"}
    >
      <option value="ALL">전체</option>
      {categoryList?.map((category) => (
        <option value={category.id} key={category.id}>
          {category.category_name}
        </option>
      ))}
    </select>
  );
};

export default React.memo(CategorySelect);
