import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiArrowUp } from 'react-icons/fi';
import { colors, animations } from '../styles/designTokens';

const ScrollButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${colors.tertiary};
  color: ${colors.background.white};
  border: 2px solid ${colors.background.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  opacity: ${props => props.$visible ? '1' : '0'};
  visibility: ${props => props.$visible ? 'visible' : 'hidden'};
  transform: ${props => props.$visible ? 'translateY(0)' : 'translateY(20px)'};
  transition: all ${animations.transition.normal};
  z-index: 1000;
  
  &:hover {
    background: ${colors.text.accent};
    transform: translateY(-3px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
`;

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollButton
      $visible={isVisible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </ScrollButton>
  );
};