import React from "react";
import s from "./HeroSection.module.scss";
import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className={s["section-hero"]}>
      <div className={`${s["hero-container"]} row`}>
        <span className="title-lead-text">Connecting with world shakers</span>
        <h1 className="heading-primary">Entrepreneurs Forum Summit</h1>
        <p className="m-t-m">
          A yearly Entrepreneurs Summit where you get a chance to connect
          entrepreneurs and people who are doing amazing things around the
          world.
        </p>
        <div className={`${s["event-details"]} m-t-m`}>
          <p>
            28 <sup>th</sup> - 30 <sup>th</sup> Nov 2022{" "}
          </p>
          <a href="">
            <i className={`${s["fa-solid"]} ${s["fa-location-dot"]}`}></i>
            Nairobi, Kenya
          </a>
        </div>
        <div className={`${s["header-buttons"]} m-t-l`}>
          <Button>Attend</Button>
          <Button variant="secondary">Sponsor</Button>
        </div>
      </div>
    </section>
  );
}
