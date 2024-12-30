"use client";

import { css, cx } from "@styled-system/css";

interface FormProps {
  children: React.ReactNode;
  className?: string;
}

const Form = ({ children, className }: FormProps) => {
  return <form className={cx(FormStyle, className)}>{children}</form>;
};

export default Form;

const FormStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "1.25rem",
  w: "100%",
});
