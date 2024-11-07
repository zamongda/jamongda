"use client";

import Modal from "react-modal";

interface ModalPopupProps {
  children: React.ReactNode;
  isOpen: boolean;
  setModalOpen?: (value: boolean) => void;
}

const DrawerPopup = ({ children, isOpen, setModalOpen }: ModalPopupProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setModalOpen && setModalOpen(false)}
      style={customModalStyles}
      ariaHideApp={false}
    >
      <div style={barIconStyle}>
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

export default DrawerPopup;

const barIconStyle = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginBottom: "1rem",
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
  },
};
