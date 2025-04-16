// src/App.jsx
import { useState } from "react";
import { Intro } from "./components/Intro";
// import { Header } from './components/Header';  // vi lägger till senare

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
          {/* Här börjar resten av sidan, som visas efter intro */}
          <h2>Main content goes here ✨</h2>
          {/* <Header /> osv... */}
        </>
      )}
    </>
  );
};
