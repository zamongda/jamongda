import Form from "@common/form/form";
import { Suspense } from "react";
import { css } from "@styled-system/css";
import { useCategoryList } from "../../hooks/use-category";

const MyWordsDrawerFilter = async () => {
  const categoryList = await useCategoryList();

  console.log(categoryList, "categoryList");
  return (
    <Form className={wordsSelectStyle}>
      <Suspense>
        <select name="wordsList" id="wordsList">
          {categoryList.map((category) => (
            <option key={category.id} value={category.id}>
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
