"use client";

import Button from "@common/button/button";
import Form from "@common/form/form";
import Input from "@common/input/input";
import { useState } from "react";
import { css, sva } from "@styled-system/css";
import { useRouter } from "next/navigation";
import { login } from "../../../api/auth";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    const { data } = await login(email, password);
    const { user, session } = JSON.parse(data);

    if (!user || !session) {
      alert("로그인에 실패했습니다.");
      return;
    }

    router.push("/");
  };

  return (
    <div className={loginStyle.wrapper}>
      <h2 className={loginStyle.imgWrapper}>
        <img src="/images/main-logo.png" alt="jamongda" />
      </h2>
      <div className={loginStyle.box}>
        <h3 className={css({ textStyle: "Text-22-M" })}>로그인</h3>
        <Form>
          <Input
            text="이메일"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            text="비밀번호"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <div className={loginStyle.buttonWrapper}>
          <Button text="로그인하기" onClick={handleLogin} />
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
      pt: "3.125rem",
      "& img": {
        w: "13.5625rem",
      },
    },
    box: {
      bgColor: "white",
      borderTopRadius: "3.125rem",
      p: "3.75rem 3.125rem 5rem",
      boxShadow: "0rem -.3125rem 1.25rem 0rem rgba(0, 0, 0, 0.1)",
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
      color: "gray.05!",
      mt: "2.5rem",
      _after: {
        content: '""',
        w: "100%",
        h: ".0625rem",
        bgColor: "gray.05",
        position: "absolute",
        bottom: "-.25rem",
        left: "0",
      },
    },
  },
});
const loginStyle = LoginSva();
