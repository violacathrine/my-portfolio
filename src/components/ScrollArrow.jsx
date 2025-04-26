import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

//  Bounce-animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;

//  Wrapper for ScrollArrow to center
const ScrollWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 63px;

  @media (min-width: 768px) {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 0;
  }
`;

// The "Arrow"
const ArrowButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  background: none;
  border: none;
`;

// Animation
const fadeInUp = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const ScrollArrow = ({ targetId }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollWrapper>
      <ArrowButton
        onClick={handleClick}
        aria-label="Scroll to next section"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <svg
          width="29"
          height="36"
          viewBox="0 0 29 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 23.5L14.5 33M14.5 33L5 23.5M14.5 33L14.5 3"
            stroke="#FF4575"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </ArrowButton>
    </ScrollWrapper>
  );
};
