import styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

//  Layout
const Section = styled.section`
  min-height: 100dvh;
background: #ffcba4;
  padding: 100px 16px 30px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Slogan = styled.h2`
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
    text-decoration: none;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

// Icons
const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: rgb(0, 0, 0);
  font-size: 24px;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

const Footer = styled.footer`
  font-family: hind;
  font-size: 16px;
  color: rgb(0, 0, 0);
  text-align: center;
`;

const iconMap = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
};

export const Contact = ({
  name,
  email,
  image,
  socials,
  slogan,
  footerText,
}) => {
  return (
    <Section id="contact">
      <ProfileImage src={image} alt={name} />
      <div>
        <Name>{name}</Name>
        <Email href={`mailto:${email}`}>{email}</Email>
      </div>
      <Slogan>{slogan}</Slogan>
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
      <Footer>{footerText}</Footer>
    </Section>
  );
};
