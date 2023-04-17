import React from "react";
import s from "./AboutHero.module.scss";

export default function AboutHero() {
  return (
    <section className={s["about-hero"]}>
      <div className={`${s["about-hero-container"]} row`}>
        <h1 className="heading-large">Entrepreneurs Forum Summit 2022</h1>
        <div className={s["description"]}>
          <p>
            {" "}
            A yearly Entrepreneurs Summit where you get a chance to connect
            entrepreneurs and people who are doing amazing things around the
            world.
          </p>
          <p>
            One of the main speakers will be James Serengia. James Serengia is a
            Senior Software Engineer at sawabox.com. He is also the author of
            Life Gives You What You Settle For. He is passionate about people
            and finding better ways to do things.
          </p>
        </div>
        <div className={s["email-container"]}>
          <p className={s["email-lead"]}>
            If you have any question about the summit please contact us through.
          </p>
          <a href="mailto:info@entresummit.com">
            info@entresummit.com <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
