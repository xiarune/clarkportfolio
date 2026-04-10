// src/pages/Projects.js
import React from 'react';
import styled from 'styled-components';
import backgroundProjects from '../assets/images/background-projects.jpg';

import quizImg from '../assets/images/projects/quiz-app.png';
import filmImg from '../assets/images/projects/film.png';
import animImg from '../assets/images/projects/animation.png';
import novaImg from '../assets/images/projects/nova.png';
import litImg from '../assets/images/projects/literature.png';
import portImg from '../assets/images/projects/sable_logo.png';

const Wrapper = styled.section.attrs({
  'aria-labelledby': 'projects-title',
})`
  background-image: url(${backgroundProjects});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(26, 20, 16, 0.65);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #f5e6c8;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-family: 'Inter', sans-serif;
  color: #f5e6c8;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
  opacity: 0.85;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1100px;
  margin: 0 auto;
  align-items: stretch;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;

  &:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 3px;
    border-radius: 12px;
  }
`;

const Card = styled.div`
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  padding: 2rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease, border-color 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 280px;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(201, 162, 39, 0.6);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  margin-top: 0;
  font-size: 1.25rem;
  color: #c9a227;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #f5e6c8;
  opacity: 0.85;
  flex-grow: 1;
`;

const ProjectImage = styled.img`
  margin-top: auto;
  padding-top: 1rem;
  width: 140px;
  height: auto;
  object-fit: contain;
  align-self: center;
  opacity: 0.9;
`;

export default function Projects() {
  const projectData = [
    {
      title: 'Sable: A Reading & Writing Audio Immersive Platform',
      description: 'Full Stack reading and writing application (MERN)',
      link: 'https://sable-two.vercel.app/',
      image: portImg,
    },
    {
      title: 'Interactive Quiz App',
      description: 'Built in React Native with multiple question types.',
      link: 'https://github.com/xiarune/quiz-app.git',
      image: quizImg,
    },
    {
      title: 'Film Showcase',
      description: 'Personal short and feature length films.',
      link: 'https://xiarune.github.io/clark-studio-films/',
      image: filmImg,
    },
    {
      title: 'Animation',
      description: 'Animations ranging from stop motion to 2D.',
      link: 'https://youtu.be/yKsEm43xkSY?si=ebJelJzVLHPlP1OJ',
      image: animImg,
    },
    {
      title: 'NOVA: UI Design with Figma',
      description: 'Custom-built Figma prototype for a mobile application.',
      link: 'https://www.figma.com/proto/pvEbgihg6WgiIZUZietXkV/Nova?node-id=77-146&t=fGSTFnieci0WZUDY-1',
      image: novaImg,
    },
    {
      title: 'Personal Literature',
      description: 'Lore-based driven storytelling with poetic prose.',
      link: 'https://xiarune.github.io/finding-celestia/',
      image: litImg,
    },
  ];

  return (
    <Wrapper>
      <Overlay />
      <Content>
        <Title id="projects-title">My Projects</Title>
        <Description>Here are some of the things I've built recently.</Description>

        <Grid>
          {projectData.map((project, index) => {
            const isExternal = project.link?.startsWith('http');

            const cardContent = (
              <Card>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.image && (
                  <ProjectImage
                    src={project.image}
                    alt={`${project.title} preview`}
                  />
                )}
              </Card>
            );

            return project.link ? (
              <CardLink
                key={index}
                href={project.link}
                target={isExternal ? '_blank' : '_self'}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {cardContent}
              </CardLink>
            ) : (
              <div key={index}>{cardContent}</div>
            );
          })}
        </Grid>
      </Content>
    </Wrapper>
  );
}
