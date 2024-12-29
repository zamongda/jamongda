import Form from "@common/form/form";
import React, { use } from "react";
import { IWordRes } from "../../../api/word";
import useWordsList from "../../MyWords/components/my-words-drawer/hooks/use-words-list";
import { IUseCategoryListReturn } from "../../MyWords/hooks/use-category";
import CardSlide from "./card-slide";
import { mainStyle } from "./main";

interface ICardSlideContainerProps {
  allWordsData: Promise<IWordRes[]>;
  categoryListData: Promise<IUseCategoryListReturn[]>;
}

const CardSlideContainer = ({
  allWordsData,
  categoryListData,
}: ICardSlideContainerProps) => {
  const allWords = use(allWordsData);
  const categoryList = use(categoryListData);
  const { filteredWords, setCategory } = useWordsList(allWords);
  return (
    <>
      <CardSlide allWords={filteredWords} />
      <Form className={mainStyle.form}>
        <select
          name="category"
          id="category"
          className={mainStyle.select}
          onChange={(e) => setCategory(e.target.value)}
          defaultValue={"ALL"}
        >
          <option value="ALL">전체</option>
          {categoryList?.map((category) => (
            <option value={category.id} key={category.id}>
              {category.category_name}
            </option>
          ))}
        </select>
      </Form>
    </>
  );
};

export default React.memo(CardSlideContainer);
