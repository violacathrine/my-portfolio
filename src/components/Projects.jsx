import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: white;
  padding: 128px 16px;
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

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
  }
`;

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex: 0 1 calc(50% - 32px); /* 2 cards per row with spacing */
  }
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
  font-family: "Montserrat";
  background-color: #000;
  color: #fff;
  padding: 2px 6px;
  font-size: 16px;
  font-weight: 600;
`;

export const Projects = ({ heading, projects }) => {
  return (
    <Section id="projects">
      <Heading>{heading}</Heading>

      <ProjectsWrapper>
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
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </Section>
  );
};
