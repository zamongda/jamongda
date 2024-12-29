import Form from "@common/form/form";
import { Suspense, use } from "react";
import { css } from "@styled-system/css";
import {
  IUseCategoryListReturn,
  useCategoryList,
} from "../../hooks/use-category";
import useWordsList from "./hooks/use-words-list";

const MyWordsDrawerFilter = ({
  setCategory,
}: {
  setCategory: (category: string) => void;
}) => {
  const categoryList = useCategoryList();

  if (!categoryList) return null;

  return (
    <Form className={wordsSelectStyle}>
      <Suspense>
        <FilterSelect
          categoryListData={categoryList}
          setCategory={setCategory}
        />
      </Suspense>
    </Form>
  );
};

const FilterSelect = ({
  categoryListData,
  setCategory,
}: {
  categoryListData: Promise<IUseCategoryListReturn[]>;
  setCategory: (category: string) => void;
}) => {
  const categoryList = use(categoryListData);
  return (
    <select
      name="wordsList"
      id="wordsList"
      onChange={(e) => {
        setCategory(e.target.value);
      }}
    >
      <option value={"ALL"}>전체</option>

      {categoryList.map((category) => (
        <option key={category.id} value={category.id}>
          {category.category_name}
        </option>
      ))}
    </select>
  );
};

export default MyWordsDrawerFilter;

const wordsSelectStyle = css({
  position: "sticky",
  top: "35px",
  minW: "75px",
  w: "fit-content",
  textStyle: "Text-14-M",
  bg: "white",
  py: "10px",
  ml: "auto",
});
