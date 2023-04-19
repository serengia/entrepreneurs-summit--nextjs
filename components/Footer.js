import React from "react";
import s from "./Footer.module.scss";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={s["footer"]}>
      <div className="row">
        <hr className="divider" />
      </div>

      <div className={`${s["footer-content"]} row`}>
        <Link href="/">
          <img src="./img/entre-logo.png" alt="Entrepreneurs summit logo" />
        </Link>
        <div className={s["copyright-content"]}>
          <span className={s["copyright"]}>
            @2023 All right reserved by Entrepreneurs Summit
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
