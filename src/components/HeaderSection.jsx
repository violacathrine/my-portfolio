import React from "react";
import styled from "styled-components";
import { ScrollArrow } from "./ScrollArrow";

// 🔸 Wrapper för hela header-sektionen
const HeaderWrapper = styled.header`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff8ee;
`;

// 🔸 Själva "boken"
const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // detta är det viktiga!
  padding-top: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: auto;
    max-width: 1100px;
    width: 100%;
    align-items: center;
  }
`;

const TextContent = styled.section`
  position: relative;
  flex: 1;
  background-color: #fff8ee;
  padding: 1rem;
  z-index: 2;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const NavWrapper = styled.section`
  position: relative;
  flex: 1;
  background-color: #fff8ee;
  z-index: 2;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

// 🔸 Navigation
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

const Title = styled.span`
  flex-shrink: 0;
`;

const Dots = styled.span`
  flex-grow: 1;
  margin: 0 0.5rem;
  border-bottom: 2px dotted #000;
`;

const Page = styled.span`
  flex-shrink: 0;
`;

export const HeaderSection = ({
  id,
  heading,
  text,
  email,
  mailtoText,
  nav,
}) => {
  return (
    <HeaderWrapper id={id}>
      <BookContainer>
        <TextContent>
          <h2>{heading}</h2>
          <p>{text}</p>
          <p>
            Interested? <a href={`mailto:${email}`}>{mailtoText}</a> 💌
          </p>
        </TextContent>

        <NavWrapper>
          <h3>CHAPTER</h3>
          <nav>
            <NavList>
              {nav.map((item) => (
                <NavItem key={item.label}>
                  <NavLink href={item.href}>
                    <Title>{item.label}</Title>
                    <Dots />
                    <Page>{item.page}</Page>
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </nav>
        </NavWrapper>
      </BookContainer>
      <ScrollArrow targetId="tech-anchor" />
    </HeaderWrapper>
  );
};
