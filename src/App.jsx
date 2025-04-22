// src/App.jsx
import { useState } from "react";
import content from "./data/content.json";
import { Intro } from "./components/Intro";
import { HeaderSection } from "./components/HeaderSection";
import { ScrollArrow } from "./components/ScrollArrow";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { MyJourney } from "./components/MyJourney";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

export const App = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEnterClick = () => {
    setShowMainContent(true);
  };

  return (
    <>
      {!showMainContent ? (
        <Intro onEnter={handleEnterClick} />
      ) : (
        <>
          {/* HEADERSECTION */}
          <HeaderSection
            heading={content.headerSection.heading}
            text={content.headerSection.text}
            email={content.headerSection.email}
            mailtoText={content.headerSection.mailtoText}
            nav={content.headerSection.nav}
          />

          {/* BOUNCING ARROW */}
          <div className="scroll-arrow-wrapper">
            <ScrollArrow targetId="tech-anchor" />
          </div>

          {/* TECH */}
          <Tech heading={content.tech.heading} items={content.tech.items} />

          {/* PROJECTS */}
          <Projects
            heading={content.projectsSection.heading}
            projects={content.projectsSection.projects}
          />

          {/* MY JOURNEY */}
          <MyJourney
            heading={content.myJourney.heading}
            text={content.myJourney.text}
          />

          {/* SKILLS */}
          <Skills
            heading={content.skills.heading}
            groups={content.skills.groups}
          />

          {/* CONTACT*/}
          <Contact
            heading={content.contact.heading}
            name={content.contact.name}
            email={content.contact.email}
            image={content.contact.image}
            socials={content.contact.socials}
          />
        </>
      )}
    </>
  );
};
