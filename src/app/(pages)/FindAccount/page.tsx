"use client";

import Button from "@common/button";
import Form from "@common/form";
import Input from "@common/input";
import React, { useState } from "react";
import { css, cx } from "@styled-system/css";
import { resetPassword } from "../../api/auth";
import { loginStyle } from "../Login/components/login";

const FindAccount = () => {
  const [email, setEmail] = useState("");

  const handleFindAccount = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await resetPassword(email);

    if (JSON.parse(error)) {
      alert("이메일을 확인해주세요.");
      return;
    }

    alert(
      "이메일로 비밀번호 재설정 링크를 보냈습니다. \n이메일을 확인해주세요.",
    );
    return;
  };

  return (
    <div className={loginStyle.wrapper}>
      <h2 className={loginStyle.imgWrapper}>
        <img src="/images/main-logo.png" alt="jamongda" />
      </h2>
      <div
        className={cx(loginStyle.box, css({ mb: "auto", height: "inherit" }))}
      >
        <h3 className={css({ textStyle: "Text-22-M" })}>계정 찾기</h3>
        <Form onSubmit={handleFindAccount}>
          <Input
            text="이메일"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={loginStyle.buttonWrapper}>
            <Button text="복구 메일 전송" type="submit" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FindAccount;
