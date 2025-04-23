import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  background-color: rgb(255, 228, 232);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 128px 16px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
    padding: 0 5rem;
    text-align: left;
  }
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #ff4575;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    font-size: 64px;
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-family: "Hind", sans-serif;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 18px;
    margin: 0;
  }
`;

export const Tech = ({ heading, items }) => {
  return (
    <Section id="tech">
      <Heading>{heading}</Heading>
      <Text>{items.join(", ") + "."}</Text>
    </Section>
  );
};
