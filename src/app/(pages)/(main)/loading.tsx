import { css } from "@styled-system/css";

const Loading = () => {
  return (
    <div className={loadingStyle}>
      <img src="/images/main-logo.png" alt="jamongda" />
    </div>
  );
};

export default Loading;

const loadingStyle = css({
  height: "100dvh",
  width: "100vw",
  bgColor: "lightOrange",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    w: "217px",
  },
});
