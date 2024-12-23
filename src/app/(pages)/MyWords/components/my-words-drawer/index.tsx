import DrawerPopup from "@common/modal/drawer-popup";
import { Suspense, memo } from "react";
import { css } from "@styled-system/css";
import MyWordsDrawerFilter from "./drawer-filter";

interface IMyWordsDrawerProps {
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  children?: React.ReactNode;
}

const MyWordsDrawerContainer = ({
  modalOpen,
  setModalOpen,
  children,
}: IMyWordsDrawerProps) => {
  return (
    <DrawerPopup isOpen={modalOpen} setModalOpen={setModalOpen}>
      <Suspense fallback={null}>
        <MyWordsDrawerFilter />
      </Suspense>
      <ul
        className={css({
          "& li ~ li": {
            borderTop: "1px solid #E5E5E5",
            mt: "20px",
            pt: "20px",
          },
        })}
      >
        <Suspense>{children}</Suspense>
      </ul>
    </DrawerPopup>
  );
};

export default memo(MyWordsDrawerContainer);
