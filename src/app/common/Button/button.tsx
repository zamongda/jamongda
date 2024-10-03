"use client";

import { css, cva, cx } from "@styled-system/css";

interface ButtonProps {
  text: string;
  bgColor?: "orange" | "lightGreen" | "white";
  size?: "lg" | "sm";
  Icon?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({
  text,
  bgColor = "orange",
  size = "sm",
  Icon,
  disabled = false,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <button
      className={cx(buttonCva({ bgColor, size }), className)}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <img src={Icon} alt="" className={iconStyle} />}
      {text}
    </button>
  );
};

export default Button;

export const buttonCva = cva({
  base: {
    position: "relative",
    w: "100%",
    borderRadius: "1.875rem",
    textAlign: "center",
    textWrap: "nowrap",
    cursor: "pointer",
    color: "white !important",
    _disabled: {
      bg: "gray.04 !important",
      cursor: "not-allowed",
    },
  },
  variants: {
    size: {
      lg: { height: "4.5rem", textStyle: "Text-22-M" },
      sm: { height: "3.125rem", textStyle: "Text-16-M" },
    },
    bgColor: {
      orange: {
        bgColor: "orange !important",
      },
      lightGreen: { bgColor: "lightGreen !important" },
      white: {
        bgColor: "white !important",
        border: "1px solid {colors.gray.04} !important",
        color: "black",
      },
    },
  },
});

const iconStyle = css({
  position: "absolute",
  left: "1.25rem",
  top: "50%",
  transform: "translateY(-50%)",
  width: "1.5rem",
});
