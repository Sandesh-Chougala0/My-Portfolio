import { Briefcase, GraduationCap, Award, Milestone } from 'lucide-react';
import './Experience.css';

const journeyItems = [
  {
    id: 1,
    role: 'Full Stack Web Developer Intern',
    organization: 'Technology Solutions & Lab',
    period: '2023 - Present',
    type: 'work',
    description: 'Spearheading the implementation of responsive React interfaces, integrating RESTful backend endpoints, and optimizing client-side performance for real-time applications.',
    skills: ['React', 'JavaScript', 'Node.js', 'REST APIs', 'Git']
  },
  {
    id: 2,
    role: 'B.E. in Computer Science & Engineering',
    organization: 'Visvesvaraya Technological University / Engineering Institute',
    period: '2021 - 2025 (Expected)',
    type: 'education',
    description: 'Maintaining a 3.8 GPA with core focus on Algorithms, Data Structures, Database Management Systems, Operating Systems, and Object-Oriented Software Design.',
    skills: ['Data Structures & Algorithms', 'DBMS', 'OOP', 'Software Engineering']
  },
  {
    id: 3,
    role: 'Hackathon Finalist & Web Team Lead',
    organization: 'Inter-College Tech Fest',
    period: '2023',
    type: 'achievement',
    description: 'Led a team of 4 to design and deliver a smart student resource sharing portal within 36 continuous hours. Awarded 2nd place for UX design and technical completeness.',
    skills: ['React', 'Tailwind', 'Rapid Prototyping', 'Team Leadership']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section section-py">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Milestone size={14} />
            04 // Pathway
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            A chronological timeline of my academic milestones, hands-on internships, and leadership experiences.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {journeyItems.map((item, index) => {
            const isOdd = index % 2 === 0;
            return (
              <div 
                key={item.id} 
                className={`timeline-item ${isOdd ? 'odd' : 'even'}`}
              >
                <div className="timeline-marker">
                  {item.type === 'education' ? (
                    <GraduationCap size={16} />
                  ) : item.type === 'achievement' ? (
                    <Award size={16} />
                  ) : (
                    <Briefcase size={16} />
                  )}
                </div>

                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <span className="timeline-period-badge">{item.period}</span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <h4 className="timeline-org">{item.organization}</h4>
                  </div>

                  <p className="timeline-desc">{item.description}</p>

                  <div className="timeline-skills-list">
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="timeline-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
