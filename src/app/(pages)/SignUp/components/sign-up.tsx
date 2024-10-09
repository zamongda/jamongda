import Button from "@/app/common/button/button";
import Form from "@/app/common/form/form";
import Input from "@/app/common/input/input";
import { css, sva } from "@styled-system/css";

const SignUp = () => {
  return (
    <div className={signUpStyle.wrapper}>
      <div className={signUpStyle.box}>
        <h3 className={css({ textStyle: "Text-22-M" })}>회원가입</h3>
        <Form>
          <Input text="이름" name="name" />
          <Input text="이메일" name="email" />
          <Input text="비밀번호" name="password" type="password" />
          <Input text="비밀번호 확인" name="checkPassword" type="password" />
        </Form>
        <Button
          text="회원가입하기"
          className={css({ mt: "1.875rem !important" })}
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
      boxShadow: "0px -5px 20px 0px rgba(0, 0, 0, 0.1)",
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
