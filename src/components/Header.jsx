import React from "react";
import profileImg from "profile-picture.jpg";

export const Header = ({ heading }) => {
  return (
    <header>
      <section>
        <h2>{heading}</h2>
      </section>
    </header>
  );
};
