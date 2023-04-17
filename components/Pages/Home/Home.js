import React from "react";
import HeroSection from "./HeroSection";
import ProgramSection from "./ProgramSection";
import FeaturedSpeaker from "./FeaturedSpeaker";
import PartnersSection from "./PartnersSection";

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <ProgramSection />
      <FeaturedSpeaker />
      <PartnersSection />
    </main>
  );
}
