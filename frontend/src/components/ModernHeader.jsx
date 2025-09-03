import styled from "styled-components";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { colors, typography, spacing, borderRadius, animations } from "../styles/designTokens";

const HeaderWrapper = styled.header`
  position: relative;
  background: ${colors.background.cream};
  padding: 80px 20px 120px;
  overflow: hidden;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 768px) {
    padding: 100px 40px 160px;
  }
`;

// Social Icons (top left)
const SocialIcons = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  display: flex;
  gap: 16px;
  z-index: 4;
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const SocialIcon = styled.a`
  color: ${colors.text.accent};
  font-size: 18px;
  transition: all ${animations.transition.fast};
  
  &:hover {
    color: ${colors.tertiary};
    transform: translateY(-2px);
  }
`;

// Navbar (top, full width)
const NavBar = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 24px 40px;
  
  @media (max-width: 767px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 48px;
  margin: 0;
  padding: 16px 40px;
  background: ${colors.background.white}90;
  backdrop-filter: blur(20px);
  border-radius: 60px;
  border: 1px solid ${colors.background.white}60;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 13px;
  font-family: ${typography.fontFamily.heading};
  text-decoration: none;
  color: ${colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 1.2px;
  transition: all ${animations.transition.fast};
  position: relative;
  padding: 8px 0;

  &:hover {
    color: ${colors.tertiary};
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 20px;
    height: 2px;
    background: ${colors.tertiary};
    border-radius: 2px;
    transition: transform ${animations.transition.normal};
  }
  
  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

// Mobile Menu
const MobileMenuButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  background: ${colors.background.white}80;
  border: 1px solid ${colors.background.white}40;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.text.primary};
  font-size: 20px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all ${animations.transition.fast};
  z-index: 5;
  
  &:hover {
    background: ${colors.background.white}90;
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.background.cream}95;
  backdrop-filter: blur(20px);
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  font-size: 24px;
  font-weight: 600;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color ${animations.transition.fast};
  
  &:hover {
    color: ${colors.tertiary};
  }
`;

// Hero Content
const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 80px;
  
  @media (min-width: 768px) {
    flex-direction: row-reverse;
    text-align: left;
    gap: 60px;
    align-items: center;
  }
`;

const TextContent = styled.div`
  @media (min-width: 768px) {
    flex: 1;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const ImageStack = styled.div`
  width: 200px;
  max-width: 280px;
  margin: 0 auto;
  transition: 0.25s ease;
  cursor: pointer;
  transform: rotate(3deg);
  
  &:hover {
    transform: rotate(-2deg);
    
    .profile-card:before {
      transform: translateY(-2%) rotate(-4deg);
    }
    
    .profile-card:after {
      transform: translateY(2%) rotate(4deg);
    }
  }
  
  @media (min-width: 768px) {
    width: 280px;
  }
`;

const ProfileCard = styled.div`
  aspect-ratio: 1 / 1;
  border: 4px solid ${colors.text.primary};
  background-color: ${colors.background.white};
  position: relative;
  transition: 0.15s ease;
  cursor: pointer;
  padding: 8px;
  border-radius: 15px;
  
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    border: 4px solid ${colors.text.primary};
    background-color: ${colors.background.white};
    transform-origin: center center;
    z-index: -1;
    transition: 0.15s ease;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  &:before {
    transform: translateY(-2%) rotate(-6deg);
  }

  &:after {
    transform: translateY(2%) rotate(6deg);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 4px solid ${colors.text.primary};
  border-radius: 10px;
  aspect-ratio: 1 / 1;
`;

const Logo = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  margin-bottom: 16px;
  line-height: 1.1;
  
  @media (min-width: 768px) {
    font-size: 64px;
  }
`;

const Tagline = styled.p`
  font-size: 18px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  margin-bottom: 32px;
  max-width: 500px;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 20px;
    margin: 0 0 32px 0;
  }
`;

const CTAButton = styled.a`
  background: ${colors.tertiary};
  color: ${colors.background.white};
  padding: 16px 32px;
  border-radius: 50px;
  font-family: ${typography.fontFamily.heading};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all ${animations.transition.normal};
  
  &:hover {
    background: ${colors.tertiary}DD;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${colors.tertiary}40;
  }
`;

export const ModernHeader = ({ nav, email, mailtoText }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HeaderWrapper>
      
      <SocialIcons>
        <SocialIcon href="https://github.com/violacathrine" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/cathrine-olsson-306695147" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </SocialIcon>
      </SocialIcons>

      <NavBar>
        <NavContainer>
          <NavList>
            {nav.map((item) => (
              <NavItem key={item.label}>
                <NavLink href={item.href}>{item.label}</NavLink>
              </NavItem>
            ))}
          </NavList>
        </NavContainer>
      </NavBar>

      <MobileMenuButton 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FiX /> : <FiMenu />}
      </MobileMenuButton>

      {mobileMenuOpen && (
        <MobileMenuOverlay>
          {nav.map((item) => (
            <MobileNavLink 
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </MobileNavLink>
          ))}
        </MobileMenuOverlay>
      )}

      <HeroContent>
        <ImageWrapper>
          <ImageStack>
            <ProfileCard className="profile-card">
              <ProfileImage src="/profile-picture.jpg" alt="Cathi Ohlsson" />
            </ProfileCard>
          </ImageStack>
        </ImageWrapper>
        
        <TextContent>
          <Logo>Hi there,<br />I'm Cathi!</Logo>
          <Tagline>
            I am a curious and open-minded developer with a background in sales and customer service. I enjoy creativity and really love to think outside the box. Throw in a splash of color, cool animations, a touch of playfulness and a pinch of humor and that's what you'll get from me in a future collaboration.
          </Tagline>
          <CTAButton href={`mailto:${email}`}>
            {mailtoText} →
          </CTAButton>
        </TextContent>
      </HeroContent>
    </HeaderWrapper>
  );
};