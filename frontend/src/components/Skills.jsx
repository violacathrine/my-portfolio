import styled from "styled-components";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background: ${colors.background.sage};
  padding: 0 20px 120px;
  position: relative;
  margin-top: -40px;
  
  @media (min-width: 768px) {
    padding: 0 40px 160px;
    margin-top: -60px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  padding-top: 60px;
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: 700;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  margin-bottom: 16px;
  line-height: 1.1;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${colors.accent.coralGradient};
    border-radius: ${borderRadius.small};
  }
  
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

const SkillsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const SkillItem = styled.div`
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const SkillName = styled.h4`
  font-size: 16px;
  font-weight: 600;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.primary};
  margin: 0;
`;

const SkillLevel = styled.span`
  font-size: 14px;
  font-weight: 500;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background: ${colors.background.beige};
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: ${colors.tertiary};
  width: ${props => props.$width}%;
  border-radius: 2px;
  transition: width 1s ease-out;
`;


// Flatten all skills with levels
const skillsWithLevels = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "Express", level: 80 },
  { name: "Git", level: 85 },
  { name: "Styled Components", level: 90 }
];

export const Skills = ({ heading }) => {
  return (
    <Section id="skills">
      <Container>
        <SectionHeader>
          <Heading>{heading || "Skills & Tools"}</Heading>
        </SectionHeader>
        
        <SkillsContainer>
          {skillsWithLevels.map((skill) => (
            <SkillItem key={skill.name}>
              <SkillLabel>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel>{skill.level}%</SkillLevel>
              </SkillLabel>
              <ProgressBarContainer>
                <ProgressBar $width={skill.level} />
              </ProgressBarContainer>
            </SkillItem>
          ))}
        </SkillsContainer>
      </Container>
    </Section>
  );
};
