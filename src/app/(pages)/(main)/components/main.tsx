"use client";
import { css, sva } from "@styled-system/css";
import CardSlide from "./card-slide";
import Button from "@/app/common/button/button";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { ToastPopup } from "@/app/common/toast/toast-popup";
import { useState } from "react";
import Modal from "react-modal";
import Form from "@/app/common/form/form";
import ModalPopup from "@/app/common/modal/modal-popup";
import Input from "@/app/common/input/input";

const Main = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const openAddCardModal = () => {
    toast(<ToastPopup text="준비중입니다." />);
  };

  return (
    <div className={mainStyle.wrapper}>
      <div className={mainStyle.inner}>
        <button
          className={mainStyle.addButton}
          onClick={() => setModalOpen(true)}
        >
          <img src="/icons/icon-plus.svg" alt="추가하기" />
          <span>카드 추가하기</span>
        </button>
        <CardSlide />
        <Form className={mainStyle.form}>
          <select name="category" id="category" className={mainStyle.select}>
            <option value="all" selected>
              전체
            </option>
            <option value="business">비즈니스</option>
            <option value="conversation">회화</option>
          </select>
        </Form>
        <div className={mainStyle.buttonWrapper}>
          <Button
            text="테스트 시작"
            size="lg"
            // onClick={() => router.push("/Test")}
            onClick={openAddCardModal}
          />
        </div>
      </div>
      <ModalPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
        <Form>
          <Input
            text="단어 또는 문장"
            name="word"
            placeholder="단어 또는 문장을 입력하세요"
          />
          <Input text="뜻" name="meaning" placeholder="뜻을 입력하세요" />
        </Form>
        <Button text="저장하기" className={css({ mt: "40px!" })} />
      </ModalPopup>
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
      bgColor: "white !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: ".25rem",
      boxShadow: "0rem .25rem .625rem 0rem rgba(0, 0, 0, 0.1)",
      borderRadius: "1.875rem",
      textStyle: "Text-16-M",
      color: "black !important",
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
      border: ".0625rem solid {colors.gray.04} !important",
      p: "0 1.25rem !important",
      textStyle: "Text-16-M",
      color: "gray.05 !important",
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
const mainStyle = MainSva();
