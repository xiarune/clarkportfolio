// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';
import linkedinIcon from '../assets/images/LinkedIn.png';
import emailIcon from '../assets/images/email.png';

const FooterWrapper = styled.footer`
  background: #111;
  color: #ccc;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const Copyright = styled.span``;

export default function Footer() {
  return (
    <FooterWrapper>
      <IconsContainer>
        <IconLink
          href="https://www.linkedin.com/in/caroline-clark-456bbb282"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Icon src={linkedinIcon} alt="" />
        </IconLink>
        <IconLink
          href="mailto:cecboo2@gmail.com"
          aria-label="Email"
        >
          <Icon src={emailIcon} alt="" />
        </IconLink>
      </IconsContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} Caroline Clark. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
}


