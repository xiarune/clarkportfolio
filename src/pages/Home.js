// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/images/background-home-2.jpg';

const HomeWrapper = styled.section.attrs({
  'aria-labelledby': 'home-title',
})`
  background-image: url(${backgroundImage});
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-align: center;
  max-width: 700px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  letter-spacing: 0.03em;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const LeadText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const ActionsBox = styled.nav.attrs({
  'aria-label': 'Highlighted sections',
})`
  background: #ffffffcc;
  color: #111;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  margin: 0 auto;
  max-width: 480px;
  text-align: left;
`;

const ActionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
`;

const ActionItem = styled.li``;

const ActionLink = styled(Link)`
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  font-weight: 500;
  color: #145aaf;
  text-decoration: none;
  padding: 0.65rem 0.8rem;
  border-radius: 8px;
  border: 1px solid #145aaf;
  background: #ffffffee;
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    color: #4b89d4;
    border-color: #4b89d4;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
`;

const ActionLabel = styled.span`
  font-weight: 600;
`;

const ActionDetail = styled.span`
  font-weight: 400;
  margin-left: 0.25rem;
  font-size: 0.95rem;
`;

export default function Home() {
  return (
    <HomeWrapper>
      <Overlay />
      <Content>
        <Title id="home-title">Welcome to My Portfolio</Title>

        <Paragraph>
          Hello! I’m Sage, a digital creative blending logic, storytelling, and
          code.
        </Paragraph>

        <LeadText>From here, you can jump straight to:</LeadText>

        <ActionsBox>
          <ActionList>
            <ActionItem>
              <ActionLink to="/projects">
                <ActionLabel>Explore my work</ActionLabel>
                <ActionDetail>within Projects.</ActionDetail>
              </ActionLink>
            </ActionItem>

            <ActionItem>
              <ActionLink to="/about">
                <ActionLabel>Learn more about me</ActionLabel>
                <ActionDetail>on within About.</ActionDetail>
              </ActionLink>
            </ActionItem>

            <ActionItem>
              <ActionLink to="/contact">
                <ActionLabel>Get in touch</ActionLabel>
                <ActionDetail>through the Contacts.</ActionDetail>
              </ActionLink>
            </ActionItem>
          </ActionList>
        </ActionsBox>
      </Content>
    </HomeWrapper>
  );
}





