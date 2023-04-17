import Speaker from "@/components/Speaker";
import React from "react";
import s from "./FeaturedSpeaker.module.scss";

export default function FeaturedSpeaker() {
  const speakersArr = [
    {
      name: "Mike Ogalo",
      title: "Professor of Law, University of The People",
      description:
        "Mike Ogalo is a senior Professor of law with wide experience in commercial law. He is passionate about spearheading conversations that create a better work and business experience.",
      img: "./img/users/user-2.png",
    },
    {
      name: "Loreen Moli",
      title: "Director of Moli Holdings, Nairobi Kenya",
      description:
        "Loreen is a passionate entrepreneur leading the one of the most profitable privately owned fashion brand in the region. She is passionate about empowering entrepreneurs.",
      img: "./img/users/user-8.png",
    },
    {
      name: "Pius Gizman",
      title: "CEO and Team leader of the Gizma foundation",
      description:
        "With his deep focus on impacting people from vulnerable communities,Gizman is a social entrepreneur who has build several profit and no-profit organizations over the las 10 years.",
      img: "./img/users/user-3.png",
    },
    {
      name: "Joyce Mine",
      title: "Director general of Alamy trust, Germany",
      description:
        "Joyce Mine is a force to recon when it comes to spearheading efforts to fight for the rights of under disadvantaged groups in the community. She is currently the team lead at Alamy Foundation",
      img: "./img/users/user-5.png",
    },
    {
      name: "Freeman Ala",
      title: "Leadership coach and Team effectiveness ambassador",
      description:
        "Know by many as Team Effectiveness Ambassador, Dr. Freeman Ala is an executive leadership couch who is passionate about improving team effectiveness and building effective working relationships.",
      img: "./img/users/user-4.png",
    },
    {
      name: "James Serengia",
      title: "Senior Software Engineer at Sawabox.com, Nairobi",
      description:
        "James Serengia is a Senior Software Engineer at sawabox.com. He is also the author of Life Gives You What You Settle For. He is passionate about people and finding better ways to do things. ",
      img: "./img/users/user-1.png",
    },
  ];
  return (
    <section className={s["section-featured-speakers"]}>
      <div className={`${s["featured-speakers-header"]} row`}>
        <h2 className="heading-secondary heading-secondary-dark">
          Featured Speakers
        </h2>
      </div>
      <div className={`${s["featured-speakers-body"]} row`}>
        {speakersArr.map((sp) => (
          <Speaker key={sp.id} data={sp} />
        ))}
      </div>
    </section>
  );
}
