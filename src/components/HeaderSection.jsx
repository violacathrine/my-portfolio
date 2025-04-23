import React from "react";
import styled from "styled-components";
import { ScrollArrow } from "./ScrollArrow";

// 🔸 Wrapper för hela header-sektionen
const HeaderWrapper = styled.header`
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// 🔸 Själva "boken"
const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: auto;
    width: 90%;
    max-width: 1100px;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
  }
`;

const TextContent = styled.section`
  background: #fff8ee;
  flex: 1;
  padding: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 3rem;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -1px;
      width: 2px;
      height: 100%;
      background: linear-gradient(to right, rgba(0, 0, 0, 0.1), transparent);
      z-index: 2;
    }
  }
`;
const NavWrapper = styled.section`
  position: relative;
  flex: 1;
  background-color: #fff8ee;
  padding: 2rem;
  z-index: 2;

  // Fejkade sidor bakom
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 10px;
    width: 100%;
    height: 100%;
    background: #fff8ee;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.04);
    z-index: -1;
  }

  &::after {
    top: 20px;
    left: 20px;
    z-index: -2;
  }

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
          <p>Interested?</p>
          <p>
            <a href={`mailto:${email}`}>{mailtoText}</a> 💌
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
