import React from "react";

export default function Home() {
  return (
    <main className="main">
      <section className="section-hero">
        <div className="hero-container row">
          <span className="title-lead-text">Connecting with world shakers</span>
          <h1 className="heading-primary">Entrepreneurs Forum Summit</h1>
          <p className="m-t-m">
            A yearly Entrepreneurs Summit where you get a chance to connect
            entrepreneurs and people who are doing amazing things around the
            world.
          </p>
          <div className="event-details m-t-m">
            <p>
              28 <sup>th</sup> - 30 <sup>th</sup> Nov 2022{" "}
            </p>
            <a href="">
              <i className="fa-solid fa-location-dot"></i>Nairobi, Kenya
            </a>
          </div>
          <div className="header-buttons m-t-l">
            <button className="btn btn-primary">Attend</button>
            <button className="btn btn-secondary">Sponsor</button>
          </div>
        </div>
      </section>
      <section className="section-program">
        <div className="programs-header row">
          <h2 className="heading-secondary heading-secondary-dark">
            Summit Program
          </h2>
        </div>
        <div className="programs-body row">
          <div className="program">
            <i className="fa-solid fa-person-chalkboard icon"></i>
            <h3>Interactive workshops</h3>
            <p>
              Impactful one on one sessions with Global leaders and
              Entrepreneurs. The workshops will be conducted in small groups.
            </p>
          </div>
          <div className="program">
            <i className="fa-solid fa-hand-holding-dollar icon"></i>
            <h3>Pitching competition</h3>
            <p>
              Participants will get a chance to pitch their ideas to potential
              investors. The winner with the best pitch will also get $1000 cash
              price
            </p>
          </div>
          <div className="program">
            <i className="fa-solid fa-chalkboard-user icon"></i>
            <h3>Keynote speeches</h3>
            <p>
              Be part of other 100 people who will be have the opportunity to be
              in the room where some of the top leaders will be making their
              keynote speeches.
            </p>
          </div>
          <div className="program">
            <i className="fa-solid fa-bullhorn icon"></i>
            <h3>Brand showcase</h3>
            <p>
              A number of companies and our partners will have a chance to
              showcase their products and services in various booths.
            </p>
          </div>
          <div className="program">
            <i className="fa-solid fa-handshake icon"></i>
            <h3>Connection & Networking</h3>
            <p>
              Participants will get a chance to connect and network throughout
              the two days event. This will be a great opportunity build
              relations.
            </p>
          </div>
        </div>
        <div className="programs-footer row">
          <a href="#" className="link link-outline">
            See all programs &rarr;
          </a>
        </div>
      </section>
      <section className="section-featured-speakers">
        <div className="featured-speakers-header row">
          <h2 className="heading-secondary heading-secondary-dark">
            Featured Speakers
          </h2>
        </div>
        <div className="featured-speakers-body row"></div>
      </section>
      <section className="section-partners">
        <div className="partners-header row">
          <h2 className="heading-secondary heading-secondary-white">
            Partners
          </h2>
        </div>
        <div className="partners-logos row">
          <img src="./img/partners/SAF-LOGO-cropped.png" alt="Safaricom" />
          <img src="./img/partners/Sawabox-Tech-logo-samp.png" alt="Sawabox" />
          <img src="./img/partners/logo_standard.png" alt="standard" />
          <img
            src="./img/partners/placeholder.com-logo.png"
            alt="Placeholder"
          />
          <img
            src="./img/partners/techcrunch-logo-cropped-samp.png"
            alt="Tech crunch"
          />
        </div>
      </section>
    </main>
  );
}
