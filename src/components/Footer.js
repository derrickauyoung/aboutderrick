// Footer Component - Site footer with copyright and additional information
// This component demonstrates simple content presentation with theme awareness

import React from 'react';
import { Heart, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalData } from '../data/personalData';

const Footer = () => {
  // Get theme classes for consistent styling
  const { themeClasses } = useTheme();
  
  // Get current year for copyright notice
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-gray-900 dark:bg-black text-white py-12 transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Copyright Notice */}
          <p className="text-gray-300 mb-4 transition-colors duration-200">
            © {currentYear} {personalData.name}. All rights reserved.
          </p>
          
          {/* Built With Section */}
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm mb-4 transition-colors duration-200">
            <span>Built with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>using</span>
            <Code size={16} className="text-blue-400" />
            <span>React and deployed on GitHub Pages</span>
          </div>
          
          {/* Technology Stack */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-400 text-xs transition-colors duration-200">
            <span>React</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Lucide Icons</span>
            <span>•</span>
            <span>GitHub Pages</span>
          </div>
        </div>

        {/* Optional: Additional Footer Links */}
        <div className="mt-8 pt-8 border-t border-gray-800 dark:border-gray-700 transition-colors duration-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Left Side - Quick Links */}
            <div className="flex gap-6 text-gray-400 text-sm">
              <a 
                href="#home" 
                className="hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="hover:text-white transition-colors duration-200"
              >
                About
              </a>
              <a 
                href="#portfolio" 
                className="hover:text-white transition-colors duration-200"
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
            
            {/* Right Side - Version or Update Info */}
            <div className="text-gray-500 text-xs">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Optional: Back to Top Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 hover:text-white transition-all duration-200 text-sm"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;