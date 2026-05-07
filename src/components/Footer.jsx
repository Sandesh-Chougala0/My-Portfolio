import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="font-bold text-2xl text-blue-600 dark:text-blue-400 mb-2">
            Dev<span className="text-gray-900 dark:text-white">Portfolio</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Building digital products, brands, and experience.
          </p>
        </div>

        <div className="flex flex-col items-center mb-8 md:mb-0">
          <div className="flex items-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm flex items-center">
            Designed & Built with <Heart className="w-4 h-4 text-red-500 mx-1" fill="currentColor" /> by Sandesh Chougala
          </p>
        </div>

        <div className="text-center md:text-right">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sandesh Chougala.
            <br /> All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
