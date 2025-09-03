import styled from "styled-components";
import { motion } from "framer-motion";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background-color: ${colors.background.cream};
  padding: ${spacing.section} ${spacing.md} 40px;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 160px 40px 40px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
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
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: ${colors.accent.sageGradient};
    border-radius: ${borderRadius.small};
  }
  
  @media (min-width: 768px) {
    font-size: 56px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: 60px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 80px;
    align-items: start;
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const TextContent = styled(motion.div)`
  
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.secondary};
  line-height: 1.7;
  margin-bottom: 24px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

const HighlightCard = styled(motion.div)`
  background: ${colors.background.white};
  padding: 40px 32px;
  border-radius: ${borderRadius.large};
  box-shadow: ${shadows.light};
  border: 1px solid ${colors.background.white}60;
  transition: all ${animations.transition.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadows.medium};
  }
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  margin-bottom: 20px;
  line-height: 1.2;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: 15px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  margin-bottom: 12px;
  position: relative;
  padding-left: 20px;
  
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 8px;
    width: 6px;
    height: 6px;
    background: ${colors.tertiary};
    border-radius: 50%;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const AboutMe = () => {

  return (
    <Section id="about-me">
      <Container>
        <SectionHeader>
          <Heading>About Me</Heading>
        </SectionHeader>
        
        <ContentWrapper>
          <TextContent
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Paragraph>
              I have been a <strong>creative soul</strong> for as long as I can remember. What really drives me is that <strong>deep curiosity</strong> and joy I feel when I get to <strong>explore, build, and solve problems</strong>. When I am completely immersed in a challenge, I find a sense of calm and focus that I truly love.
            </Paragraph>
            
            <Paragraph>
              <strong>Tech gives me the perfect blend of creativity and logic.</strong> I enjoy digging into the details, being analytical, and seeing how each small part contributes to something bigger. Seeing an idea grow into a functional, visual experience is <strong>pure magic</strong> for me.
            </Paragraph>
            
            <Paragraph>
              With experience in <strong>logistics, sales, and customer service</strong>, I have developed strong <strong>problem-solving skills</strong> and a <strong>user-focused mindset</strong> – I always think about how things will feel and work for the end user. Now I combine all of these strengths in my role as a <strong>web developer</strong>.
            </Paragraph>
          </TextContent>

          <SidebarContent>
            <HighlightCard
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <CardTitle>What I bring to your table</CardTitle>
              <SkillsList>
                <SkillItem>Creative problem solving with analytical thinking</SkillItem>
                <SkillItem>User-focused approach with a background in customer service</SkillItem>
                <SkillItem>Ability to work effectively under pressure</SkillItem>
                <SkillItem>Strong attention to detail and quality</SkillItem>
                <SkillItem>Collaborative spirit with independent working skills</SkillItem>
                <SkillItem>Enthusiasm for learning and staying up-to-date on technology</SkillItem>
              </SkillsList>
            </HighlightCard>
          </SidebarContent>
        </ContentWrapper>

      </Container>
    </Section>
  );
};