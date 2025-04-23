// src/components/MyJourney.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color:rgb(255, 248, 238);
  padding: 128px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  padding-left: 80px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 100%;
    z-index: 1;

    -webkit-mask: radial-gradient(
        circle 8px at 16px 32px,
        transparent 98%,
        black 100%
      ),
      radial-gradient(circle 8px at 48px 32px, transparent 98%, black 100%),
      radial-gradient(
        circle 8px at 16px calc(100% - 32px),
        transparent 98%,
        black 100%
      ),
      radial-gradient(
        circle 8px at 48px calc(100% - 32px),
        transparent 98%,
        black 100%
      );
    -webkit-mask-composite: destination-out;

    /* För Firefox */
    mask-composite: exclude;

    background: #fff8ee;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 16px;
    right: 0;
    height: 100%;
    background: repeating-linear-gradient(
      to bottom,
      transparent,
      transparent 23px,
      #f1d7c9 24px
    );
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 3;
  }

  @media (min-width: 768px) {
    max-width: 700px;
  }
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
`;

export const MyJourney = ({ heading, text }) => {
  const paragraphs = text.split("\n");

  return (
    <Section id="my-journey">
      <Heading>{heading}</Heading>
      {paragraphs.map((para, index) => (
        <Paragraph key={index}>{para}</Paragraph>
      ))}
    </Section>
  );
};
