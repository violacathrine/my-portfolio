// src/App.jsx
import { useState } from "react";
import content from "./data/content.json";
import { Intro } from "./components/Intro";
import { HeaderSection } from "./components/HeaderSection";
import { ScrollArrow } from "./components/ScrollArrow";
import { Tech } from "./components/Tech";

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
          <HeaderSection
            heading={content.headerSection.heading}
            text={content.headerSection.text}
            email={content.headerSection.email}
            mailtoText={content.headerSection.mailtoText}
            nav={content.headerSection.nav}
          />

          <div className="scroll-arrow-wrapper">
          <ScrollArrow targetId="tech-anchor" />
          </div>

          <div id="tech-anchor" style={{ height: "64px" }}></div>

          <Tech heading={content.tech.heading} items={content.tech.items} />
        </>
      )}
    </>
  );
};
