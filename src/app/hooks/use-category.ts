'use client';

import { useEffect, useState } from "react";
import { getCategories } from "../api/category";

export interface IUseCategoryListReturn {
    id: number;
    category_name: string;
  }

const useCategory = () => {
const [categories, setCategories] = useState<IUseCategoryListReturn[]>();

useEffect(() => {
    const fetchWords = async () => {
      try {
        const { data: myCategory } = await getCategories();
    
        if (!myCategory) {
          return;
        }
    
        setCategories(JSON.parse(myCategory));
        return ;
      } catch (e) {
        console.error(e);
      }
    }

    fetchWords();
  }, []);

  return categories;
}

export default useCategory;