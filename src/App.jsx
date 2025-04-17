// src/App.jsx
import { useState } from "react";
import content from "./data/content.json";
import { Intro } from "./components/Intro";
import { HeaderSection } from "./components/HeaderSection";

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
        </>
      )}
    </>
  );
};
