"use client";

import Modal from "react-modal";
import { css } from "@styled-system/css";
import { AnimatePresence, motion, useDragControls } from "framer-motion";

interface ModalPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  setModalOpen?: (value: boolean) => void;
}

const DrawerPopup = ({ children, isOpen, setModalOpen }: ModalPopupProps) => {
  const controls = useDragControls();

  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={() => setModalOpen && setModalOpen(false)}
          style={customModalStyles}
          ariaHideApp={false}
        >
          <motion.div
            style={modalContentStyle as React.CSSProperties}
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            drag="y"
            dragControls={controls}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragListener={false}
            dragElastic={{
              top: 0,
              bottom: 0.5,
            }}
            onDragEnd={(_event, info) => {
              if (info.offset.y > 100 && setModalOpen) {
                setModalOpen(false);
              }
            }}
          >
            <div
              className={css({
                display: "flex",
                pos: "absolute",
                bgColor: "transparent",
                h: "35px",
                left: "0",
                right: "0",
                top: "-8px",
                zIndex: "1000",
              })}
            >
              <button
                onPointerDown={(e) => {
                  controls.start(e);
                }}
                className={css({
                  w: "100%",
                  h: "100%",
                  cursor: "grab",
                  touchAction: "none",
                  _active: {
                    cursor: "grabbing",
                  },
                })}
              />
            </div>

            {children}
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default DrawerPopup;

const modalContentStyle = {
  width: "100%",
  minHeight: "85%",
  position: "fixed",
  bottom: "0",
  left: "0",
  top: "auto",
  right: "auto",
  borderRadius: "1.875rem 1.875rem 0 0",
  backgroundColor: "white",
  border: "none",
  padding: "1rem",
};
const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    bottom: "0",
    left: "0",
  },
  content: {
    inset: "auto", // 기본 스타일을 무효화
    padding: "0",
    border: "none",
  },
};
