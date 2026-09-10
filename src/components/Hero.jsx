import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Code2, 
  Cpu, 
  Sparkles 
} from 'lucide-react';
import profileImage from '../assets/profile.jpg';
import './Hero.css';

const roles = [
  'Full Stack Developer',
  'React & UI Specialist',
  'CS Engineering Student',
  'Clean Code Advocate'
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Details */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot-ping"></span>
              <span>Available for Summer Internships &amp; Roles</span>
            </div>

            <h1 className="hero-title">
              Crafting modern digital <br />
              <span className="gradient-text">web experiences.</span>
            </h1>

            <div className="hero-subtitle">
              <span>I&apos;m Sandesh Chougala —</span>
              <span 
                className="role-highlight" 
                style={{ 
                  opacity: fadeState ? 1 : 0, 
                  transform: fadeState ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.3s ease, transform 0.3s ease' 
                }}
              >
                {roles[currentRoleIndex]}
              </span>
            </div>

            <p className="hero-description">
              Passionate computer science student specialized in designing and building high-performance, accessible, and responsive web applications with modern React, JavaScript, and scalable backend services.
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Contact Me</span>
              </a>

              <a 
                href="/resume.pdf" 
                download 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary"
                title="Download Sandesh Chougala Resume"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>

            <div className="hero-socials">
              <a 
                href="https://github.com/Sandesh-Chougala0" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sandeshchougala" 
                target="_blank" 
                rel="noreferrer" 
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:sandeshchougala205@gmail.com" 
                className="social-link"
                aria-label="Send an Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Photo & Floating Badges */}
          <div className="hero-visual">
            <div className="photo-glow-outer"></div>

            <div className="photo-wrapper">
              <div className="photo-inner">
                <img 
                  src={profileImage} 
                  alt="Sandesh Chougala" 
                  className="photo-img" 
                />
              </div>
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-top-left">
              <div className="badge-icon" style={{ background: 'rgba(6, 182, 212, 0.15)', color: '#22d3ee' }}>
                <Code2 size={20} />
              </div>
              <div>
                <span className="badge-text-title">React &amp; Frontend</span>
                <span className="badge-text-subtitle">Pixel-Perfect UI</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-right">
              <div className="badge-icon" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}>
                <Cpu size={20} />
              </div>
              <div>
                <span className="badge-text-title">CS Engineering</span>
                <span className="badge-text-subtitle">Core Algorithms</span>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left">
              <div className="badge-icon" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                <Sparkles size={18} />
              </div>
              <div>
                <span className="badge-text-title">Full Stack Ready</span>
                <span className="badge-text-subtitle">MERN &amp; APIs</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
