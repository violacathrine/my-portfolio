import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-color: white;
  padding: 128px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;

    @media (min-width: 768px) {
width: 100%;
    }
  }
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
  font-family: "Montserrat";
  background-color: #000;
  color: #fff;
  padding: 2px 6px;
  align-items: flex-start;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
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

          {/*<LinksWrapper>
            {project.links.map((link) => (
              <LinkButton key={link.href} href={link.href}>
                {link.label}
              </LinkButton>
            ))}
          </LinksWrapper>*/}
        </ProjectCard>
      ))}
    </Section>
  );
};
