import React from "react";
import s from "./Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <header className={s["header"]}>
      <div className={s["header-top"]}>
        <div className={`${s["header-top-container"]} row`}>
          <div className={s["social-links"]}>
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>

          <ul className={s["user-links"]}>
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">My Page</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${s["header-bottom"]} row`}>
        <a href="" className={s["logo-link"]}>
          <img
            src="./img/entre-logo.png"
            className={s["logo"]}
            alt="Entrepreneurs summit logo"
          />
        </a>

        <nav className={s["nav"]}>
          <button className={s["menu-button"]}>
            <i className="fa-solid fa-bars menu-icon menu-icon-open"></i>
            <i className="fa-solid fa-xmark menu-icon menu-icon-close hidden"></i>
          </button>
          <ul className={s["nav-links"]}>
            <li className={s["nav-links-item"]}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link href={"/about"}>About</Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link href={"/program"}>Program</Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link href={"/sponsor"}>Sponsor</Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link href={"/news"}>News</Link>
            </li>
            <li className={`${s["nav-links-item"]} ${s["btn"]}`}>
              <a href="">Attend</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
