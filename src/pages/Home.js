// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Home assets
import homepageImage from '../assets/images/homepage_image.png';
import frameImage from '../assets/images/outline.png';
import backgroundHome from '../assets/images/background-home.jpg';

// About assets
import profileImg from '../assets/images/profile.png';
import pegasusImg from '../assets/images/PegasusEtching.png';
import ucfTabImg from '../assets/images/UCF_Tab.png';
import backgroundAbout from '../assets/images/background-about.jpg';

// Experience assets
import experienceImg from '../assets/images/LM_Logo.png';
import backgroundExperience from '../assets/images/background-experience.jpg';

// Projects assets
import backgroundProjects from '../assets/images/background-projects.jpg';
import quizImg from '../assets/images/projects/quiz-app.png';
import filmImg from '../assets/images/projects/film.png';
import animImg from '../assets/images/projects/animation.png';
import novaImg from '../assets/images/projects/nova.png';
import litImg from '../assets/images/projects/literature.png';
import portImg from '../assets/images/projects/sable_logo.png';

// Contact assets
import backgroundContacts from '../assets/images/background-contacts.jpg';

// Logo for sidebar
import myLogo from '../assets/images/my_logo.png';

// ============ SIDEBAR STYLES ============
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const Sidebar = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 1000;
  background: rgba(26, 20, 16, 0.95);
  border-right: 1px solid rgba(201, 162, 39, 0.3);
  padding: 2rem 1.25rem;
  backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${({ $visible }) => $visible ? slideIn : slideOut} 0.4s ease forwards;
  pointer-events: ${({ $visible }) => $visible ? 'auto' : 'none'};

  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarLogo = styled.img`
  width: 50px;
  height: auto;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(201, 162, 39, 0.3);
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
`;

const SidebarLink = styled.a`
  font-family: 'Playfair Display', serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: #f5e6c8;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #c9a227;
    background: rgba(201, 162, 39, 0.1);
  }

  &.active {
    color: #c9a227;
    background: rgba(201, 162, 39, 0.15);
    font-weight: 600;
  }

  &:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 2px;
  }
`;

// ============ HOME SECTION STYLES ============
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

const HomeOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(26, 20, 16, 0.65);
  z-index: 1;
`;

const HomeContent = styled.div`
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

const HomeTitle = styled.h1`
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

// ============ ABOUT SECTION STYLES ============
const AboutWrapper = styled.section.attrs({
  'aria-labelledby': 'about-title',
})`
  background-image: url(${backgroundAbout});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  padding: 4rem 2rem;
  position: relative;
`;

const AboutOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(26, 20, 16, 0.65);
  z-index: 1;
`;

const AboutContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 769px) {
    padding-left: 80px;
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImageWrapper = styled.div`
  flex-shrink: 0;
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px double #c9a227;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 180px;
    height: 245px;
  }
`;

const IntroText = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #f5e6c8;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.8;
  font-weight: 400;
  color: #f5e6c8;
  opacity: 0.9;
`;

const SubSectionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #f5e6c8;
  margin-bottom: 1.5rem;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(4px);
`;

const EducationCard = styled(Card)`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageStack = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
`;

const PegasusImage = styled.img`
  position: absolute;
  width: 100px;
  height: auto;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(0) invert(0.9);
  opacity: 0.9;
`;

const UCFTabImage = styled.img`
  position: absolute;
  width: 50px;
  height: auto;
  bottom: 0;
  right: 0;
  z-index: 2;
`;

const EducationText = styled.div`
  flex: 1;
`;

const University = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #c9a227;
`;

const Degree = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: #f5e6c8;
  margin: 0.25rem 0;
`;

const EducationDetails = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #f5e6c8;
  opacity: 0.7;
  margin: 0.25rem 0;
`;

const SkillsSection = styled.div`
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
`;

const SkillCategory = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #c9a227;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #f5e6c8;
  padding: 0.35rem 0;
  opacity: 0.85;

  &::before {
    content: '~';
    margin-right: 0.6rem;
    color: #f5e6c8;
  }
`;

// ============ EXPERIENCE SECTION STYLES ============
const ExperienceWrapper = styled.section.attrs({
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

const ExperienceOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(26, 20, 16, 0.65);
  z-index: 1;
`;

const ExperienceContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 769px) {
    padding-left: 80px;
  }
`;

const ExperienceTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 700;
  color: #f5e6c8;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const ExperienceCard = styled.div`
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  border-radius: 12px;
  padding: 2.5rem;
  backdrop-filter: blur(4px);
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  color: #f5e6c8;
`;

const CompanyName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #c9a227;
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f5e6c8;
  margin-bottom: 0.25rem;
`;

const Duration = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #f5e6c8;
  opacity: 0.7;
  margin-bottom: 1.5rem;
`;

const SectionLabel = styled.h5`
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  color: #c9a227;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;

  &:first-of-type {
    margin-top: 0;
  }
`;

const ResponsibilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResponsibilityItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: #f5e6c8;
  padding: 0.3rem 0;
  opacity: 0.85;

  &::before {
    content: '~';
    margin-right: 0.6rem;
    color: #f5e6c8;
  }
`;

const ExpSkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const SkillTag = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  color: #f5e6c8;
  background: rgba(139, 26, 26, 0.3);
  border: 1px solid rgba(139, 26, 26, 0.5);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
`;

const ImageBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
    justify-content: center;
  }
`;

const CompanyImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: contain;
`;

const ResumeButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #f5e6c8;
  background: rgba(139, 26, 26, 0.4);
  border: 1px solid #c9a227;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: rgba(139, 26, 26, 0.6);
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 3px;
  }
`;

// ============ PROJECTS SECTION STYLES ============
const ProjectsWrapper = styled.section.attrs({
  'aria-labelledby': 'projects-title',
})`
  background-image: url(${backgroundProjects});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(26, 20, 16, 0.65);
  z-index: 1;
`;

const ProjectsContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;

  @media (min-width: 769px) {
    padding-left: 80px;
  }
`;

const ProjectsTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  color: #f5e6c8;
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-align: center;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const ProjectsDescription = styled.p`
  font-family: 'Inter', sans-serif;
  color: #f5e6c8;
  font-size: 1.1rem;
  margin-bottom: 3rem;
  text-align: center;
  opacity: 0.85;
`;

const ProjectsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  max-width: 1100px;
  margin: 0 auto;
  align-items: stretch;
`;

const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;

  &:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 3px;
    border-radius: 12px;
  }
`;

const ProjectCard = styled.div`
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  padding: 2rem 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  transition: transform 0.3s ease, border-color 0.3s ease;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 280px;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(201, 162, 39, 0.6);
  }
`;

const ProjectTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  margin-top: 0;
  font-size: 1.25rem;
  color: #c9a227;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #f5e6c8;
  opacity: 0.85;
  flex-grow: 1;
`;

const ProjectImage = styled.img`
  margin-top: auto;
  padding-top: 1rem;
  width: 140px;
  height: auto;
  object-fit: contain;
  align-self: center;
  opacity: 0.9;
`;

// ============ CONTACT SECTION STYLES ============
const ContactWrapper = styled.section.attrs({
  'aria-labelledby': 'contact-title',
})`
  background-image: url(${backgroundContacts});
  background-size: cover;
  background-position: center;
  min-height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
`;

const ContactOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(26, 20, 16, 0.65);
  z-index: 1;
`;

const FormContainer = styled.div`
  position: relative;
  z-index: 2;
  background: rgba(245, 230, 200, 0.08);
  border: 1px solid rgba(201, 162, 39, 0.3);
  padding: 2.5rem;
  border-radius: 12px;
  backdrop-filter: blur(4px);
  width: 100%;
  max-width: 550px;

  @media (min-width: 769px) {
    margin-left: 40px;
  }
`;

const ContactTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  text-align: center;
  font-size: 2.5rem;
  color: #f5e6c8;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const SectionDivider = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background: linear-gradient(
    to bottom,
    rgba(26, 20, 16, 0.8) 0%,
    rgba(26, 20, 16, 1) 50%,
    rgba(26, 20, 16, 0.8) 100%
  );
`;

const DividerLine = styled.div`
  width: 60px;
  height: 2px;
  background: rgba(201, 162, 39, 0.5);
`;

const DividerDot = styled.div`
  width: 8px;
  height: 8px;
  background: #c9a227;
  border-radius: 50%;
  margin: 0 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  margin-bottom: 0.4rem;
  color: #c9a227;
`;

const Input = styled.input`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  background: rgba(245, 230, 200, 0.05);
  border: 1px solid ${(props) => (props.$error ? '#8b1a1a' : 'rgba(201, 162, 39, 0.4)')};
  border-radius: 8px;
  box-sizing: border-box;
  color: #f5e6c8;

  &::placeholder {
    color: rgba(245, 230, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #c9a227;
    box-shadow: 0 0 0 2px rgba(201, 162, 39, 0.3);
  }
`;

const TextArea = styled.textarea`
  font-family: 'Inter', sans-serif;
  width: 100%;
  padding: 0.85rem 1rem;
  font-size: 1rem;
  background: rgba(245, 230, 200, 0.05);
  border: 1px solid ${(props) => (props.$error ? '#8b1a1a' : 'rgba(201, 162, 39, 0.4)')};
  border-radius: 8px;
  resize: vertical;
  box-sizing: border-box;
  color: #f5e6c8;

  &::placeholder {
    color: rgba(245, 230, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-color: #c9a227;
    box-shadow: 0 0 0 2px rgba(201, 162, 39, 0.3);
  }
`;

const ErrorMsg = styled.p`
  font-family: 'Inter', sans-serif;
  color: #c94a4a;
  margin: 0.25rem 0 0;
  font-size: 0.9rem;
`;

const SuccessMsg = styled.p`
  font-family: 'Playfair Display', serif;
  color: #c9a227;
  font-size: 1.1rem;
  text-align: center;
  margin-top: 1.5rem;
`;

const SubmitButton = styled.button`
  background-color: #8b1a1a;
  color: #f5e6c8;
  border: none;
  padding: 0.9rem;
  font-size: 1rem;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: 0.05em;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 0.5rem;

  &:hover {
    background-color: #a52525;
    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 2px solid #c9a227;
    outline-offset: 3px;
  }
`;

// ============ COMPONENT ============
export default function Home() {
  // Sidebar state
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll detection for sidebar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight * 0.9; // 90vh hero section

      // Show sidebar after scrolling past hero
      setShowSidebar(scrollY > heroHeight * 0.5);

      // Determine active section
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // About data
  const skills = [
    {
      category: 'Video & Graphics',
      items: ['Adobe Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro', 'Adobe After Effects', 'Adobe Photoshop', 'Adobe Illustrator'],
    },
    {
      category: 'Coding',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git'],
    },
    {
      category: 'Professional Skills',
      items: ['Visual Communication', 'Critical Thinking', 'Systems Thinking', 'Team Management', 'Project Management', 'Technical Writing'],
    },
  ];

  // Experience data
  const responsibilities = [
    'Running Department Monthly & Weekly Newsletters',
    'Event & Personal Graphic and Video Requests',
    'File Maintenance & Cleanup',
  ];

  const expSkills = [
    'Adobe Photoshop',
    'Adobe InDesign',
    'SharePoint',
    'Technical Writing',
    'Strategic Delivery',
    'Creative Problem Solving',
  ];

  // Projects data
  const projectData = [
    {
      title: 'Sable: A Reading & Writing Audio Immersive Platform',
      description: 'Full Stack reading and writing application (MERN)',
      link: 'https://sable-two.vercel.app/',
      image: portImg,
    },
    {
      title: 'Interactive Quiz App',
      description: 'Built in React Native with multiple question types.',
      link: 'https://github.com/xiarune/quiz-app.git',
      image: quizImg,
    },
    {
      title: 'Film Showcase',
      description: 'Personal short and feature length films.',
      link: 'https://xiarune.github.io/clark-studio-films/',
      image: filmImg,
    },
    {
      title: 'Animation',
      description: 'Animations ranging from stop motion to 2D.',
      link: 'https://youtu.be/yKsEm43xkSY?si=ebJelJzVLHPlP1OJ',
      image: animImg,
    },
    {
      title: 'NOVA: UI Design with Figma',
      description: 'Custom-built Figma prototype for a mobile application.',
      link: 'https://www.figma.com/proto/pvEbgihg6WgiIZUZietXkV/Nova?node-id=77-146&t=fGSTFnieci0WZUDY-1',
      image: novaImg,
    },
    {
      title: 'Personal Literature',
      description: 'Lore-based driven storytelling with poetic prose.',
      link: 'https://xiarune.github.io/finding-celestia/',
      image: litImg,
    },
  ];

  // Contact form handlers
  const validateField = (name, value, context) => {
    const trimmed = value.trim();
    const isSubmit = context === 'submit';

    if (name === 'name') {
      if (isSubmit && !trimmed) return 'Name is required.';
      return '';
    }

    if (name === 'email') {
      if (isSubmit && !trimmed) return 'Email is required.';
      if (trimmed && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
        return 'Please enter a valid email address.';
      }
      return '';
    }

    if (name === 'phone') {
      if (!trimmed) return '';
      const digitsOnly = trimmed.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 20) {
        return 'Please enter a valid phone number.';
      }
      return '';
    }

    if (name === 'message') {
      if (isSubmit && !trimmed) return 'Message is required.';
      return '';
    }

    return '';
  };

  const validate = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([fieldName, value]) => {
      const error = validateField(fieldName, value, 'submit');
      if (error) newErrors[fieldName] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setSubmitted(false);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value, 'blur');
    setErrors((prev) => ({ ...prev, [name]: error || '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setSubmitted(true);
  };

  return (
    <>
      {/* SIDEBAR NAVIGATION */}
      <Sidebar $visible={showSidebar} aria-label="Section navigation">
        <SidebarLogo
          src={myLogo}
          alt="Logo"
          onClick={(e) => scrollToSection(e, 'home')}
        />
        <SidebarLinks>
          <SidebarLink
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </SidebarLink>
          <SidebarLink
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className={activeSection === 'about' ? 'active' : ''}
          >
            About
          </SidebarLink>
          <SidebarLink
            href="#experience"
            onClick={(e) => scrollToSection(e, 'experience')}
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </SidebarLink>
          <SidebarLink
            href="#projects"
            onClick={(e) => scrollToSection(e, 'projects')}
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </SidebarLink>
        </SidebarLinks>
      </Sidebar>

      {/* HOME SECTION */}
      <HomeWrapper id="home">
        <HomeOverlay />
        <HomeContent>
          <ArtworkContainer>
            <ArtworkImage src={homepageImage} alt="Featured artwork" />
            <FrameOverlay src={frameImage} alt="" aria-hidden="true" />
            <TextOverlay>
              <HomeTitle id="home-title">Caroline Clark</HomeTitle>
              <Tagline>Digital Artisan</Tagline>
            </TextOverlay>
          </ArtworkContainer>
        </HomeContent>
      </HomeWrapper>

      {/* SECTION DIVIDER */}
      <SectionDivider>
        <DividerLine />
        <DividerDot />
        <DividerLine />
      </SectionDivider>

      {/* ABOUT SECTION */}
      <AboutWrapper id="about">
        <AboutOverlay />
        <AboutContent>
          <HeroSection>
            <ProfileImageWrapper>
              <ProfileImage src={profileImg} alt="Caroline Clark" />
            </ProfileImageWrapper>
            <IntroText>
              <SectionTitle id="about-title">About Me</SectionTitle>
              <Paragraph>
                I'm a multidisciplinary designer and developer with a passion for creating
                thoughtful, aesthetic, and impactful digital experiences. My work blends
                design, storytelling, and technology to build things that resonate deeply.
              </Paragraph>
            </IntroText>
          </HeroSection>

          <TwoColumnLayout>
            <div>
              <SubSectionTitle id="education-title">Education</SubSectionTitle>
              <EducationCard aria-labelledby="education-title">
                <ImageStack aria-hidden="true">
                  <PegasusImage src={pegasusImg} alt="" />
                  <UCFTabImage src={ucfTabImg} alt="" />
                </ImageStack>
                <EducationText>
                  <University>University of Central Florida</University>
                  <Degree>Bachelor of Arts in Digital Media</Degree>
                  <EducationDetails>May 2026 | GPA: 3.75</EducationDetails>
                </EducationText>
              </EducationCard>
            </div>

            <div>
              <SubSectionTitle>At a Glance</SubSectionTitle>
              <Card>
                <SkillCategory>Quick Facts</SkillCategory>
                <SkillList>
                  <SkillItem>Based in Orlando, FL</SkillItem>
                  <SkillItem>Available for freelance</SkillItem>
                  <SkillItem>Passionate about film and storytelling</SkillItem>
                </SkillList>
              </Card>
            </div>
          </TwoColumnLayout>

          <SkillsSection aria-labelledby="skills-title">
            <SubSectionTitle id="skills-title">Skills</SubSectionTitle>
            <SkillsGrid>
              {skills.map((skillGroup, index) => (
                <Card key={index}>
                  <SkillCategory>{skillGroup.category}</SkillCategory>
                  <SkillList>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <SkillItem key={skillIndex}>{skill}</SkillItem>
                    ))}
                  </SkillList>
                </Card>
              ))}
            </SkillsGrid>
          </SkillsSection>
        </AboutContent>
      </AboutWrapper>

      {/* SECTION DIVIDER */}
      <SectionDivider>
        <DividerLine />
        <DividerDot />
        <DividerLine />
      </SectionDivider>

      {/* EXPERIENCE SECTION */}
      <ExperienceWrapper id="experience">
        <ExperienceOverlay />
        <ExperienceContent>
          <ExperienceTitle id="experience-title">Experience</ExperienceTitle>

          <ExperienceCard>
            <TextBlock>
              <CompanyName>Lockheed Martin</CompanyName>
              <Role>System Engineering CWEP</Role>
              <Duration>April 2024 - May 2026 (2 Years)</Duration>

              <SectionLabel>Responsibilities</SectionLabel>
              <ResponsibilitiesList>
                {responsibilities.map((item, index) => (
                  <ResponsibilityItem key={index}>{item}</ResponsibilityItem>
                ))}
              </ResponsibilitiesList>

              <SectionLabel>Skills Developed</SectionLabel>
              <ExpSkillsGrid>
                {expSkills.map((skill, index) => (
                  <SkillTag key={index}>{skill}</SkillTag>
                ))}
              </ExpSkillsGrid>

              <ResumeButton
                href={`${process.env.PUBLIC_URL}/Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </ResumeButton>
            </TextBlock>

            <ImageBlock>
              <CompanyImage src={experienceImg} alt="Lockheed Martin logo" />
            </ImageBlock>
          </ExperienceCard>
        </ExperienceContent>
      </ExperienceWrapper>

      {/* SECTION DIVIDER */}
      <SectionDivider>
        <DividerLine />
        <DividerDot />
        <DividerLine />
      </SectionDivider>

      {/* PROJECTS SECTION */}
      <ProjectsWrapper id="projects">
        <ProjectsOverlay />
        <ProjectsContent>
          <ProjectsTitle id="projects-title">My Projects</ProjectsTitle>
          <ProjectsDescription>Here are some of the things I've built recently.</ProjectsDescription>

          <ProjectsGrid>
            {projectData.map((project, index) => {
              const isExternal = project.link?.startsWith('http');

              const cardContent = (
                <ProjectCard>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  {project.image && (
                    <ProjectImage
                      src={project.image}
                      alt={`${project.title} preview`}
                    />
                  )}
                </ProjectCard>
              );

              return project.link ? (
                <CardLink
                  key={index}
                  href={project.link}
                  target={isExternal ? '_blank' : '_self'}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {cardContent}
                </CardLink>
              ) : (
                <div key={index}>{cardContent}</div>
              );
            })}
          </ProjectsGrid>
        </ProjectsContent>
      </ProjectsWrapper>

      {/* SECTION DIVIDER */}
      <SectionDivider>
        <DividerLine />
        <DividerDot />
        <DividerLine />
      </SectionDivider>

      {/* CONTACT SECTION */}
      <ContactWrapper id="contact">
        <ContactOverlay />
        <FormContainer>
          <ContactTitle id="contact-title">Let's Get In Touch</ContactTitle>

          <StyledForm onSubmit={handleSubmit} noValidate>
            <FieldGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                $error={errors.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                autoComplete="name"
              />
              {errors.name && (
                <ErrorMsg id="name-error" role="alert">
                  {errors.name}
                </ErrorMsg>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                $error={errors.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <ErrorMsg id="email-error" role="alert">
                  {errors.email}
                </ErrorMsg>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input
                id="phone"
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                $error={errors.phone}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'phone-error' : undefined}
                autoComplete="tel"
              />
              {errors.phone && (
                <ErrorMsg id="phone-error" role="alert">
                  {errors.phone}
                </ErrorMsg>
              )}
            </FieldGroup>

            <FieldGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                rows="6"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                $error={errors.message}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <ErrorMsg id="message-error" role="alert">
                  {errors.message}
                </ErrorMsg>
              )}
            </FieldGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </StyledForm>

          {submitted && (
            <SuccessMsg role="status" aria-live="polite">
              Your message was sent successfully!
            </SuccessMsg>
          )}
        </FormContainer>
      </ContactWrapper>
    </>
  );
}
