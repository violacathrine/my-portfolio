// src/App.jsx
import content from "./data/content.json";
import { Intro } from "./components/Intro";
import { HeaderSection } from "./components/HeaderSection";
import { Tech } from "./components/Tech";
import { Projects } from "./components/Projects";
import { MyJourney } from "./components/MyJourney";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { WaveLine } from "./components/WaveLine";

export const App = () => {
  return (
    <>
      {/* INTRO - ligger alltid först */}
      <Intro />

      {/* HEADERSECTION - ge ID för scroll */}
      <HeaderSection
        id="header-section" // 👈 viktigt!
        heading={content.headerSection.heading}
        text={content.headerSection.text}
        email={content.headerSection.email}
        mailtoText={content.headerSection.mailtoText}
        nav={content.headerSection.nav}
      />

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

      {/* WAVELINE DIVIDER */}
      <WaveLine />

      {/* SKILLS */}
      <Skills heading={content.skills.heading} groups={content.skills.groups} />

      {/* WAVELINE DIVIDER */}
      <WaveLine />

      {/* CONTACT */}
      <Contact
        heading={content.contact.heading}
        name={content.contact.name}
        email={content.contact.email}
        image={content.contact.image}
        socials={content.contact.socials}
      />
    </>
  );
};
