// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/images/profile.png';
import pegasusImg from '../assets/images/PegasusEtching.png';
import ucfTabImg from '../assets/images/UCF_Tab.png';
import backgroundAbout from '../assets/images/background-about.jpg';

const AboutWrapper = styled.section.attrs({
  'aria-labelledby': 'about-title',
})`
  background-image: url(${backgroundAbout});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
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
  max-width: 1000px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px double #c9a227;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 180px;
    height: 245px;
  }
`;

const IntroText = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #f5e6c8;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
  color: #f5e6c8;
  opacity: 0.9;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #f5e6c8;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(4px);
`;

const EducationCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageStack = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
`;

const PegasusImage = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(0) invert(0.9);
  opacity: 0.9;
`;

const UCFTabImage = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

const EducationText = styled.div`
  flex: 1;
`;

const University = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #c9a227;
`;

const Degree = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #f5e6c8;
  margin: 0.25rem 0;
`;

const EducationDetails = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #f5e6c8;
  opacity: 0.7;
  margin: 0.25rem 0;
`;

const SkillsSection = styled.div`
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(Card)``;

const SkillCategory = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #c9a227;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #f5e6c8;
  padding: 0.35rem 0;
  opacity: 0.85;

  &::before {
    content: '~';
    margin-right: 0.6rem;
    color: #f5e6c8;
  }
`;

export default function About() {
  const skills = [
    {
      category: 'Video & Graphics',
      items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro', 'Adobe After Effects', 'Adobe Photoshop', 'Adobe Illustrator'],
    },
    {
      category: 'Coding',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'],
    },
    {
      category: 'Professional Skills',
      items: ['Visual Communication', 'Critical Thinking', 'Systems Thinking', 'Team Management', 'Project Management', 'Technical Writing'],
    },
  ];

  return (
    <AboutWrapper>
      <Overlay />
      <Content>
        <HeroSection>
          <ProfileImageWrapper>
            <ProfileImage src={profileImg} alt="Caroline Clark" />
          </ProfileImageWrapper>
          <IntroText>
            <Title id="about-title">About Me</Title>
            <Paragraph>
              I'm a multidisciplinary designer and developer with a passion for creating
              thoughtful, aesthetic, and impactful digital experiences. My work blends
              design, storytelling, and technology to build things that resonate deeply.
            </Paragraph>
          </IntroText>
        </HeroSection>

        <TwoColumnLayout>
          <div>
            <SectionTitle id="education-title">Education</SectionTitle>
            <EducationCard aria-labelledby="education-title">
              <ImageStack aria-hidden="true">
                <PegasusImage src={pegasusImg} alt="" />
                <UCFTabImage src={ucfTabImg} alt="" />
              </ImageStack>
              <EducationText>
                <University>University of Central Florida</University>
                <Degree>Bachelor of Arts in Digital Media</Degree>
                <EducationDetails>May 2026 | GPA: 3.75</EducationDetails>
              </EducationText>
            </EducationCard>
          </div>

          <div>
            <SectionTitle>At a Glance</SectionTitle>
            <Card>
              <SkillCategory>Quick Facts</SkillCategory>
              <SkillList>
                <SkillItem>Based in Orlando, FL</SkillItem>
                <SkillItem>Available for freelance</SkillItem>
                <SkillItem>Passionate about film and storytelling</SkillItem>
              </SkillList>
            </Card>
          </div>
        </TwoColumnLayout>

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
