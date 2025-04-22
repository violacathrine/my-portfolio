import React from "react";

export const Contact = ({ heading, name, email, image, socials }) => {
  return (
    <section id="contact" className="contact-section">
      <h2>{heading}</h2>
      <img src={image} alt={`Portrait of ${name}`} />
      <p>{name}</p>
      <p>
        <a href={`mailto:${email}`}>{email}</a>
      </p>
      <ul className="socials-list">
        {socials.map((social) => (
          <li key={social.platform}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.platform}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
