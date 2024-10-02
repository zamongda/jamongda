"use client";

import Button from "@/app/common/Button/button";
import Form from "@/app/common/Form/form";
import Input from "@/app/common/Input/input";
import { css, sva } from "@styled-system/css";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  return (
    <div className={loginStyle.wrapper}>
      <h2 className={loginStyle.imgWrapper}>
        <img src="/images/main-logo.png" alt="jamongda" />
      </h2>
      <div className={loginStyle.box}>
        <h3 className={css({ textStyle: "Text-22-M" })}>로그인</h3>
        <Form>
          <Input text="이메일" name="email" />
          <Input text="비밀번호" name="password" type="password" />
        </Form>
        <div className={loginStyle.buttonWrapper}>
          <Button text="로그인하기" />
          <Button
            text="카카오 로그인"
            bgColor="white"
            Icon="/icons/icon-kakao.svg"
          />
          <Button
            text="회원가입하기"
            bgColor="lightGreen"
            onClick={() => router.push("/SignUp")}
          />
        </div>
        <span className={loginStyle.findAccountButton}>
          계정을 잃어버리셨나요?
        </span>
      </div>
    </div>
  );
};

export default Login;

const LoginSva = sva({
  slots: [
    "wrapper",
    "imgWrapper",
    "box",
    "passwordInput",
    "buttonWrapper",
    "findAccountButton",
  ],
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
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      mt: "2.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      "& h3": {
        textAlign: "center",
      },
      "& form": {
        mt: "2.5rem",
        w: "100%",
      },
    },
    passwordInput: {
      mt: "1.25rem",
    },
    buttonWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: ".875rem",
      mt: "1.875rem",
      w: "100%",
    },
    findAccountButton: {
      textStyle: "Text-12-M",
      position: "relative",
      color: "gray.05",
      mt: "2.5rem",
      _after: {
        content: '""',
        w: "100%",
        h: "1px",
        bgColor: "gray.05",
        position: "absolute",
        bottom: "-.25rem",
        left: "0",
      },
    },
  },
});
const loginStyle = LoginSva();
