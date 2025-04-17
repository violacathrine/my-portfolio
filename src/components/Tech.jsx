import React from "react";

export const Tech = ({ heading, items }) => {
  return (
    <section id="tech" className="tech-section">
      <h2>{heading}</h2>
      <p>{items.join(", ") + "."}</p>
    </section>
  );
};
