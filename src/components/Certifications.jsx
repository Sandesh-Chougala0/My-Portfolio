import { Award, Trophy, ExternalLink, ShieldCheck } from 'lucide-react';
import './Certifications.css';

const certificationsData = [
  {
    id: 1,
    title: '1st Prize - Project Exhibition',
    issuer: 'TECHNOVISION-25 @ Hirasugar Institute of Technology',
    period: '2025',
    type: 'award',
    icon: <Trophy size={24} style={{ color: '#f59e0b' }} />,
    description: 'Secured First Prize in the state-level Project Exhibition competition for building an innovative, full-stack software application solving real-world challenges.',
    tags: ['Full Stack Development', 'Software Innovation', 'Pitch & Presentation'],
    verifyUrl: 'https://github.com/Sandesh-Chougala0'
  },
  {
    id: 2,
    title: 'CODE BHARAT 2025 Hackathon',
    issuer: 'Savishkar Karnataka North @ IIIT Dharwad',
    period: '2025',
    type: 'hackathon',
    icon: <Award size={24} style={{ color: '#06b6d4' }} />,
    description: 'Selected and competed in the 48-hour intensive Code Bharat Hackathon at Indian Institute of Information Technology (IIIT) Dharwad, prototyping web software under tight deadlines.',
    tags: ['React', 'Node.js', 'Rapid API Design', 'Team Collaboration'],
    verifyUrl: 'https://github.com/Sandesh-Chougala0'
  },
  {
    id: 3,
    title: 'Meta Front-End Developer',
    issuer: 'Meta / Coursera',
    period: '2024',
    type: 'certificate',
    icon: <ShieldCheck size={24} style={{ color: '#818cf8' }} />,
    description: 'Comprehensive industry certification mastering modern client-side development: React component trees, state hooks, responsive styling, accessibility, and automated test coverage.',
    tags: ['React.js', 'JavaScript ES6', 'UI/UX Design', 'Version Control'],
    verifyUrl: 'https://github.com/Sandesh-Chougala0'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section section-py">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} />
            05 // Honors
          </span>
          <h2 className="section-title">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle">
            Formal recognitions, hackathon competitions, and validated technical certifications.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Cards Grid */}
        <div className="certifications-grid">
          {certificationsData.map((cert) => (
            <div key={cert.id} className="cert-card">
              <span className="cert-badge-ribbon">{cert.period}</span>

              <div className="cert-icon-box">
                {cert.icon}
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <h4 className="cert-issuer">{cert.issuer}</h4>

              <p className="cert-desc">{cert.description}</p>

              <div className="cert-tags">
                {cert.tags.map((tag, idx) => (
                  <span key={idx} className="cert-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <a 
                href={cert.verifyUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="cert-verify-link"
              >
                <span>View Credential Details</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
