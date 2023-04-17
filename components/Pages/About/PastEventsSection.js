import React from "react";
import s from "./PastEventsSection.module.scss";

export default function PastEventsSection() {
  return (
    <section className={s["section-past-events"]}>
      <div className="row">
        <div className={s["past-events-container"]}>
          <h2 className="heading-secondary">Our past events</h2>
          <p>
            Did you miss any of our past events. Here is a recap on some of the
            highlights.
          </p>
          <div className={`${s["past-events"]} m-t-m`}>
            <figure className={s["figure"]}>
              <div className={s["image-container"]}>
                <div className={s["overlay"]}>
                  <h3 className={s["year"]}>2021</h3>
                  <p>Presenter on stage during the 2021 event</p>
                </div>
                <img src="./img/event1.jpg" alt="entrepreneurs summit 2021" />
              </div>
            </figure>
            <figure className={s["figure"]}>
              <div className={s["image-container"]}>
                <div className={s["overlay"]}>
                  <h3 className={s["year"]}>2020</h3>
                  <p>Interactive session for event attendees</p>
                </div>
                <img src="./img/event2.jpg" alt="entrepreneurs summit 2020" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
