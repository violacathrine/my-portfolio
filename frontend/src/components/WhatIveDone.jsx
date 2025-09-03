import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background-color: ${colors.background.white};
  padding: ${spacing.section} ${spacing.md};
  width: 100%;
  
  @media (max-width: 768px) {
    padding: ${spacing.sectionPaddingMobile};
  }
`;

const Heading = styled.h2`
  font-size: ${typography.fontSize.h2};
  font-weight: ${typography.fontWeight.bold};
  font-family: ${typography.fontFamily.heading};
  text-align: center;
  margin-bottom: ${spacing.xxxl};
  color: ${colors.text.secondary};
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -${spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${colors.accent.pinkGradient};
    border-radius: ${borderRadius.small};
  }
  
  @media (max-width: 768px) {
    font-size: ${typography.fontSize.mobile.h2};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing.lg};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${colors.background.white};
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.light};
  overflow: hidden;
  transition: all ${animations.transition.normal};
  
  &:hover {
    ${animations.hover.lift};
    box-shadow: ${shadows.medium};
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid ${colors.background.beige};
`;

const ProjectContent = styled.div`
  padding: ${spacing.lg};
`;

const ProjectTitle = styled.h3`
  font-size: ${typography.fontSize.h3};
  font-weight: ${typography.fontWeight.bold};
  font-family: ${typography.fontFamily.heading};
  margin-bottom: ${spacing.sm};
  color: ${colors.text.secondary};
`;

const ProjectDescription = styled.p`
  font-size: ${typography.fontSize.small};
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  line-height: ${typography.lineHeight.normal};
  margin-bottom: ${spacing.md};
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.xs};
  margin-bottom: ${spacing.md};
`;

const Tag = styled.span`
  background: ${colors.primary};
  color: ${colors.background.white};
  padding: 2px 8px;
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.semibold};
  font-family: ${typography.fontFamily.heading};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: ${spacing.sm};
  flex-wrap: wrap;
`;

const ProjectButton = styled.a`
  padding: ${spacing.sm} ${spacing.md};
  background: ${props => props.$type === 'demo' ? colors.primary : 'transparent'};
  color: ${props => props.$type === 'demo' ? colors.background.white : colors.primary};
  border: 2px solid ${colors.primary};
  border-radius: ${borderRadius.small};
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.semibold};
  font-family: ${typography.fontFamily.body};
  text-decoration: none;
  transition: all ${animations.transition.fast};
  
  &:hover {
    background: ${props => props.$type === 'demo' ? colors.secondary : colors.primary};
    color: ${colors.background.white};
    transform: scale(1.05);
  }
`;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const WhatIveDone = () => {
  const projects = [
    {
      name: "Todo List App",
      image: "/todolist.png",
      description: "A responsive task manager with state management and local storage persistence",
      tags: ["React", "Zustand", "Styled Components"],
      buttons: [
        { label: "Live Demo", type: "demo", href: "https://taskortoss.netlify.app/" },
        { label: "View Code", type: "code", href: "https://github.com/violacathrine/js-project-todo" }
      ]
    },
    {
      name: "Happy Thoughts",
      image: "/happythoughts.png",
      description: "Social platform for sharing positive thoughts using external API integration",
      tags: ["React", "APIs", "Responsive Design"],
      buttons: [
        { label: "Live Demo", type: "demo", href: "https://happythoughtsbyc.netlify.app/" },
        { label: "View Code", type: "code", href: "https://github.com/violacathrine/js-project-happy-thoughts" }
      ]
    },
    {
      name: "ScreamFlix",
      image: "/screamflix.png",
      description: "Movie database SPA with routing and API integration for horror film enthusiasts",
      tags: ["React Router", "APIs", "SPA"],
      buttons: [
        { label: "Live Demo", type: "demo", href: "https://screamflix.netlify.app/" },
        { label: "View Code", type: "code", href: "https://github.com/LindaSchonfeldt/js-project-movies" }
      ]
    },
    {
      name: "Web Accessibility Quiz",
      image: "/webaccessibility.png",
      description: "Interactive quiz testing WCAG knowledge with progress tracking",
      tags: ["Accessibility", "React", "WCAG"],
      buttons: [
        { label: "Live Demo", type: "demo", href: "https://quiz-accessibility.netlify.app/" },
        { label: "View Code", type: "code", href: "https://github.com/violacathrine/js-project-quiz" }
      ]
    },
    {
      name: "Music Releases",
      image: "/music.png",
      description: "Spotify-inspired interface displaying music albums and artists",
      tags: ["React", "Components", "CSS Grid"],
      buttons: [
        { label: "Live Demo", type: "demo", href: "https://music-violacathrine.netlify.app/" },
        { label: "View Code", type: "code", href: "https://github.com/violacathrine/js-project-music-releases" }
      ]
    },
    {
      name: "Weather App",
      image: "/weather.png",
      description: "Real-time weather data with location-based forecasts and clean UI",
      tags: ["APIs", "Geolocation", "JavaScript"],
      buttons: [
        { label: "Live Demo", type: "demo", href: "https://weather-whimsy.netlify.app/" },
        { label: "View Code", type: "code", href: "https://github.com/violacathrine/js-project-weather-app" }
      ]
    }
  ];

  return (
    <Section id="what-ive-done">
      <Heading>What I've Done</Heading>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProjectImage src={project.image} alt={project.name} />
            <ProjectContent>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TagsWrapper>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>
              <ButtonsWrapper>
                {project.buttons.map((btn, idx) => (
                  <ProjectButton 
                    key={idx}
                    $type={btn.type}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {btn.label}
                  </ProjectButton>
                ))}
              </ButtonsWrapper>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
};