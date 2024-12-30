"use client";

import { useCategoryList } from "../../../hooks/use-category";
import MyCategoryList from "./my-category-list";

const MyCategoryContent = () => {
  const categoryList = useCategoryList();

  return <MyCategoryList categoryListData={categoryList} />;
};

export default MyCategoryContent;
