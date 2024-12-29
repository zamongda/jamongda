"use client";

import { getCategories } from "../../../api/category";

export interface IUseCategoryListReturn {
  id: number;
  category_name: string;
}

export const useCategoryList = async () => {
  try {
    const list = await getCategories();

    return JSON.parse(list.data);
  } catch (e) {
    console.error(e);
  }
};
