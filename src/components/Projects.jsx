import { useState } from 'react';
import { 
  Github, 
  Sparkles, 
  Layers, 
  ArrowUpRight 
} from 'lucide-react';
import './Projects.css';

const projectsList = [
  {
    id: 1,
    title: 'ShopSphere E-Commerce',
    category: 'fullstack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    description: 'A full-stack shopping platform with modern UI, secure Stripe checkout, cart management, search filtering, and an order management dashboard.',
    features: [
      'Stripe Payment Gateway integration',
      'User authentication with JWT & refresh tokens',
      'Optimistic state updates for instant cart reactivity'
    ],
    technologies: ['React 18', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    github: 'https://github.com/Sandesh-Chougala0',
    live: 'https://github.com/Sandesh-Chougala0'
  },
  {
    id: 2,
    title: 'DevPulse Community Hub',
    category: 'fullstack',
    featured: true,
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000',
    description: 'A real-time developer Q&A forum and collaborative hub featuring markdown code snippets, voting systems, and instantaneous notification streams.',
    features: [
      'Real-time WebSocket events for chat & answers',
      'Markdown syntax highlighting & live preview',
      'Reputation scoring & user badge awards'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'PostgreSQL'],
    github: 'https://github.com/Sandesh-Chougala0',
    live: 'https://github.com/Sandesh-Chougala0'
  },
  {
    id: 3,
    title: 'Visionary AI Studio',
    category: 'frontend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    description: 'Interactive generative AI art application allowing users to compose artistic prompts, preview generated images, and share creations with the community.',
    features: [
      'OpenAI DALL-E image generation API',
      'Community feed with infinite scrolling',
      'Glassmorphic dark UI with smooth micro-interactions'
    ],
    technologies: ['React', 'Vite', 'Tailwind/CSS', 'OpenAI API', 'Cloudinary'],
    github: 'https://github.com/Sandesh-Chougala0',
    live: 'https://github.com/Sandesh-Chougala0'
  },
  {
    id: 4,
    title: 'AlgoScope Algorithm Visualizer',
    category: 'frontend',
    featured: false,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000',
    description: 'Interactive visualizer for classical sorting algorithms (QuickSort, MergeSort, HeapSort) and graph searches (Dijkstra, A*, BFS/DFS) with speed controls.',
    features: [
      'Interactive speed and array size adjustments',
      'Audio frequency feedback synchronized with element comparisons',
      'Clear time & space complexity explanation breakdowns'
    ],
    technologies: ['React', 'JavaScript (ES6+)', 'HTML5 Canvas', 'CSS Animations'],
    github: 'https://github.com/Sandesh-Chougala0',
    live: 'https://github.com/Sandesh-Chougala0'
  }
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend & UI' }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects = selectedCategory === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="projects-section section-py">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Layers size={14} />
            03 // Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Creations</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of applications that reflect my dedication to clean code, responsive layouts, and user satisfaction.
          </p>
          <div className="title-underline"></div>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter-bar">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`project-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <article key={project.id} className="project-card">
              {/* Media Thumbnail */}
              <div className="project-media-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img" 
                  loading="lazy"
                />
                <div className="project-overlay"></div>
                {project.featured && (
                  <div className="project-badge-featured">
                    <Sparkles size={13} style={{ color: '#ec4899' }} />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Content Body */}
              <div className="project-body">
                <div className="project-header-row">
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-summary">{project.description}</p>

                {/* Feature Highlights */}
                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="project-feature-item">
                      <span className="feature-dot"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="project-tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Links */}
                <div className="project-links-row">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link-btn"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>

                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-link-btn primary-link"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
