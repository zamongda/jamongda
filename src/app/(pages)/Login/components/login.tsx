import { sva } from "@styled-system/css";
import { Input } from "antd";

const Login = () => {
  return (
    <div className={loginStyle.wrapper}>
      <div className={loginStyle.imgWrapper}>
        <img src="/images/main-logo.png" alt="jamongda" />
      </div>
      <div className={loginStyle.box}>
        <Input placeholder="Username" />
      </div>
    </div>
  );
};

export default Login;

const LoginSva = sva({
  slots: ["wrapper", "imgWrapper", "box"],
  base: {
    wrapper: {
      w: "100vw",
      h: "100dvh",
      bgColor: "lightOrange",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    imgWrapper: {
      display: "flex",
      justifyContent: "center",
      pt: "60px",
      "& img": {
        w: "217px",
      },
    },
    box: {
      bgColor: "white",
      borderTopRadius: "50px",
      p: "60px 0 80px",
    },
  },
});
const loginStyle = LoginSva();
