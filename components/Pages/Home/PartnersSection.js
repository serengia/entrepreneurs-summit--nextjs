import React from "react";
import s from "./PartnersSection.module.scss";

export default function PartnersSection() {
  return (
    <section className={s["section-partners"]}>
      <div className={`${s["partners-header"]} row`}>
        <h2 className="heading-secondary heading-secondary-white">Partners</h2>
      </div>
      <div className={`${s["partners-logos"]} row`}>
        <img src="./img/partners/SAF-LOGO-cropped.png" alt="Safaricom" />
        <img src="./img/partners/Sawabox-Tech-logo-samp.png" alt="Sawabox" />
        <img src="./img/partners/logo_standard.png" alt="standard" />
        <img src="./img/partners/placeholder.com-logo.png" alt="Placeholder" />
        <img
          src="./img/partners/techcrunch-logo-cropped-samp.png"
          alt="Tech crunch"
        />
      </div>
    </section>
  );
}
