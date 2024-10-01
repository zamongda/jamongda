"use client";

import { sva } from "@styled-system/css";
import { Input } from "antd";

const Login = () => {
  return (
    <div className={loginStyle.wrapper}>
      <h2 className={loginStyle.imgWrapper}>
        <img src="/images/main-logo.png" alt="jamongda" />
      </h2>
      <div className={loginStyle.box}>
        <h3>로그인</h3>
        <Input placeholder="이메일" />
        <Input placeholder="비밀번호" className={loginStyle.passwordInput} />
      </div>
    </div>
  );
};

export default Login;

const LoginSva = sva({
  slots: ["wrapper", "imgWrapper", "box", "passwordInput"],
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
      pt: "3.75rem",
      "& img": {
        w: "13.5625rem",
      },
    },
    box: {
      bgColor: "white",
      borderTopRadius: "3.125rem",
      p: "3.75rem 3.125rem 5rem",
      "& h3": {
        textAlign: "center",
      },
    },
    passwordInput: {
      mt: "1.25rem",
    },
  },
});
const loginStyle = LoginSva();
