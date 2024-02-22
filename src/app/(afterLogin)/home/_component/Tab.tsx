"use client";

import { useState } from "react";
import style from "./tab.module.css";

export default function Tab() {
  const [tab, setTab] = useState("rec");

  const onClickTab = (localTab: "fol" | "rec") => () => {
    setTab(localTab);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeText}>홈</div>
      <div className={style.homeTab}>
        <div onClick={onClickTab("rec")}>
          추천
          <div className={style.tabIndicator} hidden={tab === "fol"}></div>
        </div>
        <div onClick={onClickTab("fol")}>
          팔로우 중
          <div className={style.tabIndicator} hidden={tab === "rec"}></div>
        </div>
      </div>
    </div>
  );
}
