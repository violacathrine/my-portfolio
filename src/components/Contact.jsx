import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  padding: 128px 16px;
  max-width: 320px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 768px) {
    max-width: none;
  }
`;

const Heading = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
`;

const Email = styled.a`
  font-weight: 600;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  font-size: 24px;
`;

export const Contact = ({ heading, name, email, image, socials }) => {
  return (
    <Section id="contact">
      <Heading>{heading}</Heading>
      <ProfileImage src={image} alt={name} />
      <div>
        <Name>{name}</Name>
        <Email href={`mailto:${email}`}>{email}</Email>
      </div>
      <IconsWrapper>
        {socials.map((social) => (
          <a
            key={social.platform}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
          >
            {social.icon}
          </a>
        ))}
      </IconsWrapper>
    </Section>
  );
};
