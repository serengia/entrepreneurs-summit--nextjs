import React from "react";
import s from "./HeroGeneral.module.scss";

export default function HeroGeneral({ title }) {
  return (
    <div className={s["hero"]}>
      <div className={`${s["hero-wrapper"]} row`}>
        <h1 className={s["title"]}>{title}</h1>
      </div>
    </div>
  );
}
