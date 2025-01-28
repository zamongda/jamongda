import Form from "@common/form";
import { Suspense } from "react";
import { css } from "@styled-system/css";
import useCategory from "../../../../hooks/use-category";

const MyWordsDrawerFilter = ({
  setCategory,
}: {
  setCategory: (category: string) => void;
}) => {
  const categoryList = useCategory();

  if (!categoryList) return null;

  return (
    <div className={css({ bg: "white", position: "sticky", top: "35px" })}>
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
        <option key={category.id} value={category.id}>
          {category.category_name}
        </option>
      ))}
    </select>
        </Suspense>
      </Form>
    </div>
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
