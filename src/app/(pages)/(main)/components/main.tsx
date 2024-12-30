"use client";

import Button from "@common/ㅜutton";
import { Suspense, useEffect, useState } from "react";
import { sva } from "@styled-system/css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { useRouter } from "next/navigation";
import { useLogin } from "../../../providers/auth-provider";
import { useCategoryList } from "../../MyWords/hooks/use-category";
import { useMyWords } from "../../MyWords/hooks/use-words";
import AddWordModal from "./add-word-modal";
import CardSlideContainer from "./card-slide-container";

const Main = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const isLogin = useLogin();

  const allWordsData = useMyWords();
  const categoryListData = useCategoryList();

  return (
    <div className={mainStyle.wrapper}>
      {/* {isLogin && (
        <> */}
      <div className={mainStyle.inner}>
        <button
          className={mainStyle.addButton}
          onClick={() => setModalOpen(true)}
        >
          <img src="/icons/icon-plus.svg" alt="추가하기" />
          <span>카드 추가하기</span>
        </button>

        <ErrorBoundary errorComponent={undefined}>
          <Suspense fallback={null}>
            <CardSlideContainer
              allWordsData={allWordsData}
              categoryListData={categoryListData}
            />
          </Suspense>
        </ErrorBoundary>
        <div className={mainStyle.buttonWrapper}>
          <Button
            text="테스트 시작"
            size="lg"
            onClick={() => router.push("/Test")}
          />
        </div>
      </div>
      <AddWordModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {/* </>
      )} */}
    </div>
  );
};

export default Main;

const MainSva = sva({
  slots: ["wrapper", "inner", "addButton", "form", "select", "buttonWrapper"],
  base: {
    wrapper: {
      w: "100vw",
      h: "100dvh",
      bgColor: "lightOrange",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
      "&:before": {
        content: "''",
        w: "100%",
        h: "70%",
        bgColor: "#FAFAFA",
        position: "absolute",
        left: "0",
        bottom: "0",
        borderTopRadius: "3.125rem",
      },
    },
    inner: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      w: "100%",
      h: "85.76%",
      maxH: "46.875rem",
    },
    addButton: {
      w: "11.25rem",
      h: "3.125rem",
      bgColor: "white ",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: ".25rem",
      boxShadow: "0rem .25rem .625rem 0rem rgba(0, 0, 0, 0.1)",
      borderRadius: "1.875rem",
      textStyle: "Text-16-M",
      color: "black",
    },
    form: {
      p: "0 1.25rem",
      mt: "1.25rem",
      position: "relative",
    },
    select: {
      outline: "none",
      w: "100%",
      h: "3.125rem",
      bgColor: "white",
      borderRadius: ".9375rem",
      border: ".0625rem solid {colors.gray.04} ",
      p: "0 1.25rem ",
      textStyle: "Text-16-M",
      color: "gray.05!",
      appearance: "none",
      background:
        "url('/icons/icon-arrow-down.svg') no-repeat right .9375rem center",
    },
    buttonWrapper: {
      p: "1.25rem 1.25rem 2.5rem",
      w: "100%",
    },
  },
});
export const mainStyle = MainSva();
