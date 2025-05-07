import styled from "styled-components";
import { ScrollArrow } from "./ScrollArrow";

const HeaderWrapper = styled.header`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff8ee;

  @media (min-width: 768px) {
    justify-content: center; 
    align-items: center; 
  }
`;

// The "Book"
const BookContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 48px;

  @media (min-width: 768px) {
    flex-direction: row;
    margin: auto;
    max-width: 1100px;
    width: 100%;
    align-items: center;
    padding-top: 16px;
    gap: 15px;
  }
`;

const TextContent = styled.section`
  position: relative;
  flex: 1;
  padding: 16px;
  z-index: 2;
  font-size: 18px;
  }
`;

const NavWrapper = styled.section`
  position: relative;
  flex: 1;
  z-index: 2;
  padding: 18px;
`;

// Navigation
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 13px;
`;

const NavLink = styled.a`
  position: relative;
  font-size: 18px;
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 69, 116, 0.19);
    color: rgb(0, 0, 0); /* Lite ljusare grå ton */
  }
`;

const Title = styled.span`
  flex-shrink: 0;
`;

const Dots = styled.span`
  flex-grow: 1;
  margin: 0 8px;
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
          <h2>Chapter</h2>
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
        <ScrollArrow targetId="tech" />
      </BookContainer>
    </HeaderWrapper>
  );
};
