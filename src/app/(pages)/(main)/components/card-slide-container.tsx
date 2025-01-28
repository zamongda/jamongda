import Form from "@common/form";
import React from "react";
import { IWordRes } from "../../../api/word";
import CategorySelect from "../../../components/category-select";
import useWordsList from "../../MyWords/components/my-words-drawer/hooks/use-words-list";
import CardSlide from "./card-slide";
import { mainStyle } from "./main";
import { IUseCategoryListReturn } from "../../../hooks/use-category";

interface ICardSlideContainerProps {
  allWordsData?: IWordRes[];
  categoryListData?: IUseCategoryListReturn[];
}

const CardSlideContainer = ({
  allWordsData,
  categoryListData,
}: ICardSlideContainerProps) => {
  const { filteredWords, setCategory } = useWordsList(allWordsData);

  console.log(filteredWords)

  if(!filteredWords) return <></>

  return (
    <>
      <CardSlide allWords={filteredWords} />
      <Form className={mainStyle.form}>
        <CategorySelect setCategory={setCategory} categoryList={categoryListData} />
      </Form>
    </>
  );
};

export default React.memo(CardSlideContainer);
