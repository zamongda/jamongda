import Form from "@common/form";
import React, { use } from "react";
import { IWordRes } from "../../../api/word";
import CategorySelect from "../../../components/category-select";
import useWordsList from "../../MyWords/components/my-words-drawer/hooks/use-words-list";
import { IUseCategoryListReturn } from "../../MyWords/hooks/use-category";
import CardSlide from "./card-slide";
import { mainStyle } from "./main";

interface ICardSlideContainerProps {
  allWordsData?: IWordRes[];
  categoryListData: Promise<IUseCategoryListReturn[]>;
}

const CardSlideContainer = ({
  allWordsData,
  categoryListData,
}: ICardSlideContainerProps) => {
  const { filteredWords, setCategory } = useWordsList(allWordsData);

  if(!filteredWords) return <></>
  

  const categoryList = use(categoryListData);

  return (
    <>
      <CardSlide allWords={filteredWords} />
      <Form className={mainStyle.form}>
        <CategorySelect setCategory={setCategory} categoryList={categoryList} />
      </Form>
    </>
  );
};

export default React.memo(CardSlideContainer);
