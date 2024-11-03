"use client";

import Modal from "react-modal";

interface ModalPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  setModalOpen?: (value: boolean) => void;
}

const ModalPopup = ({ children, isOpen, setModalOpen }: ModalPopupProps) => {
  return (
    <Modal isOpen={isOpen} style={customModalStyles} ariaHideApp={false}>
      <div style={closeIconStyle}>
        <img
          src="/icons/icon-close.svg"
          alt="닫기"
          onClick={() => setModalOpen && setModalOpen(false)}
        />
      </div>
      {children}
    </Modal>
  );
};

export default ModalPopup;

const closeIconStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "1rem",
};
const customModalStyles: ReactModal.Styles = {
  overlay: {
    backgroundColor: " rgba(0, 0, 0, 0.4)",
    width: "100%",
    height: "100vh",
    zIndex: "10",
    position: "fixed",
    top: "0",
    left: "0",
  },
  content: {
    width: "19.6875rem",
    height: "fit-content",
    zIndex: "150",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1.875rem",
    backgroundColor: "white",
    border: "none",
  },
};
