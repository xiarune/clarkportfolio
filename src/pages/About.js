// src/pages/About.js
import React from 'react';
import styled from 'styled-components';
import backgroundAbout from '../assets/images/background-about.jpg';

const AboutWrapper = styled.section.attrs({
  'aria-labelledby': 'about-title',
})`
  background-image: url(${backgroundAbout});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 4rem 2rem;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: left;
  max-width: 700px;
  padding-left: 3rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
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
  line-height: 1.6;
  font-weight: 400;
`;

export default function About() {
  return (
    <AboutWrapper>
      <Overlay />
      <Content>
        <Title id="about-title">About Me</Title>
        <Paragraph>
          I'm a multidisciplinary designer and developer <br />
          with a passion for creating thoughtful, aesthetic, <br />
          and impactful digital experiences. My work blends design, <br />
          storytelling, and technology to build things that resonate <br />
          deeply.
        </Paragraph>
      </Content>
    </AboutWrapper>
  );
}



