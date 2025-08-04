// Hero Section Component - The main landing section with introduction
// This component creates the first impression visitors get of your website

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { personalData } from '../data/personalData';

const HeroSection = ({ scrollToSection }) => {
  // Get theme classes from context for consistent styling
  const { themeClasses, isDarkMode } = useTheme();

  return (
    <section 
      id="home" 
      className={`pt-16 min-h-screen flex items-center transition-colors duration-200 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content Section */}
          <div>
            {/* Main Heading with Name Highlight */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${themeClasses.textPrimary} mb-6 transition-colors duration-200`}>
              Hi, I'm{' '}
              <span className="text-blue-500">
                {personalData.name}
              </span>
            </h1>
            
            {/* Tagline - the elevator pitch */}
            <p className={`text-xl sm:text-2xl ${themeClasses.textSecondary} mb-8 transition-colors duration-200`}>
              {personalData.tagline}
            </p>
            
            {/* Detailed Description */}
            <p className={`text-lg ${themeClasses.textSecondary} mb-8 leading-relaxed transition-colors duration-200`}>
              {personalData.description}
            </p>
            
            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary CTA - View Portfolio */}
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                About me
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              >
                View Work
              </button>
              
              {/* Secondary CTA - Contact */}
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 font-medium ${
                  isDarkMode ? 'hover:border-blue-400' : 'hover:border-blue-600'
                }`}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Profile Image/Avatar Section */}
          <div className="flex justify-center lg:justify-end">
            {/* Placeholder Avatar with Gradient Background */}
            <div className={`w-80 h-80 bg-gradient-to-br ${
              isDarkMode 
                ? 'from-blue-600 to-purple-700' 
                : 'from-blue-400 to-purple-500'
            } rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105`}>
              {/* Display User Picture */}
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-105">
                <img 
                  src="/DerrickAuyoung.png" 
                  alt={personalData.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;