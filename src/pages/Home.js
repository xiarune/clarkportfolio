// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import homepageImage from '../assets/images/homepage_image.png';
import frameImage from '../assets/images/outline.png';
import backgroundHome from '../assets/images/background-home.jpg';

const HomeWrapper = styled.section.attrs({
  'aria-labelledby': 'home-title',
})`
  background-image: url(${backgroundHome});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  text-align: center;
  max-width: 900px;
  padding: 2rem;
`;

const ArtworkContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ArtworkImage = styled.img`
  max-width: 700px;
  width: 90vw;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  border: 5px double rgba(201, 162, 39, 0.5);

  @media (max-width: 640px) {
    max-width: 95vw;
  }
`;

const FrameOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  pointer-events: none;
  z-index: 3;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
`;

const Title = styled.h1`
  font-family: 'Jane Austen', cursive;
  font-size: 5rem;
  font-weight: normal;
  color: #f5e6c8;
  letter-spacing: 0.02em;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

  @media (max-width: 640px) {
    font-size: 3rem;
  }
`;

const Tagline = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 400;
  font-style: italic;
  color: #f5e6c8;
  letter-spacing: 0.08em;
  margin: 0;
  opacity: 0.9;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);

  @media (max-width: 640px) {
    font-size: 1.1rem;
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Overlay />
      <Content>
        <ArtworkContainer>
          <ArtworkImage src={homepageImage} alt="Featured artwork" />
          <FrameOverlay src={frameImage} alt="" aria-hidden="true" />
          <TextOverlay>
            <Title id="home-title">Caroline Clark</Title>
            <Tagline>Digital Artisan</Tagline>
          </TextOverlay>
        </ArtworkContainer>
      </Content>
    </HomeWrapper>
  );
}
