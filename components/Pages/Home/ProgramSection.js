import React from "react";
import s from "./ProgramSection.module.scss";

export default function ProgramSection() {
  return (
    <section className={s["section-program"]}>
      <div className={`${s["programs-header"]} row`}>
        <h2 className="heading-secondary heading-secondary-dark">
          Summit Program
        </h2>
      </div>
      <div className={`${s["programs-body"]} row`}>
        <div className={s["program"]}>
          <i className={`${s["icon"]} fa-solid fa-person-chalkboard`}></i>
          <h3>Interactive workshops</h3>
          <p>
            Impactful one on one sessions with Global leaders and Entrepreneurs.
            The workshops will be conducted in small groups.
          </p>
        </div>
        <div className={s["program"]}>
          <i className={`${s["icon"]} fa-solid fa-hand-holding-dollar`}></i>
          <h3>Pitching competition</h3>
          <p>
            Participants will get a chance to pitch their ideas to potential
            investors. The winner with the best pitch will also get $1000 cash
            price
          </p>
        </div>
        <div className={s["program"]}>
          <i className={`${s["icon"]} fa-solid fa-chalkboard-user`}></i>
          <h3>Keynote speeches</h3>
          <p>
            Be part of other 100 people who will be have the opportunity to be
            in the room where some of the top leaders will be making their
            keynote speeches.
          </p>
        </div>
        <div className={s["program"]}>
          <i className={`${s["icon"]} fa-solid fa-bullhorn`}></i>
          <h3>Brand showcase</h3>
          <p>
            A number of companies and our partners will have a chance to
            showcase their products and services in various booths.
          </p>
        </div>
        <div className={s["program"]}>
          <i className={`${s["icon"]} fa-solid fa-handshake`}></i>
          <h3>Connection & Networking</h3>
          <p>
            Participants will get a chance to connect and network throughout the
            two days event. This will be a great opportunity build relations.
          </p>
        </div>
      </div>
      <div className={`${s["programs-footer"]} row`}>
        <a href="#" className="link link-outline">
          See all programs &rarr;
        </a>
      </div>
    </section>
  );
}
