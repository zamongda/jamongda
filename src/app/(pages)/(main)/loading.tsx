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
  height: "100%",
  width: "100%",
  bgColor: "lightOrange",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& img": {
    width: "217px",
  },
});
