"use client";

import { sva } from "@styled-system/css";
import { useRouter } from "next/navigation";
import { logout } from "../../../api/auth";

const Setting = () => {
  const router = useRouter();
  const settingStyle = SettingSva();

  const settings = [
    { id: 0, title: "비밀번호 변경하기", onClick: () => {} },
    { id: 0, title: "회원 탈퇴하기", onClick: () => {} },
    {
      id: 0,
      title: "로그아웃",
      onClick: () => {
        logout();
        router.push("/Login");
      },
    },
  ];

  return (
    <div className={settingStyle.wrapper}>
      <div className={settingStyle.inner}>
        <ul className={settingStyle.listWrapper}>
          {settings.map((setting) => (
            <li
              className={settingStyle.list}
              key={setting.id}
              onClick={setting.onClick}
            >
              <div>{setting.title}</div>
              <img src="/icons/icon-arrow-right.svg" alt="선택" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Setting;

const SettingSva = sva({
  slots: ["wrapper", "inner", "listWrapper", "list"],
  base: {
    wrapper: {
      w: "100vw",
      h: "100dvh",
      bgColor: "#FAFAFA",
      display: "flex",
      flexDirection: "column",
      "&:before": {
        content: "''",
        w: "100%",
        h: "70%",
        bgColor: "green",
        position: "absolute",
        left: "0",
        top: "0",
        borderBottomRadius: "3.125rem",
        zIndex: 1,
      },
    },
    inner: {
      p: "66px 20px 0 30px",
      zIndex: 2,
    },
    listWrapper: {
      mt: "40px",
      color: "white",
      textStyle: "Text-18-M",
      "& li ~ li": {
        mt: "30px",
      },
    },
    list: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
});
