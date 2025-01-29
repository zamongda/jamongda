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

  const defaultWord = [{id:0, user_id:"0", en:"저장된 단어가 \n 없습니다.", ko:"🥲", is_memorized: false, created_at:new Date().toDateString() }]

  return (
    <>
      <CardSlide allWords={!filteredWords || filteredWords.length === 0 ? defaultWord:filteredWords} />
      <Form className={mainStyle.form}>
        <CategorySelect setCategory={setCategory} categoryList={categoryListData} />
      </Form>
    </>
  );
};

export default React.memo(CardSlideContainer);
