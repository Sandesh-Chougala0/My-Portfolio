import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 flex items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Sandesh Chougala
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
                Computer Science Student & Developer
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto md:mx-0 text-lg">
              I'm a passionate student diving deep into software development. I love building web applications, exploring new technologies, and constantly learning to solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-300 dark:border-slate-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto"
              >
                Contact Me
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="sr-only">Email</span>
                <Mail className="w-7 h-7" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full max-w-md md:max-w-none">
            <div className="relative">
              {/* Decorative blob behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 dark:opacity-30 blur-2xl animate-pulse"></div>
              <img
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                src={profileImage}
                alt="Sandesh Chougala"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
