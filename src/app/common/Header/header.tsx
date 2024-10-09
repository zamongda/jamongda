"use client";

import { css, sva } from "@styled-system/css";

import { useRouter } from "next/navigation";

interface HeaderProps {
  type?: "default" | "main" | "back";
  title?: string;
}
const Header = ({ title, type = "default" }: HeaderProps) => {
  const router = useRouter();

  if (type === "default") {
    return (
      <div className={headerStyle.wrapper}>
        <img
          src="/icons/icon-back.svg"
          alt="뒤로가기"
          onClick={() => router.back()}
        />
        {title && <h2 className={headerStyle.title}>{title}</h2>}
        <img src="/icons/icon-setting.svg" alt="설정" />
      </div>
    );
  }
  if (type === "main") {
    return (
      <div className={headerStyle.wrapper}>
        <img src="/icons/icon-album.svg" alt="보관함" />
        <img
          src="/images/main-logo.png"
          alt="jamongda"
          className={css({ w: "10.4375rem !important" })}
        />
        <img src="/icons/icon-setting.svg" alt="설정" />
      </div>
    );
  }
  if (type === "back") {
    return (
      <div className={headerStyle.back}>
        <img
          src="/icons/icon-back.svg"
          alt="뒤로가기"
          onClick={() => router.back()}
        />
      </div>
    );
  }
};

export default Header;

const HeaderStyle = sva({
  slots: ["wrapper", "title", "back"],
  base: {
    wrapper: {
      w: "100vw",
      h: "3.125rem",
      pos: "fixed",
      top: "1.625rem",
      p: "0 1.25rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& img": {
        w: "1.5rem",
        h: "1.5rem",
      },
    },
    title: {
      textStyle: "Text-18-M",
      color: "white ",
    },
    back: {
      w: "100vw",
      p: "0 1.25rem",
      pt: "1.625rem",
      pb: "1.5rem",
      bgColor: "lightOrange",
    },
  },
});
const headerStyle = HeaderStyle();
