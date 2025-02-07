"use client";

import Button from "@common/button";
import Form from "@common/form";
import Input from "@common/input";
import { useState } from "react";
import { css, cx } from "@styled-system/css";
import { useRouter } from "next/navigation";
import { updatePassword } from "../../api/auth";
import { loginStyle } from "../Login/components/login";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.trim() === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    if (password.trim().length < 6) {
      alert("비밀번호는 6자 이상이어야 합니다.");
      return;
    }

    const { error } = await updatePassword(password);

    if (JSON.parse(error)) {
      alert("잠시후 다시 시도해주세요.");
      return;
    }

    alert("비밀번호가 변경되었습니다.");
    router.push("/Login");
  };
  return (
    <div className={loginStyle.wrapper}>
      <h2 className={loginStyle.imgWrapper}>
        <img src="/images/main-logo.png" alt="jamongda" />
      </h2>
      <div
        className={cx(loginStyle.box, css({ mb: "auto", height: "inherit" }))}
      >
        <h3 className={css({ textStyle: "Text-22-M" })}>비밀번호 재설정</h3>
        <Form onSubmit={handleResetPassword}>
          <Input
            text="비밀번호"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className={loginStyle.buttonWrapper}>
            <Button text="비밀번호 재설정" type="submit" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
