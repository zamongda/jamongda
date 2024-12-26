"use client";

import { Suspense, use } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { useCategoryList } from "../../../hooks/use-category";
import MyCategoryList from "./my-category-list";

const MyCategoryContent = () => {
  const categoryList = useCategoryList();

  return <MyCategoryList categoryListData={categoryList} />;
};

export default MyCategoryContent;
