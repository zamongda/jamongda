import { ToastContainer as ToastifyToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { sva } from "@styled-system/css";

export default function ToastContainer() {
  return (
    <ToastifyToastContainer
      position={"bottom-center"}
      toastClassName={toastStyle.toast}
      bodyClassName={toastStyle.body}
      className={toastStyle.container}
      autoClose={1000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      closeButton={false}
      rtl={false}
      draggable
      pauseOnHover
    />
  );
}

const toastSva = sva({
  slots: ["container", "body", "toast"],
  base: {
    container: {
      zIndex: "toast!",
      pt: "3.75rem!",
      px: "1rem!",
      bottom: "3.125rem!",
      display: "flex!",
      justifyContent: "center!",
    },
    body: {
      p: "0!",
      mt: ".625rem",
    },
    toast: {
      bg: "none!",
      boxShadow: "none!",
      p: "0!",
    },
  },
  variants: {},
});
const toastStyle = toastSva();
