"use client";

import { css, cx } from "@styled-system/css";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;}

const Form = ({ children, className, onSubmit }: FormProps) => {
  return <form className={cx(FormStyle, className)} onSubmit={onSubmit}>{children}</form>;
};

export default Form;

const FormStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  w: "100%",
});
