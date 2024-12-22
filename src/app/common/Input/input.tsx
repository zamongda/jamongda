"use client";

import { css } from "@styled-system/css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  type?: "password" | "text";
}
const Input = ({ text, name, type = "text", ...props }: InputProps) => {
  return (
    <div className={InputWrapper}>
      <label
        htmlFor={name}
        className={css({ textStyle: "Text-12-M", color: "gray.04!" })}
      >
        {text}
      </label>
      <input
        id={name}
        type={type}
        className={InputStyle}
        {...props}
        placeholder={props.placeholder || text}
      />
    </div>
  );
};
export default Input;

const InputWrapper = css({
  display: "flex",
  flexDirection: "column",
  w: "100%",
  p: "1.25rem",
  bgColor: "gray.01",
  borderRadius: ".625rem",
  gap: "0.5rem",
});

const InputStyle = css({
  textStyle: "Text-16-M",
  color: "gray.05!",
  outline: "none",
});
