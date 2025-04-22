import React from "react";

export const MyJourney = ({ heading, text }) => {
  return (
    <section id="journey" className="my-journey-section">
      <h2>{heading}</h2>
      <p>{text}</p>
    </section>
  );
};
