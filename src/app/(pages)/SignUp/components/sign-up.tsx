"use client";

import Button from "@common/button";
import Form from "@common/form";
import Input from "@common/input";
import { useState } from "react";
import { css, sva } from "@styled-system/css";
import { useRouter } from "next/navigation";
import { signUp } from "../../../api/auth";
import { emailRegex } from "../../../utils/regex";

const SignUp = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setChecPassword] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
    if (password.trim() !== checkPassword.trim()) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // if (name.trim() === "") {
    //   alert("이름을 입력해주세요.");
    //   return;
    // }
    if (email.trim() === "") {
      alert("이메일을 입력해주세요.");
      return;
    }
    if (!emailRegex.test(email)) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }
    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (checkPassword.trim() === "") {
      alert("비밀번호 확인을 입력해주세요.");
      return;
    }

    const { data, error } = await signUp(email.trim(), password.trim());

    if (JSON.parse(error)?.__isAuthError || !JSON.parse(data)?.user) {
      alert("회원가입에 실패했습니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    alert("회원가입이 완료되었습니다. 이메일 인증을 완료해주세요.");
    router.push("/Login");
  };
  return (
    <div className={signUpStyle.wrapper}>
      <div className={signUpStyle.box}>
        <h3 className={css({ textStyle: "Text-22-M" })}>회원가입</h3>
        <Form>
          {/* <Input text="이름" name="name" /> */}
          <Input
            text="이메일"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            text="비밀번호"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            text="비밀번호 확인"
            name="checkPassword"
            type="password"
            value={checkPassword}
            onChange={(e) => setChecPassword(e.target.value)}
          />
        </Form>
        <Button
          text="회원가입하기"
          className={css({ mt: "1.875rem !important" })}
          onClick={handleSignup}
        />
      </div>
    </div>
  );
};

export default SignUp;

const SignUpSva = sva({
  slots: ["wrapper", "box"],
  base: {
    wrapper: {
      w: "100vw",
      h: "100%",
      bgColor: "lightOrange",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
    },
    box: {
      bgColor: "white",
      borderTopRadius: "3.125rem",
      p: "3.75rem 3.125rem 5rem",
      boxShadow: "0rem -.3125rem 1.25rem 0rem rgba(0, 0, 0, 0.1)",
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
  },
});
const signUpStyle = SignUpSva();
