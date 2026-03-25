// src/components/Navbar.js
import React, { useState } from 'react';
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
  z-index: 1001;

  &:hover {
    color: #000;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
    border-radius: 3px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
  }

  &:focus-visible {
    outline: 2px solid #111;
    outline-offset: 3px;
    border-radius: 3px;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: #111;
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(1) {
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(8.5px) rotate(45deg)' : 'none'};
  }

  &:nth-child(2) {
    opacity: ${({ $isOpen }) => $isOpen ? 0 : 1};
  }

  &:nth-child(3) {
    transform: ${({ $isOpen }) => $isOpen ? 'translateY(-8.5px) rotate(-45deg)' : 'none'};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 640px) {
    position: absolute;
    top: 100%;
    right: 1rem;
    background: #ffffff;
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <Nav>
      <NavInner>
        <LogoLink to="/" onClick={closeMenu}>Caroline Clark</LogoLink>

        <HamburgerButton
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          <HamburgerLine $isOpen={isOpen} />
          <HamburgerLine $isOpen={isOpen} />
          <HamburgerLine $isOpen={isOpen} />
        </HamburgerButton>

        <NavLinks $isOpen={isOpen}>
          <StyledLink
            to="/"
            className={location.pathname === '/' ? 'active' : undefined}
            onClick={closeMenu}
          >
            Home
          </StyledLink>

          <StyledLink
            to="/about"
            className={location.pathname === '/about' ? 'active' : undefined}
            onClick={closeMenu}
          >
            About
          </StyledLink>

          <StyledLink
            to="/experience"
            className={
              location.pathname === '/experience' ? 'active' : undefined
            }
            onClick={closeMenu}
          >
            Experience
          </StyledLink>

          <StyledLink
            to="/projects"
            className={location.pathname === '/projects' ? 'active' : undefined}
            onClick={closeMenu}
          >
            Projects
          </StyledLink>

          <StyledLink
            to="/contact"
            className={location.pathname === '/contact' ? 'active' : undefined}
            onClick={closeMenu}
          >
            Contact
          </StyledLink>
        </NavLinks>
      </NavInner>
    </Nav>
  );
}



