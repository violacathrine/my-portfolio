import styled from "styled-components";
import { ProjectButton, ButtonsWrapper } from "./ButtonsComponents";

const Section = styled.section`
  background-color: white;
  width: 100%;
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
    flex-wrap: wrap;
    flex-direction: row;
    margin: 50px;
  }
`;

const ProjectCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 50%;
    margin: 0 auto;
    align-items: flex-start;
    align-items: stretch;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const ContentWrapper = styled.div`
  flex: 2;
  padding-top: 16px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-top: 0;
  }

  @media (min-width: 1200px) {
    padding-left: 0px;
    padding-top: 0;
  }
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
  gap: 8px;
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
            <ContentWrapper>
              <Title>{project.name}</Title>
              <Text>{project.text}</Text>
              <TagsWrapper>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </TagsWrapper>

              <ButtonsWrapper>
                {project.buttons.map((btn, index) => (
                  <ProjectButton
                    key={index}
                    type={btn.type}
                    label={btn.label}
                    href={btn.href}
                  />
                ))}
              </ButtonsWrapper>
            </ContentWrapper>
          </ProjectCard>
        ))}
      </ProjectsWrapper>
    </Section>
  );
};
