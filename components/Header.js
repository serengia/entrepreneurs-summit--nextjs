import React, { useState } from "react";
import s from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={s["header"]}>
      <div className={s["header-top"]}>
        <div className={`${s["header-top-container"]} row`}>
          <div className={s["social-links"]}>
            <a href="https://github.com/serengia" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com/JamesSerengia" target="_blank">
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
        <Link href="/" className={s["logo-link"]}>
          <img
            src="./img/entre-logo.png"
            className={s["logo"]}
            alt="Entrepreneurs summit logo"
          />
        </Link>

        <nav className={s["nav"]}>
          <button className={s["menu-button"]}>
            {!menuOpen && (
              <i
                className={`${s["menu-icon"]} ${s["menu-icon-open"]} fa-solid fa-bars`}
                onClick={() => setMenuOpen(true)}
              ></i>
            )}
            {menuOpen && (
              <i
                className={`${s["menu-icon"]} ${s["menu-icon-close"]} fa-solid fa-xmark`}
                onClick={() => setMenuOpen(false)}
              ></i>
            )}

            {/* <i className="fa-solid fa-bars menu-icon menu-icon-open"></i>
            <i className="fa-solid fa-xmark menu-icon menu-icon-close hidden"></i> */}
          </button>

          <ul
            className={`${s["nav-links"]} ${
              menuOpen ? "" : s["hide-mobile-menu"]
            }`}
          >
            <li className={s["nav-links-item"]}>
              <Link
                href={"/"}
                className={router?.pathname === "/" ? "active-nav-link" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link
                href={"/about"}
                className={
                  router?.pathname === "/about" ? "active-nav-link" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link
                href={"/program"}
                className={
                  router?.pathname === "/program" ? "active-nav-link" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Program
              </Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link
                href={"/sponsor"}
                className={
                  router?.pathname === "/sponsor" ? "active-nav-link" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                Sponsor
              </Link>
            </li>
            <li className={s["nav-links-item"]}>
              <Link
                href={"/news"}
                className={
                  router?.pathname === "/news" ? "active-nav-link" : ""
                }
                onClick={() => setMenuOpen(false)}
              >
                News
              </Link>
            </li>
            <li className={`${s["nav-links-item"]}`}>
              <button className={s["btn"]}>Attend</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
