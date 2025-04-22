import React from "react";
import styled, { keyframes } from "styled-components";

// 🔁 Bounce-animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;

// 🔽 Wrapper som centrerar pilen
const ScrollWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
`;

// 🔽 Själva pil-knappen
const ArrowButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${bounce} 2s infinite;
  cursor: pointer;
  background: none;
  border: none;
`;

export const ScrollArrow = ({ targetId }) => {
  const handleClick = () => {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ScrollWrapper>
      <ArrowButton onClick={handleClick} aria-label="Scroll to next section">
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
