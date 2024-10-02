"use client";

import { css } from "@styled-system/css";

interface InputProps {
  text: string;
  name: string;
  placeholder?: string;
}
const Input = ({ text, name, placeholder = text }: InputProps) => {
  return (
    <div className={InputStyle}>
      <label
        htmlFor={name}
        className={css({ textStyle: "Text-12-M", color: "gray.04" })}
      >
        {text}
      </label>
      <input
        id={name}
        type="text"
        placeholder={placeholder}
        className={css({
          textStyle: "Text-16-M",
          color: "gray.05",
          outline: "none",
        })}
      />
    </div>
  );
};
export default Input;

const InputStyle = css({
  display: "flex",
  flexDirection: "column",
  w: "100%",
  p: "1.25rem",
  bgColor: "gray.01",
  borderRadius: "10px",
  gap: "0.5rem",
});
