import { getCategories } from "../../../api/category";

interface IUseCategoryListReturn {
  id: number;
  category_name: string;
}

export const useCategoryList = async (): Promise<IUseCategoryListReturn[]> => {
  const list = await getCategories();

  return JSON.parse(list.data);
};
