import { ArrowUp, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span style={{ color: 'var(--cyan)' }}>&lt;</span>
              <span>Sandesh</span>
              <span style={{ color: 'var(--cyan)' }}>/&gt;</span>
            </a>
            <p className="footer-bio">
              Software developer &amp; Computer Science student enthusiastic about crafting high-performance, beautiful web applications.
            </p>
          </div>

          {/* Nav Links */}
          <div>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#skills" className="footer-link">Skills</a></li>
              <li><a href="#projects" className="footer-link">Projects</a></li>
              <li><a href="#experience" className="footer-link">Experience</a></li>
              <li><a href="#certifications" className="footer-link">Certifications</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href="https://github.com/Sandesh-Chougala0" 
              target="_blank" 
              rel="noreferrer" 
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/sandeshchougala" 
              target="_blank" 
              rel="noreferrer" 
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:sandeshchougala205@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <button 
              type="button" 
              onClick={scrollToTop} 
              className="back-to-top-btn"
              title="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Sandesh Chougala. All rights reserved.
          </div>

          <div className="footer-tech-note">
            <span>Built with React &amp; Custom Pure CSS</span>
            <Sparkles size={14} style={{ color: 'var(--cyan-light)' }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
