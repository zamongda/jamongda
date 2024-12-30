import Form from "@common/form";
import { Suspense, use } from "react";
import { css } from "@styled-system/css";
import {
  IUseCategoryListReturn,
  useCategoryList,
} from "../../hooks/use-category";

const MyWordsDrawerFilter = ({
  setCategory,
}: {
  setCategory: (category: string) => void;
}) => {
  const categoryList = useCategoryList();

  if (!categoryList) return null;

  return (
    <div className={css({ bg: "white", position: "sticky", top: "35px" })}>
      <Form className={wordsSelectStyle}>
        <Suspense>
          <FilterSelect
            categoryListData={categoryList}
            setCategory={setCategory}
          />
        </Suspense>
      </Form>
    </div>
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
  minW: "75px",
  w: "fit-content",
  textStyle: "Text-14-M",
  bg: "white",
  py: "10px",
  ml: "auto",
});
