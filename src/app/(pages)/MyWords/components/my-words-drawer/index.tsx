import DrawerPopup from "@common/modal/drawer-popup";
import { Suspense } from "react";
import { css } from "@styled-system/css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

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
      <ul
        className={css({
          "& li ~ li": {
            borderTop: "1px solid #E5E5E5",
            mt: "20px",
            pt: "20px",
          },
        })}
      >
        <ErrorBoundary errorComponent={undefined}>
          <Suspense fallback={null}>{children}</Suspense>
        </ErrorBoundary>
      </ul>
    </DrawerPopup>
  );
};

export default MyWordsDrawerContainer;
