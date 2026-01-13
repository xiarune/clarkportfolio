// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #111;
  color: #ccc;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      &copy; {new Date().getFullYear()} Caroline Clark. All rights reserved.
    </FooterWrapper>
  );
}


