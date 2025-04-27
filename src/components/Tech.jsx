import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  background-color: rgb(255, 228, 232);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 128px 16px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 64px;
    padding: 0 80px;
    height: 80vh;
    text-align: left;
  }
`;

const Heading = styled.h2`
  font-size: 56px;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  color: #ff4575;
  margin-bottom: 64px;

  @media (min-width: 768px) {
    font-size: 80px;
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: "Hind";
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 0;
    padding-left: 48px;
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
