import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { OrganicBackground } from "./OrganicBackground";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background: ${colors.background.white};
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 160px 40px;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`;

const Heading = styled.h2`
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

const Subheading = styled.p`
  font-size: 18px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${colors.background.white};
  border-radius: ${borderRadius.large};
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.background.offWhite};
  transition: all ${animations.transition.normal};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
    
    .project-image {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 220px;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    transition: all ${animations.transition.normal};
    pointer-events: none;
  }
  
  &:hover::after {
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
    background: transparent;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
  transition: all ${animations.transition.normal};
  
  ${ProjectCard}:hover & {
    filter: blur(0px);
  }
`;

const ProjectContent = styled.div`
  padding: 32px 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  margin-bottom: 12px;
  line-height: 1.2;
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: ${colors.tertiary};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all ${animations.transition.fast};
  
  &:hover {
    text-decoration: underline;
  }
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;
`;

const Tag = styled.span`
  background: ${colors.background.cream};
  color: ${colors.text.accent};
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  font-family: ${typography.fontFamily.body};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
`;

const ProjectButton = styled.a`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  font-family: ${typography.fontFamily.body};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all ${animations.transition.fast};
  border: 1px solid transparent;
  
  ${props => props.$type === 'demo' ? `
    background: ${colors.tertiary};
    color: ${colors.background.white};
    
    &:hover {
      background: ${colors.tertiary}DD;
      transform: translateY(-1px);
      box-shadow: 0 4px 10px ${colors.tertiary}30;
    }
  ` : `
    background: transparent;
    color: ${colors.text.primary};
    border-color: ${colors.background.beige};
    
    &:hover {
      background: ${colors.background.beige};
      border-color: ${colors.tertiary};
      transform: translateY(-1px);
    }
  `}
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const ProjectDescriptionText = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = text.length > maxLength;
  
  const displayText = isExpanded ? text : text.slice(0, maxLength);
  
  return (
    <ProjectDescription>
      {displayText}
      {needsTruncation && !isExpanded && "..."}
      {needsTruncation && (
        <ReadMoreButton onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show less" : "Read more"}
        </ReadMoreButton>
      )}
    </ProjectDescription>
  );
};

export const ModernProjects = () => {
  const projects = [
    {
      name: "Morbid Gene Official",
      image: "/mockup-morbidgene.png",
      description: "A complete fullstack e-commerce platform for Swedish metal band Morbid Gene. Built with React 19, Node.js, MongoDB, and featuring merchandise store with Spreadshirt API, user authentication, shopping cart, and responsive design. This project showcases modern fullstack development with secure payment integration and scalable architecture.",
      tags: ["React 19", "Node.js", "MongoDB", "JWT", "E-commerce", "API Integration"],
      buttons: [
        { label: "View Live", type: "demo", href: "https://morbidgeneofficial.com/" },
        { label: "Source Code", type: "code", href: "https://github.com/violacathrine/morbid-gene-official" }
      ]
    },
    {
      name: "Todo List App",
      image: "/todolist.png",
      description: "A responsive task manager built with React and Zustand, featuring local storage persistence and accessibility-first design.",
      tags: ["React", "Zustand", "LocalStorage"],
      buttons: [
        { label: "View Live", type: "demo", href: "https://taskortoss.netlify.app/" },
        { label: "Source Code", type: "code", href: "https://github.com/violacathrine/js-project-todo" }
      ]
    },
    {
      name: "Happy Thoughts",
      image: "/happythoughts.png",
      description: "A fullstack social platform for sharing positive thoughts. Features user authentication with login/register functionality, secure backend API, and real-time interactions. Users can create accounts, post thoughts, and like others' posts in a positive community environment.",
      tags: ["React", "Node.js", "MongoDB", "JWT Auth", "Express", "APIs"],
      buttons: [
        { label: "View Live", type: "demo", href: "https://happythoughtsbyc.netlify.app/" },
        { label: "Source Code", type: "code", href: "https://github.com/violacathrine/js-project-happy-thoughts" }
      ]
    },
    {
      name: "ScreamFlix",
      image: "/screamflix.png",
      description: "Horror movie database SPA with routing and API integration, featuring dynamic movie details and responsive design.",
      tags: ["React Router", "APIs", "SPA"],
      buttons: [
        { label: "View Live", type: "demo", href: "https://screamflix.netlify.app/" },
        { label: "Source Code", type: "code", href: "https://github.com/LindaSchonfeldt/js-project-movies" }
      ]
    },
    {
      name: "Web Accessibility Quiz",
      image: "/webaccessibility.png",
      description: "This project focuses on working with Survey Forms. It is a responsive survey form app built using HTML, CSS, and JavaScript. It stores the answers in localStorage. The quiz is designed to educate users about accessibility in HTML, following WCAG guidelines.",
      tags: ["HTML", "CSS", "JavaScript", "WCAG"],
      buttons: [
        { label: "View Live", type: "demo", href: "https://accessibility-project.netlify.app/" },
        { label: "Source Code", type: "code", href: "https://github.com/violacathrine/js-project-accessibility" }
      ]
    },
    {
      name: "Recipe Library",
      image: "/recipelibrary.png",
      description: "This project uses the Spoonacular API to dynamically display real recipes. It was a fun challenge to follow a finished Figma design and implement it with a responsive layout and real-time data fetching for an engaging user experience.",
      tags: ["HTML", "CSS", "JavaScript", "APIs"],
      buttons: [
        { label: "View Live", type: "demo", href: "https://cathirecipesite.netlify.app/" },
        { label: "Source Code", type: "code", href: "https://github.com/violacathrine/js-project-recipe-library" }
      ]
    }
  ];

  return (
    <Section id="projects">
      <OrganicBackground variant="cream" />
      <Container>
        <SectionHeader>
          <Heading>What I've Built</Heading>
          <Subheading>
            A collection of projects showcasing my journey in web development, 
            from interactive UIs to full-stack applications.
          </Subheading>
        </SectionHeader>
        
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
              <ImageContainer>
                <ProjectImage src={project.image} alt={project.name} className="project-image" />
              </ImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescriptionText text={project.description} />
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
      </Container>
    </Section>
  );
};