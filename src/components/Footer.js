// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #111;
  color: #ccc;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.span``;

export default function Footer() {
  return (
    <FooterWrapper>
      <Copyright>
        &copy; {new Date().getFullYear()} Caroline Clark. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
}
