import React from "react";
import AboutHero from "./AboutHero";
import MissionSection from "./MissionSection";
import PastEventsSection from "./PastEventsSection";

export default function About() {
  return (
    <main className="main">
      <AboutHero />
      <MissionSection />
      <PastEventsSection />
    </main>
  );
}
