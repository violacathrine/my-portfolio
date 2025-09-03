import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  gap: 7px;
  background-color: #f4f4f4;
  color: #1a1a1a;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  padding: 7px 16px;
  border-radius: 40px;
  transition: background-color 0.3s;
  width: fit-content; 
  max-width: 100%;
  white-space: nowrap; 

  &:hover {
    background-color: #eaeaea;
  }

  svg {
    font-size: 24px;
  }
`;

export const ProjectButton = ({ type, label, href }) => {
  const Icon = type === "demo" ? SlGlobe : FaGithub;

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <Icon />
      {label}
    </Button>
  );
};
