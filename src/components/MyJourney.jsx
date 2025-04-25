// src/components/MyJourney.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: #fff8ee;
  padding: 128px 16px;
  padding-left: 80px;
  padding-right: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 900px;
  }
`;

const RulingLines = styled.div`
  position: absolute;
  top: 0;
  left: 64px;
  right: 0;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    transparent,
    transparent 23px,
    #f1d7c9 24px
  );
  z-index: 1;
`;

const Hole = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border: 2px solid #aaa;
  border-radius: 50%;
  z-index: 2;
`;

const Holes = () => (
  <>
    <Hole style={{ top: "64px", left: "32px" }} />
    <Hole style={{ bottom: "64px", left: "32px" }} />
    <Hole style={{ top: "120px", left: "32px" }} />
    <Hole style={{ bottom: "120px", left: "32px" }} />
  </>
);

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  padding-left: 0;
  width: fit-content;
  z-index: 3;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.6;
  position: relative;
  z-index: 3;
`;

const Highlight = styled.span`
  background-color:rgba(255, 244, 147, 0.56);
  padding: 0 2px;
`;

// 🔸 Tolka [[markerat]] i content.json
function parseHighlight(text) {
  const parts = text.split(/(\[\[.*?\]\])/g);
  return parts.map((part, i) =>
    part.startsWith("[[") && part.endsWith("]]") ? (
      <Highlight key={i}>{part.slice(2, -2)}</Highlight>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export const MyJourney = ({ heading, text }) => {
  const paragraphs = text.split("\n");

  return (
    <Section id="my-journey">
      <RulingLines />
      <Holes />
      <Heading>{heading}</Heading>
      {paragraphs.map((para, index) => (
        <Paragraph key={index}>{parseHighlight(para)}</Paragraph>
      ))}
    </Section>
  );
};
