"use client";

import { css } from "@styled-system/css";

interface FormProps {
  children: React.ReactNode;
}

const Form = ({ children }: FormProps) => {
  return <form className={FormStyle}>{children}</form>;
};

export default Form;

const FormStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
});
