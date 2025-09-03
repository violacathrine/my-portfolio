import styled from "styled-components";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiLayers } from "react-icons/fi";
import { OrganicBackground } from "./OrganicBackground";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background: ${colors.background.sage};
  padding: 120px 20px 60px;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 160px 40px 80px;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${colors.background.offWhite};
  aspect-ratio: 1 / 1;
  border-radius: 0;
  padding: 30px 25px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border: 5px solid ${colors.background.white};
  transition: all ${animations.transition.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
    
    .service-icon {
      transform: scale(1.1);
    }
  }
`;

const ServiceIcon = styled.div`
  font-size: 48px;
  margin-bottom: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: inline-block;
  color: ${colors.text.accent};
  
  &.service-icon {
    /* Referenced in hover state */
  }
`;

const ServiceTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  margin-bottom: 16px;
  line-height: 1.2;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  line-height: 1.6;
  margin-bottom: 24px;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
`;

const SkillTag = styled.span`
  background: ${colors.background.offWhite};
  color: ${colors.text.accent};
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  font-family: ${typography.fontFamily.body};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid ${colors.background.beige};
`;

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

export const ModernWhatIDo = () => {
  const services = [
    {
      icon: FiCode,
      title: "Frontend Development",
      description: "Creating stunning, responsive user interfaces that bring designs to life with modern frameworks and clean, maintainable code.",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Styled Components"]
    },
    {
      icon: FiServer,
      title: "Backend & APIs", 
      description: "Building robust server-side applications and RESTful APIs that power seamless user experiences and handle complex data flows.",
      skills: ["Node.js", "Express", "MongoDB", "Authentication", "API Design"]
    },
    {
      icon: FiLayers,
      title: "Fullstack Solutions",
      description: "End-to-end development from initial concept through deployment, creating complete web applications that solve real problems.",
      skills: ["MERN Stack", "Agile", "Git", "Testing", "Deployment"]
    }
  ];

  return (
    <Section id="what-i-do">
      <OrganicBackground variant="darkSage" />
      <Container>
        <SectionHeader>
          <Heading>What I Do</Heading>
          <Subheading>
            I craft digital experiences that combine beautiful design with robust functionality, 
            turning ideas into reality through clean code and thoughtful user experiences.
          </Subheading>
        </SectionHeader>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              $index={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <ServiceIcon className="service-icon">
                <service.icon />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <SkillTags>
                {service.skills.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </Section>
  );
};