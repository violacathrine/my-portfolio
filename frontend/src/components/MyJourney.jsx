// MyJourney.jsx
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background-color: ${colors.background.cream};
  padding: ${spacing.section} ${spacing.md};
  width: 100%;
  position: relative;
  
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
    background: ${colors.accent.greenGradient};
    border-radius: ${borderRadius.small};
  }
  
  @media (max-width: 768px) {
    font-size: ${typography.fontSize.mobile.h2};
    margin-bottom: ${spacing.xxxl};
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: ${spacing.xl};
  border-left: 3px solid ${colors.tertiary};
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding-left: ${spacing.lg};
    border-left-width: 2px;
  }
`;

const Entry = styled(motion.div)`
  position: relative;
  margin-bottom: ${spacing.xxxl};
  background: ${colors.background.white};
  padding: ${spacing.lg};
  border-radius: ${borderRadius.medium};
  box-shadow: ${shadows.light};
  border: 1px solid ${colors.tertiary}40;
  transition: all ${animations.transition.normal};

  &:hover {
    ${animations.hover.lift};
    box-shadow: ${shadows.medium};
  }

  &::before {
    content: "";
    position: absolute;
    left: -${spacing.xl + 12}px;
    top: ${spacing.xl};
    width: 20px;
    height: 20px;
    background: ${colors.accent.greenGradient};
    border-radius: ${borderRadius.circle};
    border: 3px solid ${colors.background.white};
    z-index: 2;
    box-shadow: ${shadows.colored};
  }
  
  @media (max-width: 600px) {
    padding: ${spacing.lg};
    margin-bottom: ${spacing.xxl};
    
    &::before {
      left: -${spacing.lg + 12}px;
      top: ${spacing.lg};
      width: 16px;
      height: 16px;
    }
  }
`;

const JobTitle = styled.h3`
  font-size: ${typography.fontSize.h3};
  font-weight: ${typography.fontWeight.bold};
  font-family: ${typography.fontFamily.heading};
  margin: 0 0 ${spacing.sm} 0;
  color: ${colors.text.secondary};
  
  @media (max-width: 600px) {
    font-size: ${typography.fontSize.mobile.h3};
  }
`;

const Company = styled.p`
  font-size: ${typography.fontSize.large};
  font-weight: ${typography.fontWeight.semibold};
  font-family: ${typography.fontFamily.body};
  margin: 0 0 ${spacing.xs} 0;
  color: ${colors.secondary};
`;

const Period = styled.p`
  font-size: ${typography.fontSize.small};
  font-weight: ${typography.fontWeight.medium};
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.light};
  margin: 0 0 ${spacing.md} 0;
  background: ${colors.tertiary}40;
  display: inline-block;
  padding: ${spacing.xs} ${spacing.md};
  border-radius: ${borderRadius.pill};
  border: 1px solid ${colors.tertiary}60;
`;

const Description = styled.p`
  font-size: ${typography.fontSize.medium};
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  line-height: ${typography.lineHeight.normal};
  margin: 0;
  
  @media (max-width: 600px) {
    font-size: ${typography.fontSize.small};
  }
`;

export const MyJourney = () => {
  const roles = [
    {
      role: "JavaScript Bootcamp Student",
      company: "Technigo",
      period: "Jan 2025 – Present",
      description:
        "32-week bootcamp focusing on fullstack development: JavaScript (ES6), TypeScript, React, HTML5, CSS, Node.js, MongoDB. Agile teamwork with weekly sprints, pair programming and demos.",
    },
    {
      role: "Category Coordinator",
      company: "BAUHAUS & Co KB",
      period: "Sep 2017 – Sep 2019",
      description:
        "Maintained product data and daily updates for website content. Liaised with suppliers, purchasing, and customer service teams.",
    },
    {
      role: "Customer Service Agent",
      company: "Instabox AB",
      period: "Sep 2019 – Jan 2020",
      description:
        "Provided support in a fast-paced tech/logistics company. Solved customer issues, collaborated internally, and handled multiple systems.",
    },
  ];

  return (
    <Section id="my-journey">
      <Heading>My Journey</Heading>
      <Timeline>
        {roles.map((role, index) => (
          <Entry
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <JobTitle>{role.role}</JobTitle>
            <Company>{role.company}</Company>
            <Period>{role.period}</Period>
            <Description>{role.description}</Description>
          </Entry>
        ))}
      </Timeline>
    </Section>
  );
};
