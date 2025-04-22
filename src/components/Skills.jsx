import React from "react";

export const Skills = ({ heading, groups }) => {
  return (
    <section id="skills" className="skills-section">
      <h2>{heading}</h2>

      {groups.map((group) => (
        <div key={group.title} className="skills-group">
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
