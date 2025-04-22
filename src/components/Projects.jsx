import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 128px 16px;
  max-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: 700;
  text-align: center;
`;

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: #000;
  color: #fff;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  border-radius: 4px;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #eee;
  border-radius: 999px;
  text-decoration: none;
  color: #000;

  &:hover {
    background: #ddd;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Projects = ({ heading, projects }) => {
  return (
    <Section id="projects">
      <Heading>{heading}</Heading>

      {projects.map((project) => (
        <ProjectCard key={project.name}>
          <Image src={project.image} alt={project.name} />
          <Title>{project.name}</Title>
          <Text>{project.text}</Text>

          <TagsWrapper>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsWrapper>

          <LinksWrapper>
            <LinkButton
              href={project.netlify}
              target="_blank"
              rel="noopener noreferrer"
            >
              🌍 Live demo
            </LinkButton>
            <LinkButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              🛠️ View the code
            </LinkButton>
          </LinksWrapper>
        </ProjectCard>
      ))}
    </Section>
  );
};
