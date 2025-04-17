// src/components/Intro.jsx

import { useEffect, useState } from "react";
import "./Intro.css";

export const Intro = ({ onEnter }) => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    const lines = ["line-1", "line-2", "line-3"];

    lines.forEach((line, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, index * 700);
    });
  }, []);

  return (
    <section className="introduction" aria-labelledby="intro-heading">
      <h1
        id="intro-heading"
        className="heading"
        aria-label="Hi there, I'm Cathi!"
      >
        <span
          className={`line line-1 ${
            visibleLines.includes("line-1") ? "visible" : ""
          }`}
        >
          Hi there,
        </span>
        <span className="line-wrapper">
          <span
            className={`line line-2 ${
              visibleLines.includes("line-2") ? "visible" : ""
            }`}
          >
            I'm Cathi
          </span>
          <span
            className={`line line-3 ${
              visibleLines.includes("line-3") ? "visible" : ""
            }`}
          >
            !
          </span>
        </span>
      </h1>

      <img src="/profile-picture.jpg" alt="Portrait of Cathi" />

      <h2>I'm an open-minded and curious developer.</h2>

      <button
        className="intro-btn"
        onClick={onEnter}
        aria-label="Enter the main portfolio content"
      >
        <p>Enter my world</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    </section>
  );
};
