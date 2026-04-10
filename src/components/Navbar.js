// src/components/Navbar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import myLogo from '../assets/images/my_logo.png';

const Nav = styled.nav.attrs({
  'aria-label': 'Main navigation',
})`
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 640px) {
    padding: 1.75rem 1rem;
  }
`;

const LogoLink = styled(Link)`
  position: absolute;
  left: 2rem;
  z-index: 1001;

  @media (max-width: 640px) {
    left: 1rem;
  }

  &:focus-visible {
    outline: 2px solid #f5e6c8;
    outline-offset: 3px;
    border-radius: 3px;
  }
`;

const LogoImage = styled.img`
  height: 50px;
  width: auto;
  display: block;

  @media (max-width: 640px) {
    height: 40px;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  position: absolute;
  right: 2rem;

  @media (max-width: 640px) {
    right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 28px;
    height: 20px;
  }

  &:focus-visible {
    outline: 2px solid #f5e6c8;
    outline-offset: 3px;
    border-radius: 3px;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 100%;
  height: 3px;
  background-color: #f5e6c8;
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
    background: #1a1410;
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 0.75rem;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    display: ${({ $isOpen }) => $isOpen ? 'flex' : 'none'};
  }
`;

const StyledLink = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: #f5e6c8;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 0.25rem 0;
  letter-spacing: 0.02em;

  &:hover {
    color: #c9a227;
  }

  &.active {
    font-weight: 700;
    color: #c9a227;
  }

  &:focus-visible {
    outline: 2px solid #f5e6c8;
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
        <LogoLink to="/" onClick={closeMenu} aria-label="Home">
          <LogoImage src={myLogo} alt="Logo" />
        </LogoLink>

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
