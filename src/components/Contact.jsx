import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

// 🔸 Layout
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
  font-size: 48px;
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Name = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const Email = styled.a`
  font-weight: 600;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

// 🔸 Ikoner
const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #d0d0d0;
  font-size: 24px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

// 🔸 Plattform → ikon
const iconMap = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
};

// 🔸 Component
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
        {socials.map((social) => {
          const IconComponent = iconMap[social.platform];
          return (
            <SocialIconLink
              key={social.platform}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
            >
              {IconComponent && <IconComponent />}
            </SocialIconLink>
          );
        })}
      </IconsWrapper>
    </Section>
  );
};
