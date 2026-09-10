import { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Cpu, 
  Sparkles,
  GitBranch
} from 'lucide-react';
import './Skills.css';

const skillsData = [
  {
    id: 'react',
    title: 'React & Ecosystem',
    category: 'frontend',
    icon: <Code2 size={24} style={{ color: '#06b6d4' }} />,
    desc: 'Component architecture, custom hooks, React Router, Context API, and state management.',
    proficiency: 90,
    level: 'Advanced',
    gradient: 'var(--gradient-cyan)',
    tags: ['React 18', 'Hooks', 'Vite', 'Redux', 'Next.js']
  },
  {
    id: 'javascript',
    title: 'Modern JavaScript & CSS3',
    category: 'frontend',
    icon: <Layers size={24} style={{ color: '#f59e0b' }} />,
    desc: 'ES6+, asynchronous programming, DOM manipulation, Flexbox, CSS Grid, and custom animations.',
    proficiency: 88,
    level: 'Advanced',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    tags: ['ES6+', 'Async/Await', 'CSS Grid', 'Glassmorphism', 'Responsive']
  },
  {
    id: 'nodejs',
    title: 'Node.js & Express',
    category: 'backend',
    icon: <Server size={24} style={{ color: '#10b981' }} />,
    desc: 'RESTful API architecture, middleware creation, authentication, error handling, and server logic.',
    proficiency: 82,
    level: 'Proficient',
    gradient: 'var(--gradient-emerald)',
    tags: ['Node.js', 'Express', 'JWT', 'REST APIs', 'NPM']
  },
  {
    id: 'databases',
    title: 'PostgreSQL & MongoDB',
    category: 'database',
    icon: <Database size={24} style={{ color: '#8b5cf6' }} />,
    desc: 'Relational schema design, SQL queries, NoSQL document modeling, indexing, and aggregation pipelines.',
    proficiency: 80,
    level: 'Proficient',
    gradient: 'var(--gradient-primary)',
    tags: ['PostgreSQL', 'MongoDB', 'Mongoose', 'SQL', 'Prisma']
  },
  {
    id: 'cscore',
    title: 'DSA & Computer Science',
    category: 'tools',
    icon: <Cpu size={24} style={{ color: '#ec4899' }} />,
    desc: 'Data structures, algorithm design, complexity analysis (Big-O), OOP, and OS fundamentals.',
    proficiency: 85,
    level: 'Strong Core',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    tags: ['Arrays & Trees', 'Dynamic Prog', 'OOP', 'OS Concepts', 'C / C++']
  },
  {
    id: 'tools',
    title: 'Git & Developer Tools',
    category: 'tools',
    icon: <GitBranch size={24} style={{ color: '#3b82f6' }} />,
    desc: 'Version control workflows, GitHub branch strategies, Postman API testing, and Linux environments.',
    proficiency: 85,
    level: 'Advanced',
    gradient: 'var(--gradient-cyan)',
    tags: ['Git', 'GitHub', 'Linux Bash', 'Postman', 'VS Code']
  }
];

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Databases' },
  { id: 'tools', label: 'Tools & Core' },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="skills-section section-py">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            02 // Tech Stack
          </span>
          <h2 className="section-title">
            Skills &amp; <span className="gradient-text">Competencies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical abilities and the tools I utilize to craft robust digital products.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-container">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`skills-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-box">
                  {skill.icon}
                </div>
                <span 
                  className="skill-level-badge"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#f8fafc',
                    border: '1px solid var(--border-glass)'
                  }}
                >
                  {skill.level}
                </span>
              </div>

              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>

              {/* Progress */}
              <div className="skill-bar-container">
                <div className="skill-bar-header">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div 
                    className="skill-bar-fill" 
                    style={{ 
                      width: `${skill.proficiency}%`,
                      background: skill.gradient
                    }}
                  ></div>
                </div>
              </div>

              {/* Tag Pills */}
              <div className="skill-tags">
                {skill.tags.map((tag, idx) => (
                  <span key={idx} className="skill-tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
