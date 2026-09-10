import { 
  CheckCircle2, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Compass, 
  Sparkles,
  Award
} from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    { number: '10+', label: 'Projects Completed', color: 'gradient-text' },
    { number: '3+', label: 'Certifications Earned', color: 'gradient-text-cyan' },
    { number: '2', label: 'Hackathons Joined', color: 'gradient-text' },
    { number: '3.8', label: 'Academic GPA', color: 'gradient-text-cyan' }
  ];

  const pillars = [
    {
      title: 'Full-Stack Engineering',
      desc: 'Building scalable web applications from responsive frontends to structured backends and databases.'
    },
    {
      title: 'Performance & Optimization',
      desc: 'Obsessed with fast load speeds, clean modular code, minimal re-renders, and responsive layouts.'
    },
    {
      title: 'Problem-Solving & Data Structures',
      desc: 'Applying computational thinking and algorithmic problem-solving to design efficient solutions.'
    }
  ];

  return (
    <section id="about" className="about-section section-py">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} />
            01 // About Me
          </span>
          <h2 className="section-title">
            Passionate about transforming ideas into <span className="gradient-text">reality</span>.
          </h2>
          <p className="section-subtitle">
            A developer who bridges engineering rigor with human-centric interfaces.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* 2-Column Content */}
        <div className="about-grid">
          {/* Left: Bio Narrative */}
          <div className="about-narrative">
            <p className="about-paragraph">
              Hello! I&apos;m <strong style={{ color: '#ffffff' }}>Sandesh Chougala</strong>, a Computer Science student and software developer with a deep enthusiasm for the web. My journey began with an insatiable curiosity about how software powers our daily lives, which quickly evolved into building full-featured web applications.
            </p>

            <p className="about-paragraph">
              I specialize in the modern JavaScript &amp; React ecosystem. Whether it&apos;s crafting silky smooth user interfaces with custom CSS and component architecture, or architecting backend services and REST APIs, I take pride in writing clean, readable, and robust code.
            </p>

            <div className="about-highlight-box">
              <div className="about-highlight-title">
                <Sparkles size={18} style={{ color: '#818cf8' }} />
                <span>My Goal</span>
              </div>
              <p className="about-highlight-text">
                To collaborate with visionary teams, contribute to impactful software products, and continuously level up my skills across full-stack engineering and cloud architecture.
              </p>
            </div>

            {/* Quick Facts List */}
            <div className="about-facts-list">
              <div className="fact-item">
                <div className="fact-icon-wrap">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <span className="fact-label">Education</span>
                  <span className="fact-value">B.E. in Computer Science</span>
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-icon-wrap">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="fact-label">Location</span>
                  <span className="fact-value">Belagavi, India</span>
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-icon-wrap">
                  <Briefcase size={20} />
                </div>
                <div>
                  <span className="fact-label">Status</span>
                  <span className="fact-value">Open to Work / Intern</span>
                </div>
              </div>

              <div className="fact-item">
                <div className="fact-icon-wrap">
                  <Code size={20} />
                </div>
                <div>
                  <span className="fact-label">Primary Stack</span>
                  <span className="fact-value">React, JS, Node, SQL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Metrics & Engineering Pillars */}
          <div className="about-stats-column">
            {/* Stat Counters */}
            <div className="stats-grid">
              {stats.map((item, idx) => (
                <div key={idx} className="glass-card stat-card glass-card-hover">
                  <span className={`stat-number ${item.color}`}>{item.number}</span>
                  <span className="stat-label">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="values-container">
              <h3 className="values-heading">
                <Award size={18} style={{ color: '#06b6d4' }} />
                <span>What I Bring to the Table</span>
              </h3>
              <div className="values-list">
                {pillars.map((pillar, idx) => (
                  <div key={idx} className="value-pill">
                    <CheckCircle2 size={18} className="value-pill-icon" />
                    <div>
                      <strong style={{ color: '#ffffff', display: 'block', fontSize: '0.925rem' }}>
                        {pillar.title}
                      </strong>
                      <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                        {pillar.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
