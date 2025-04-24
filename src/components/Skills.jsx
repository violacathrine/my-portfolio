import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background-color: rgb(255, 255, 255);
  padding: 128px 16px;
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

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Group = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Dynamisk färg för badges
const badgeColors = {
  Code: "#ff4575",
  Toolbox: "#3b9eff",
  Upcoming: "#60c683",
  More: "#ffaa00",
};

const Title = styled.h3`
  padding: 0.25rem 0.75rem;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  background-color: ${({ $group }) => badgeColors[$group] || "#ccc"};

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  color: #ff4575;
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const Skills = ({ heading, groups }) => {
  return (
    <Section id="skills">
      <Heading>{heading}</Heading>
      <GroupWrapper>
        {groups.map((group, i) => (
          <Group
            key={group.title}
            custom={i}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <Title $group={group.title}>{group.title}</Title>
            <List>
              {group.items.map((item) => (
                <Item key={item}>{item}</Item>
              ))}
            </List>
          </Group>
        ))}
      </GroupWrapper>
    </Section>
  );
};
