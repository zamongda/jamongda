import Form from "@common/form/form";
import { Suspense, use } from "react";
import { css } from "@styled-system/css";
import { useCategoryList } from "../../hooks/use-category";
import useWordsList from "./hooks/use-words-list";

const MyWordsDrawerFilter = () => {
  const { setCategory } = useWordsList();
  const categoryList = use(useCategoryList());

  if (!categoryList) return null;

  return (
    <Form className={wordsSelectStyle}>
      <Suspense>
        <select
          name="wordsList"
          id="wordsList"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value={"ALL"}>전체</option>

          {categoryList.map((category) => (
            <option key={category.id} value={category.category_name}>
              {category.category_name}
            </option>
          ))}
        </select>
      </Suspense>
    </Form>
  );
};

export default MyWordsDrawerFilter;

const wordsSelectStyle = css({
  position: "absolute",
  top: "30px",
  right: "30px",
  w: "auto",
  textStyle: "Text-14-M",
});
