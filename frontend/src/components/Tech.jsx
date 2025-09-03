// src/components/Tech.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const SectionWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${colors.secondary};
`;

const Section = styled.section`
  width: 100%;
  background-color: ${colors.secondary};
  color: ${colors.text.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 16px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: ${spacing.xxxl};
    padding: 0 80px;
    min-height: 60vh;
    text-align: left;
  }
`;

const Heading = styled.h2`
  font-size: 56px;
  font-weight: ${typography.fontWeight.bold};
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  margin-bottom: ${spacing.xxxl};

  @media (min-width: 768px) {
    font-size: 80px;
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: ${typography.fontWeight.medium};
  font-family: ${typography.fontFamily.body};
  line-height: ${typography.lineHeight.normal};
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 50px;
    padding-left: ${spacing.xxl};
  }
`;

// What I Do Section
const WhatIDoSection = styled.section`
  background-color: ${colors.background.white};
  padding: ${spacing.section} ${spacing.md};
  
  @media (max-width: 768px) {
    padding: ${spacing.sectionPaddingMobile};
  }
`;

const SectionHeading = styled.h2`
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
    background: ${colors.accent.redGradient};
    border-radius: ${borderRadius.small};
  }
  
  @media (max-width: 768px) {
    font-size: ${typography.fontSize.mobile.h2};
  }
`;

const CardsGrid = styled.div`
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

const ServiceCard = styled(motion.div)`
  background: ${colors.background.white};
  padding: ${spacing.xl};
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.light};
  border: 2px solid ${colors.background.light};
  text-align: center;
  transition: all ${animations.transition.normal};
  position: relative;
  overflow: hidden;

  &:hover {
    ${animations.hover.lift};
    box-shadow: ${shadows.medium};
    border-color: ${colors.primary};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${colors.accent.redGradient};
  }
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: ${spacing.lg};
  color: ${colors.primary};
`;

const CardTitle = styled.h3`
  font-size: ${typography.fontSize.h3};
  font-weight: ${typography.fontWeight.bold};
  font-family: ${typography.fontFamily.heading};
  margin-bottom: ${spacing.md};
  color: ${colors.text.secondary};
`;

const CardDescription = styled.p`
  font-size: ${typography.fontSize.medium};
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  line-height: ${typography.lineHeight.normal};
  margin-bottom: ${spacing.lg};
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  justify-content: center;
`;

const SkillTag = styled.li`
  background: ${colors.background.light};
  color: ${colors.text.secondary};
  padding: ${spacing.xs} ${spacing.md};
  border-radius: ${borderRadius.pill};
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.medium};
  font-family: ${typography.fontFamily.body};
`;

// What I've Done Section
const WhatIveDoneSection = styled.section`
  background-color: ${colors.background.light};
  padding: ${spacing.section} ${spacing.md};
  
  @media (max-width: 768px) {
    padding: ${spacing.sectionPaddingMobile};
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${colors.background.white};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.light};
  transition: all ${animations.transition.normal};
  display: flex;
  align-items: center;
  gap: ${spacing.lg};
  
  &:hover {
    ${animations.hover.lift};
    box-shadow: ${shadows.medium};
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProjectIcon = styled.div`
  font-size: 40px;
  color: ${colors.accent.red};
`;

const ProjectContent = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h4`
  font-size: ${typography.fontSize.large};
  font-weight: ${typography.fontWeight.bold};
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.secondary};
  margin-bottom: ${spacing.xs};
`;

const ProjectDescription = styled.p`
  font-size: ${typography.fontSize.medium};
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  margin: 0;
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

export const Tech = ({ heading, items }) => {
  const services = [
    {
      icon: "💻",
      title: "Frontend Development",
      description: "Creating responsive, user-friendly interfaces with modern frameworks and best practices",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      icon: "⚙️",
      title: "Backend Development", 
      description: "Building robust APIs and server-side solutions for scalable applications",
      skills: ["Node.js", "MongoDB", "Express", "RESTful APIs"]
    },
    {
      icon: "🚀",
      title: "Fullstack Projects",
      description: "End-to-end development from concept to deployment",
      skills: ["System Design", "Database", "DevOps", "Testing"]
    }
  ];

  const projects = [
    {
      icon: "📊",
      title: "Data-driven Dashboard",
      description: "Built interactive dashboards with real-time data visualization and responsive design"
    },
    {
      icon: "🛍️",
      title: "E-commerce Platform",
      description: "Developed fullstack shopping experiences with secure payment integration"
    },
    {
      icon: "🔧",
      title: "API Development",
      description: "Created RESTful APIs with authentication and database management"
    },
    {
      icon: "📱",
      title: "Responsive Web Apps",
      description: "Delivered mobile-first applications with modern UI/UX principles"
    }
  ];

  return (
    <>
      <SectionWrapper>
        <Section id="tech">
          <Heading>{heading}</Heading>
          <Text>{items.join(", ") + "."}</Text>
        </Section>
      </SectionWrapper>
      
      <WhatIDoSection>
        <SectionHeading>What I Do</SectionHeading>
        <CardsGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Icon>{service.icon}</Icon>
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
              <SkillsList>
                {service.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillsList>
            </ServiceCard>
          ))}
        </CardsGrid>
      </WhatIDoSection>
      
      <WhatIveDoneSection>
        <SectionHeading>What I've Done</SectionHeading>
        <CardsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProjectIcon>{project.icon}</ProjectIcon>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          ))}
        </CardsGrid>
      </WhatIveDoneSection>
    </>
  );
};