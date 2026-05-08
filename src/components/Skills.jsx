import React from 'react';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js']
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8 text-green-500" />,
      skills: ['Node.js', 'Express', 'Python']
    },
    {
      title: 'Database & Cloud',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Firebase']
    },
    {
      title: 'Tools & DevOps',
      icon: <Settings className="w-8 h-8 text-orange-500" />,
      skills: ['Git', 'GitHub Actions', 'Jenkins', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world.
            Here's an overview of my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-gray-50 dark:bg-slate-700/50 w-16 h-16 rounded-xl flex items-center justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                  >
                    {skill}
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
