import styled from "styled-components";
import { colors, typography, spacing } from "../styles/designTokens";

const FooterWrapper = styled.footer`
  background: ${colors.background.cream};
  padding: 20px ${spacing.md};
  text-align: center;
  border-top: 1px solid ${colors.background.beige};
`;

const FooterText = styled.p`
  font-size: 14px;
  font-family: ${typography.fontFamily.body};
  color: ${colors.text.muted};
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const EmailLink = styled.a`
  color: ${colors.text.muted};
  text-decoration: none;
  
  &:hover {
    color: ${colors.tertiary};
    text-decoration: underline;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>
        © 2025 Cathrine Olsson | <EmailLink href="mailto:cathrineohlsson@live.se">cathrineohlsson@live.se</EmailLink>
      </FooterText>
    </FooterWrapper>
  );
};