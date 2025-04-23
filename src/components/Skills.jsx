import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 128px 16px;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  color: #ff4575;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const Title = styled.h3`
  background: #ff4575;
  color: #fff;
  padding: 0.25rem 0.75rem;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
`;

const Item = styled.li`
  color: #ff4575;
  font-size: 16px;
  font-weight: 500;
`;

export const Skills = ({ heading, groups }) => {
  return (
    <Section id="skills">
      <Heading>{heading}</Heading>
      {groups.map((group) => (
        <Group key={group.title}>
          <Title>{group.title}</Title>
          <List>
            {group.items.map((item) => (
              <Item key={item}>{item}</Item>
            ))}
          </List>
        </Group>
      ))}
    </Section>
  );
};
