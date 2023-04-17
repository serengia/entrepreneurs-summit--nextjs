import React from "react";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className="row">
        <hr className="divider" />
      </div>

      <div className={`${s["footer-content"]} row`}>
        <img src="./img/entre-logo.png" alt="Entrepreneurs summit logo" />
        <div className={s["copyright-content"]}>
          <span className={s["copyright"]}>
            @2022 All right reserved by Entrepreneurs Summit
          </span>
          <p>
            This site is for learning purpose only. I developed this site to
            showcase my web development skills to anyone who is interested with
            my skills.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}
