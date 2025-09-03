import styled from "styled-components";
import { useState } from "react";
import { WaveTop } from "./WaveTop";
import { WaveBottom } from "./WaveBottom";
import { FiMenu, FiX } from "react-icons/fi";
import { colors, typography, spacing, animations } from "../styles/designTokens";

const TextBlock = styled.div`
  flex: 2;
  min-width: 0;
`;

const ImageWrapper = styled.div`
  flex: 1;
  flex-shrink: 0;
  min-width: 0;
  max-width: 320px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-left: 40px;
    margin-bottom: 0;
  }
`;

const StyledImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
    max-width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
  max-width: 950px;
  margin: 0 auto;
  z-index: 2;
  position: relative;

  @media (min-width: 768px) {
    margin-top: 100px;
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    gap: 40px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;

    ${TextBlock} {
      order: 2;
    }

    ${ImageWrapper} {
      order: 1;
      margin: 0 auto 24px;
    }
  }
`;

const HeaderWrapper = styled.header`
  position: relative;
  background-color: ${colors.background.dustyPink};
  padding: ${spacing.xxxl} ${spacing.md} 150px;
  overflow: hidden;
  text-align: left;
  color: ${colors.text.primary};

  @media (min-width: 768px) {
    padding: ${spacing.section} ${spacing.xxl} 300px;
  }
`;

const Heading = styled.h2`
  font-size: ${typography.fontSize.mobile.h1};
  font-family: ${typography.fontFamily.heading};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.md};

  @media (min-width: 768px) {
    font-size: ${typography.fontSize.h1};
  }
`;

const Text = styled.p`
  font-size: ${typography.fontSize.large};
  font-family: ${typography.fontFamily.body};
  line-height: ${typography.lineHeight.normal};
  margin-bottom: ${spacing.md};
`;

const Contact = styled.p`
  font-size: ${typography.fontSize.large};
  font-family: ${typography.fontFamily.body};

  a {
    text-decoration: underline;
    transition: color ${animations.transition.fast};
    
    &:hover {
      color: ${colors.primary};
    }
  }
`;

const TopRightNav = styled.nav`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: 3;

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  background: none;
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  color: ${colors.text.secondary};
  position: relative;
  transition: color ${animations.transition.fast};

  &:hover,
  &:focus {
    color: ${colors.primary};
  }

  &.active {
    border-bottom: 2px solid ${colors.primary};
  }

  @media (min-width: 768px) {
    font-size: 18px; /* Ändra till önskad storlek för desktop */
  }
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
`;

const MobileMenu = styled.div`
  background-color: ${colors.background.bronze};
  padding: 16px 16px 64px;
  width: 100%;
  position: relative;
  z-index: 10;
  clip-path: url(#wave-clip);

  ul {
    list-style: none;
    padding: 0;
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  li {
    width: 100%;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Hamburger = styled.button`
  color: ${colors.text.secondary};
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 11;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HeaderSection = ({
  id,
  heading,
  text,
  email,
  mailtoText,
  nav,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
      <HeaderWrapper id={id}>
        <WaveTop />

        <TopRightNav>
          <NavList>
            {nav.map((item) => (
              <NavItem key={item.label}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </TopRightNav>

        <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FiX /> : <FiMenu />}
        </Hamburger>

        {menuOpen && (
          <MobileMenuWrapper>
            <MenuOverlay onClick={() => setMenuOpen(false)} />
            <MobileMenu>
              <ul>
                {nav.map((item) => (
                  <NavLink
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </ul>
            </MobileMenu>
            <svg width="0" height="0">
              <defs>
                <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
                  <path d="M0,0 H1 V0.92 L1,0.92 C0.75,1 0.25,0.86 0,0.95 Z" />
                </clipPath>
              </defs>
            </svg>
          </MobileMenuWrapper>
        )}

        <Content>
          <TextBlock>
            <Heading>{heading}</Heading>
            <Text>{text}</Text>
            <Contact>
              Interested? <a href={`mailto:${email}`}>{mailtoText}</a> 💌
            </Contact>
          </TextBlock>

          <ImageWrapper>
            <StyledImg src="/profile-picture.jpg" alt="Picture of Cathi" />
          </ImageWrapper>
        </Content>
        <WaveBottom />
      </HeaderWrapper>
  );
};
