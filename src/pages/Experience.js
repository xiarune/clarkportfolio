// src/pages/Experience.js
import React from 'react';
import styled from 'styled-components';
import experienceImg from '../assets/images/LM_Logo.png';
import backgroundExperience from '../assets/images/background-experience.jpg';

const Wrapper = styled.section.attrs({
  'aria-labelledby': 'experience-title',
})`
  background-image: url(${backgroundExperience});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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
  max-width: 1000px;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #f5e6c8;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const ExperienceCard = styled.div`
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  border-radius: 12px;
  padding: 2.5rem;
  backdrop-filter: blur(4px);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  color: #f5e6c8;
`;

const CompanyName = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #c9a227;
  margin-bottom: 0.5rem;
`;

const Role = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f5e6c8;
  margin-bottom: 0.25rem;
`;

const Duration = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #f5e6c8;
  opacity: 0.7;
  margin-bottom: 1.5rem;
`;

const SectionLabel = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #c9a227;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResponsibilityItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #f5e6c8;
  padding: 0.3rem 0;
  opacity: 0.85;

  &::before {
    content: '~';
    margin-right: 0.6rem;
    color: #f5e6c8;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const SkillTag = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #f5e6c8;
  background: rgba(139, 26, 26, 0.3);
  border: 1px solid rgba(139, 26, 26, 0.5);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
`;

const ImageBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #f5e6c8;
  background: rgba(139, 26, 26, 0.4);
  border: 1px solid #c9a227;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(139, 26, 26, 0.6);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 3px;
  }
`;

export default function Experience() {
  const responsibilities = [
    'Running Department Monthly & Weekly Newsletters',
    'Event & Personal Graphic and Video Requests',
    'File Maintenance & Cleanup',
  ];

  const skills = [
    'Adobe Photoshop',
    'Adobe InDesign',
    'SharePoint',
    'Technical Writing',
    'Strategic Delivery',
    'Creative Problem Solving',
  ];

  return (
    <Wrapper>
      <Overlay />
      <Content>
        <Title id="experience-title">Experience</Title>

        <ExperienceCard>
          <TextBlock>
            <CompanyName>Lockheed Martin</CompanyName>
            <Role>System Engineering CWEP</Role>
            <Duration>April 2024 - May 2026 (2 Years)</Duration>

            <SectionLabel>Responsibilities</SectionLabel>
            <ResponsibilitiesList>
              {responsibilities.map((item, index) => (
                <ResponsibilityItem key={index}>{item}</ResponsibilityItem>
              ))}
            </ResponsibilitiesList>

            <SectionLabel>Skills Developed</SectionLabel>
            <SkillsGrid>
              {skills.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillsGrid>

            <ResumeButton
              href={`${process.env.PUBLIC_URL}/Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </ResumeButton>
          </TextBlock>

          <ImageBlock>
            <Image src={experienceImg} alt="Lockheed Martin logo" />
          </ImageBlock>
        </ExperienceCard>
      </Content>
    </Wrapper>
  );
}
