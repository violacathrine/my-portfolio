import React from "react";

export const Projects = ({ heading, projects, text }) => {
  return (
    <section id="projects" className="projects-section">
      <h2>{heading}</h2>
      {projects.map((project, index) => (
        <article key={index} className="project-card">
          <img src="project.image" alt={`Screenshot of ${project.name}`} />
          <h3>{project.name}</h3>
          <p className="project-text">{project.text}</p>
          <p className="tags-text">{project.tags.join(", ")}</p>

          <p>
            <a href={project.netlify} target="_blank" rel="noopener noreferrer">
              View Live
            </a>{" "}
            |{" "}
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </article>
      ))}
    </section>
  );
};
