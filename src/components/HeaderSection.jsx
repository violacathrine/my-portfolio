import React from "react";
import styled from "styled-components";
import { ScrollArrow } from "./ScrollArrow";

// Layout
const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column; // ✅ staplar alla element vertikalt
  gap: 2rem;
  font-family: "Hind", sans-serif;
  padding: 1rem;
  background-color: white;

  @media (min-width: 768px) {
    padding: 14rem;
  }
`;

const HeaderContentRow = styled.div`
  background: #fff8ee;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;

const TextContent = styled.section`
  position: relative;
  padding: 2rem;
  z-index: 0;
  flex: 1;

  @media (min-width: 768px) {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -1px;
      width: 24px;
      height: 100%;
      background: linear-gradient(to left, rgba(0, 0, 0, 0.06), transparent);
      pointer-events: none;
      z-index: -1;
    }
  }
`;
const NavWrapper = styled.section`
  position: relative;
  padding: 2rem;
  z-index: 0;
  flex: 1;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

// Nav list
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  width: 100%;
  margin-bottom: 1rem;
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  font-weight: bold;
  color: #000;
`;

const Title = styled.span`
  flex-shrink: 0;
`;

const Dots = styled.span`
  flex-grow: 1;
  margin: 0 0.5rem;
  border-bottom: 2px dotted #000;
  height: 1em;
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
      <HeaderContentRow>
        <TextContent>
          <h2>{heading}</h2>
          <p>{text}</p>
          <p>Interested?</p>
          <p>
            <a href={`mailto:${email}`} aria-label={`Send email to ${email}`}>
              {mailtoText}
            </a>{" "}
            💌
          </p>
        </TextContent>

        <NavWrapper>
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
      </HeaderContentRow>
      <ScrollArrow targetId="tech-anchor" />
    </HeaderWrapper>
  );
};
