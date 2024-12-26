import { useState } from "react";

const useWordsList = () => {
  const [category, setCategory] = useState<string>("전체");

  return {
    category,
    setCategory,
  };
};

export default useWordsList;
