// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Nav = styled.nav.attrs({
  'aria-label': 'Main navigation',
})`
  width: 100%;
  background: #ffffffcc;
  backdrop-filter: blur(8px);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 1.7rem;
  letter-spacing: 0.04em;
  color: #111;
  text-decoration: none;
  padding: 0.25rem 0;

  &:hover {
    color: #000;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
    border-radius: 3px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 640px) {
    gap: 1rem;
    font-size: 0.9rem;
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  color: #111;
  text-decoration: none;
  transition: color 0.3s ease, font-size 0.2s ease;
  padding: 0.25rem 0;

  &:hover {
    color: #555;
  }

  &.active {
    font-weight: 700;
    color: #145aaf;
    font-size: 1.1rem;
  }

  &.active:hover {
    color: #4b89d4;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
    border-radius: 3px;
  }
`;

export default function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <NavInner>
        <LogoLink to="/">Caroline Clark</LogoLink>

        <NavLinks>
          <StyledLink
            to="/"
            className={location.pathname === '/' ? 'active' : undefined}
          >
            Home
          </StyledLink>

          <StyledLink
            to="/about"
            className={location.pathname === '/about' ? 'active' : undefined}
          >
            About
          </StyledLink>

          <StyledLink
            to="/experience"
            className={
              location.pathname === '/experience' ? 'active' : undefined
            }
          >
            Experience
          </StyledLink>

          <StyledLink
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : undefined}
          >
            Projects
          </StyledLink>

          <StyledLink
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : undefined}
          >
            Contact
          </StyledLink>
        </NavLinks>
      </NavInner>
    </Nav>
  );
}



