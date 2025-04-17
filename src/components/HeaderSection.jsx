import React from "react";
import "./HeaderSection.css";

export const HeaderSection = ({ heading, text, email, mailtoText, nav }) => {
  return (
    <header className="header-section">
      <section className="header-content">
        <img src="/profile-picture.jpg" alt="Portrait of Cathrine" />
        <h2>{heading}</h2>
        <p>{text}</p>
        <p>Interested?</p>
        <p>
          <a href={`mailto:${email}`} aria-label={`Send email to ${email}`}>
            {mailtoText}
          </a> 
          💌
        </p>
      </section>

      <section className="header-nav">
        <nav>
          <ul className="nav-list">
            {nav.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  <span className="title">{item.label}</span>
                  <span className="dots"></span>
                  <span className="page">{item.page}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </header>
  );
};
