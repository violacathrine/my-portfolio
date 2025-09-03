import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background-color: ${colors.background.cream};
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
    background: ${colors.accent.coralGradient};
    border-radius: ${borderRadius.small};
  }
  
  @media (max-width: 768px) {
    font-size: ${typography.fontSize.mobile.h2};
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${spacing.lg};
  }
`;

const ServiceCard = styled(motion.div)`
  background: linear-gradient(135deg, ${colors.background.white} 0%, ${colors.background.white}F5 100%);
  padding: ${spacing.xl};
  border-radius: ${borderRadius.large};
  box-shadow: ${shadows.medium};
  border: 2px solid ${colors.accent.coralGradient};
  text-align: center;
  transition: all ${animations.transition.normal};
  position: relative;
  overflow: hidden;

  &:hover {
    ${animations.hover.lift};
    box-shadow: ${shadows.heavy};
    border: 2px solid ${colors.tertiary};
    background: linear-gradient(135deg, ${colors.background.white} 0%, ${colors.background.rose}20 100%);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${colors.accent.coralGradient};
  }

  &:nth-child(2) {
    border: 2px solid ${colors.accent.sageGradient};
    
    &:hover {
      border: 2px solid ${colors.secondary};
      background: linear-gradient(135deg, ${colors.background.white} 0%, ${colors.background.sage}20 100%);
    }
    
    &::before {
      background: ${colors.accent.sageGradient};
    }
  }

  &:nth-child(3) {
    border: 2px solid ${colors.accent.softGradient};
    
    &:hover {
      border: 2px solid ${colors.quaternary};
      background: linear-gradient(135deg, ${colors.background.white} 0%, ${colors.background.dustyPink}20 100%);
    }
    
    &::before {
      background: ${colors.accent.softGradient};
    }
  }
`;

const Icon = styled.div`
  font-size: 48px;
  margin-bottom: ${spacing.lg};
  color: ${colors.secondary};
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
  background: ${colors.background.beige};
  color: ${colors.text.secondary};
  padding: ${spacing.xs} ${spacing.md};
  border-radius: ${borderRadius.pill};
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.medium};
  font-family: ${typography.fontFamily.body};
`;

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const WhatIDo = () => {
  const services = [
    {
      icon: "💕",
      title: "Frontend Magic",
      description: "I absolutely love crafting beautiful, interactive interfaces that make users smile! Every pixel matters when creating experiences that feel smooth, accessible, and delightfully functional.",
      skills: ["React", "JavaScript ES6", "HTML5", "CSS3", "Styled Components", "Responsive Design"]
    },
    {
      icon: "🌸",
      title: "Backend & APIs", 
      description: "The behind-the-scenes hero work! I get excited about building robust server-side solutions, designing clean APIs, and making sure everything talks to each other perfectly.",
      skills: ["Node.js", "Express", "MongoDB", "RESTful APIs", "Authentication", "Database Design"]
    },
    {
      icon: "✨",
      title: "Full-Stack Dreams",
      description: "From that first spark of an idea to seeing it live in the wild - I love bringing complete visions to life! Problem-solving through the entire journey is where I truly shine.",
      skills: ["MERN Stack", "Agile", "Git", "Testing", "Deployment", "Creative Problem Solving"]
    }
  ];

  return (
    <Section id="what-i-do">
      <Heading>What I Love Doing 💖</Heading>
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
    </Section>
  );
};