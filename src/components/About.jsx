import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Hello! I'm a student with a strong passion for computer science and software development. My journey started out of curiosity for how the web works, which quickly turned into a deep dive into programming languages, data structures, and algorithms.
            </p>
            <p>
              Currently, I'm focusing my studies on modern web technologies and software engineering principles. I spend most of my time working on academic projects, participating in hackathons, and building personal projects to apply what I learn in class to the real world.
            </p>
            <p>
              When I'm not studying or coding, you can usually find me reading up on the latest tech trends, gaming, or exploring new coffee shops around the campus.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Certifications</p>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Academic Projects</p>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Hackathons</p>
            </div>
            <div className="bg-gray-50 dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700">
              <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3.8</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium">Current GPA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
