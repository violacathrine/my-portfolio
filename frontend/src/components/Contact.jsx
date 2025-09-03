import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { colors, typography, spacing, borderRadius, shadows, animations } from "../styles/designTokens";

const Section = styled.section`
  background-color: ${colors.background.white};
  padding: ${spacing.section} ${spacing.md} 60px;
  position: relative;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: ${spacing.section} ${spacing.lg} 80px;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
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
  margin: 0 auto 40px;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const ContactIntro = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.text.primary};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 60px;
  line-height: 1.6;
  
  strong {
    color: ${colors.text.accent};
  }
`;

const ContactForm = styled(motion.form)`
  background: ${colors.background.offWhite};
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto;
  border: 3px solid ${colors.background.white};
  
  @media (min-width: 768px) {
    padding: 50px 40px;
  }
`;

const FormTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  font-family: ${typography.fontFamily.heading};
  color: ${colors.text.primary};
  text-align: center;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.text.primary};
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${colors.background.beige};
  border-radius: 12px;
  font-size: 16px;
  font-family: ${typography.fontFamily.body};
  background: ${colors.background.white};
  transition: all ${animations.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${colors.tertiary};
    box-shadow: 0 0 0 3px ${colors.tertiary}20;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${colors.background.beige};
  border-radius: 12px;
  font-size: 16px;
  font-family: ${typography.fontFamily.body};
  background: ${colors.background.white};
  min-height: 150px;
  resize: vertical;
  transition: all ${animations.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${colors.tertiary};
    box-shadow: 0 0 0 3px ${colors.tertiary}20;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px 32px;
  background: ${colors.tertiary};
  color: ${colors.background.white};
  border: none;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  font-family: ${typography.fontFamily.heading};
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all ${animations.transition.normal};
  margin-top: 8px;
  
  &:hover:not(:disabled) {
    background: ${colors.tertiary}DD;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px ${colors.tertiary}40;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  margin-top: 20px;
  padding: 12px 16px;
  border-radius: ${borderRadius.md};
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  background: ${props => props.$type === 'success' ? '#d4edda' : '#f8d7da'};
  color: ${props => props.$type === 'success' ? '#155724' : '#721c24'};
  border: 1px solid ${props => props.$type === 'success' ? '#c3e6cb' : '#f5c6cb'};
`;

const API_CONFIG = {
  baseURL: 'http://localhost:5000',
  endpoints: {
    contact: '/api/contact'
  },
  headers: {
    'Content-Type': 'application/json'
  }
};

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const Contact = () => {
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
    <Section id="contact">
      <Container>
        <SectionHeader>
          <Heading>Let's Connect</Heading>
          <Subheading>
            Ready to start a conversation? I'd love to hear from you!
          </Subheading>
        </SectionHeader>
        
        <ContactIntro>
          Do you have an <strong>exciting project</strong>? Do you need a <strong>problem solver</strong>? 
          Or do you just want to talk about code? I would love to hear from you! 
          Send me a message and let's start something amazing together.
        </ContactIntro>
        
        <ContactForm
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={handleSubmit}
        >
          <FormTitle>Get In Touch</FormTitle>
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
      </Container>
    </Section>
  );
};