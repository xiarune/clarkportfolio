// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import backgroundAbout from '../assets/images/background-about.jpg';
import pegasusImg from '../assets/images/PegasusEtching.png';
import ucfTabImg from '../assets/images/UCF_Tab.png';

const AboutWrapper = styled.section.attrs({
  'aria-labelledby': 'about-title',
})`
  background-image: url(${backgroundAbout});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 1000px;
  margin: 0 auto;
`;

const IntroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
  max-width: 700px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const SkillsSection = styled.div`
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const SkillCategory = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #333;
  padding: 0.3rem 0;

  &::before {
    content: '•';
    margin-right: 0.5rem;
    color: #666;
  }
`;

const EducationSection = styled.div`
  margin-bottom: 2rem;
`;

const EducationCard = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const EducationText = styled.div`
  flex: 1;
`;

const ImageStack = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  flex-shrink: 0;

  @media (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`;

const PegasusImage = styled.img`
  position: absolute;
  width: 120px;
  height: auto;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

const UCFTabImage = styled.img`
  position: absolute;
  width: 55px;
  height: auto;
  bottom: 0;
  right: 0;
  z-index: 2;

  @media (max-width: 600px) {
    width: 45px;
  }
`;

const University = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111;
`;

const Degree = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #333;
  margin: 0.25rem 0;
`;

const EducationDetails = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #666;
  margin: 0.25rem 0;
`;

export default function About() {
  const skills = [
    {
      category: 'Video Editing',
      items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro', 'Adobe After Effects'],
    },
    {
      category: 'Image & Graphics',
      items: ['Adobe Photoshop', 'Adobe Illustrator'],
    },
    {
      category: 'Professional Skills',
      items: ['Visual Communication', 'Critical Thinking', 'Analytical Thinking', 'Team Management', 'Project Management', 'Technical Writing'],
    },
  ];

  return (
    <AboutWrapper>
      <Overlay />
      <Content>
        <IntroSection>
          <Title id="about-title">About Me</Title>
          <Paragraph>
            I'm a multidisciplinary designer and developer with a passion for creating
            thoughtful, aesthetic, and impactful digital experiences. My work blends
            design, storytelling, and technology to build things that resonate deeply.
          </Paragraph>
        </IntroSection>

        <EducationSection aria-labelledby="education-title">
          <SectionTitle id="education-title">Education</SectionTitle>
          <EducationCard>
            <ImageStack aria-hidden="true">
              <PegasusImage src={pegasusImg} alt="" />
              <UCFTabImage src={ucfTabImg} alt="" />
            </ImageStack>
            <EducationText>
              <University>University of Central Florida</University>
              <Degree>Bachelor of Arts in Web Design</Degree>
              <EducationDetails>Expected May 2026 | GPA: 3.75</EducationDetails>
            </EducationText>
          </EducationCard>
        </EducationSection>

        <SkillsSection aria-labelledby="skills-title">
          <SectionTitle id="skills-title">Skills</SectionTitle>
          <SkillsGrid>
            {skills.map((skillGroup, index) => (
              <SkillCard key={index}>
                <SkillCategory>{skillGroup.category}</SkillCategory>
                <SkillList>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <SkillItem key={skillIndex}>{skill}</SkillItem>
                  ))}
                </SkillList>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </Content>
    </AboutWrapper>
  );
}



