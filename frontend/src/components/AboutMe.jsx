import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
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

const ContactForm = styled(motion.form)`
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

const FormTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  margin-bottom: 20px;
  line-height: 1.2;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.primary};
  margin-bottom: 8px;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${colors.background.beige};
  border-radius: ${borderRadius.medium};
  font-size: 16px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.primary};
  transition: border-color ${animations.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${colors.tertiary};
  }
  
  &::placeholder {
    color: ${colors.text.muted}80;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${colors.background.beige};
  border-radius: ${borderRadius.medium};
  font-size: 16px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.primary};
  transition: border-color ${animations.transition.fast};
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: ${colors.tertiary};
  }
  
  &::placeholder {
    color: ${colors.text.muted}80;
  }
`;

const SubmitButton = styled.button`
  background: ${colors.tertiary};
  color: ${colors.background.white};
  padding: 16px 32px;
  border: none;
  border-radius: 50px;
  font-family: ${typography.fontFamily.heading};
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all ${animations.transition.normal};
  width: 100%;
  position: relative;
  
  &:hover:not(:disabled) {
    background: ${colors.tertiary}DD;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${colors.tertiary}40;
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  padding: 12px 16px;
  border-radius: ${borderRadius.medium};
  font-size: 14px;
  font-family: ${typography.fontFamily.body};
  margin-top: 12px;
  text-align: center;
  
  ${props => props.$type === 'success' ? `
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  ` : `
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  `}
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

// API Configuration
const API_CONFIG = {
  baseURL: 'http://localhost:5000',
  endpoints: {
    contact: '/api/contact'
  },
  headers: {
    'Content-Type': 'application/json'
  }
};

export const AboutMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${API_CONFIG.baseURL}${API_CONFIG.endpoints.contact}`, {
        method: 'POST',
        headers: API_CONFIG.headers,
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage({
          type: 'error',
          text: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatusMessage({
        type: 'error',
        text: 'Failed to send message. Please check your connection and try again.'
      });
    }

    setIsLoading(false);
  };

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

        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <Paragraph style={{ fontSize: '18px', fontWeight: '600', color: colors.text.primary, marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            Do you have an <strong>exciting project</strong>? Do you need a <strong>problem solver</strong>? Or do you just want to talk about code? I would love to hear from you! Send me a message in the contact form and we can start something amazing together.
          </Paragraph>
          
          <ContactForm
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onSubmit={handleSubmit}
            style={{ maxWidth: '600px', margin: '0 auto' }}
          >
            <FormTitle>Let's Connect</FormTitle>
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                disabled={isLoading}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
                disabled={isLoading}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project or just say hi!"
                required
                disabled={isLoading}
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message'}
            </SubmitButton>
            {statusMessage.text && (
              <StatusMessage $type={statusMessage.type}>
                {statusMessage.text}
              </StatusMessage>
            )}
          </ContactForm>
        </div>
      </Container>
    </Section>
  );
};