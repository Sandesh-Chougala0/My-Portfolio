import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Full Stack Engineer',
      company: 'Tech Innovators Inc.',
      period: '2021 - Present',
      description: 'Lead developer for the core SaaS product. Architected and implemented microservices using Node.js and Docker. Improved application performance by 40% and mentored junior developers.',
      technologies: ['React', 'Node.js', 'Docker', 'AWS']
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Agency',
      period: '2019 - 2021',
      description: 'Developed and maintained various client projects ranging from e-commerce platforms to custom content management systems. Worked closely with the design team to ensure pixel-perfect implementation.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Tailwind CSS']
    },
    {
      id: 3,
      role: 'Frontend Developer',
      company: 'Creative Startup',
      period: '2018 - 2019',
      description: 'Built interactive user interfaces for a new social media platform. Optimized state management and reduced initial load time by utilizing lazy loading and code splitting.',
      technologies: ['React', 'Redux', 'SASS', 'Webpack']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
                <Briefcase className="w-5 h-5" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-gray-50 dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{exp.role}</h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <h4 className="text-md font-medium text-gray-600 dark:text-gray-400 mb-4">{exp.company}</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs font-medium px-2.5 py-1 bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-md text-gray-600 dark:text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
