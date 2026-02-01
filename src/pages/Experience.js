// src/pages/Experience.js
import React from 'react';
import styled from 'styled-components';
import backgroundExperience from '../assets/images/background-experience.jpg';
import experienceImg from '';

// ../assets/images/LM_Logo.png ** LINK TO LOGO PIC FOR LATER

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
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TextBlock = styled.div`
  color: #fff;
  text-align: left;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 1rem;
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  font-weight: 400;
  margin: 0;
  max-width: 680px;
`;

const ImageBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 900px) {
    justify-content: flex-start;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  object-fit: contain;
`;

export default function Experience() {
  return (
    <Wrapper>
      <Overlay />
      <Content>
        <Grid>
          <TextBlock>
            <Title id="experience-title">Experience</Title>
            <Paragraph>
                1 Year & 9 Months <br></br>
                System Engineering Manager <br></br>
              Running Department Monthly & Weekly Newsletters, 
              Event & Personal Graphic and Video Requests, 
              File Maintenance & File Cleanup
              <br></br>
              <br></br>
              Learned Skills:
              - Image Editing/Adobe Photoshop
              - Adobe InDesign
              - Analytical Skills
              - Critical Evaluation
              - Strategic Delivery
              - Interpersonal Communication
              - SharePoint Experience
              - Technical Writing
              - Creative Problem Solving/Troubleshooting

        
            </Paragraph>
          </TextBlock>

          <ImageBlock>
            <Image src={experienceImg} alt="LM logo" />
          </ImageBlock>
        </Grid>
      </Content>
    </Wrapper>
  );
}



