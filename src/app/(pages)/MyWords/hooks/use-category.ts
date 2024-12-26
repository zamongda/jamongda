"use client";

import { getCategories } from "../../../api/category";

export interface IUseCategoryListReturn {
  id: number;
  category_name: string;
}

export const useCategoryList = async (): Promise<IUseCategoryListReturn[]> => {
  const list = await getCategories();

  return JSON.parse(list.data);
};
