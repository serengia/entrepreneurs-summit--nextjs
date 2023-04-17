import React from "react";
import s from "./Speaker.module.scss";

export default function Speaker({ data }) {
  const { name, title, description, img } = data;
  return (
    <div className={s["speaker"]}>
      <img src={img} alt={name} className={s["speaker-img"]} />
      <div className={s["speaker-details"]}>
        <h4 className={s["name"]}>{name}</h4>
        <p className={s["title"]}>{title}</p>
        <p className={s["description"]}>{description}</p>
      </div>
    </div>
  );
}
