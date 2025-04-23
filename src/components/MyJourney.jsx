// src/components/MyJourney.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 128px 16px;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;

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
