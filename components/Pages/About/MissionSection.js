import React from "react";
import s from "./MissionSection.module.scss";

export default function MissionSection() {
  return (
    <section className={s["about-mission"]}>
      <div className="row">
        <div className={s["mission-container"]}>
          <h2 className="heading-secondary">Our mission</h2>
          <p>
            We seek to empower Entrepreneurs through conversations. The
            conference will feature international speakers who will share
            strategies on building a successful and sustainable business and
            make a impactful change in our communities.
          </p>
          <img
            src="./img/entre-logo.png"
            alt="Entrepreneurs logo"
            className={s["logo"]}
          />
        </div>
      </div>
    </section>
  );
}
