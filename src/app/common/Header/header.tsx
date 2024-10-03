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
          className={css({ w: "167px !important" })}
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
      h: "50px",
      pos: "fixed",
      top: "26px",
      p: "0 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& img": {
        w: "24px",
        h: "24px",
      },
    },
    title: {
      textStyle: "Text-18-M",
      color: "white ",
    },
    back: {
      w: "100vw",
      p: "0 20px",
      pt: "26px",
      pb: "24px",
      bgColor: "lightOrange",
    },
  },
});
const headerStyle = HeaderStyle();