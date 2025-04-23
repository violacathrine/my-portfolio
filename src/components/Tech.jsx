import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: rgb(255, 185, 227);
  color: white;
  padding-top: 128px;
  padding-bottom: 128px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: black;
  text-align: center;
  font-family: "Montserrat";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Paragraph = styled.p`
  color: black;
  font-family: "Hind";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
`;

export const Tech = ({ heading, items }) => {
  return (
    <Section id="tech">
      <Heading>{heading}</Heading>
      <Paragraph>{items.join(", ") + "."}</Paragraph>
    </Section>
  );
};
