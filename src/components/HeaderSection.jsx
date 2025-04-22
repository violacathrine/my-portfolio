import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 2rem;
  font-family: "Hind", sans-serif;
  background-color: rgb(255, 185, 227);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Content = styled.section`
  text-align: left;

  @media (min-width: 768px) {
    max-width: 400px;
    padding-right: 2rem;
    text-align: left;
  }
`;

const NavWrapper = styled.section`
  @media (min-width: 768px) {
    padding-left: 2rem;
  }
`;

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
  text-decoration: none;
  font-weight: bold;
  color: #000;
`;

const Title = styled.span`
  flex-shrink: 0;
`;

const Dots = styled.span`
  width: 100px;
  border-bottom: 2px dotted #333;
  margin: 0 0.5rem;
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
      <Content>
        <h2>{heading}</h2>
        <p>{text}</p>
        <p>Interested?</p>
        <p>
          <a href={`mailto:${email}`} aria-label={`Send email to ${email}`}>
            {mailtoText}
          </a>{" "}
          💌
        </p>
      </Content>

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
    </HeaderWrapper>
  );
};
