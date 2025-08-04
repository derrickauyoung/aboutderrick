// About Section Component - Personal story and credibility indicators
// This component demonstrates how to work with complex data structures and create engaging layouts

import React from 'react';
import { Download } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalData } from '../data/personalData';

const handleDownload = () => {
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = `${process.env.PUBLIC_URL}/DerrickAuyoung_Resume.pdf`;
  link.download = 'DerrickAuyoung_Resume.pdf'; // This will be the downloaded filename
  
  // Trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const AboutSection = () => {
  // Get theme classes for consistent styling across light and dark modes
  const { themeClasses } = useTheme();

  // Component for rendering individual statistics
  // This is a great example of creating reusable sub-components for repeated UI elements
  const StatCard = ({ stat }) => (
    <div className={`${themeClasses.background} p-6 rounded-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
      <div className="text-3xl font-bold text-blue-500 mb-2 transition-colors duration-200">
        {stat.number}
      </div>
      <div className={`${themeClasses.textSecondary} text-sm transition-colors duration-200`}>
        {stat.label}
      </div>
    </div>
  );

  return (
    <section id="about" className={`py-20 ${themeClasses.cardBackground} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
            About Me
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto transition-colors duration-200`}>
            {personalData.about.tagline}
          </p>
        </div>
        
        {/* Main Content Grid - responsive layout that adapts to screen size */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story Section - Left Column */}
          <div>
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-6 transition-colors duration-200`}>
              {personalData.about.title}
            </h3>
            
            {/* 
              Map through paragraphs to allow multiple paragraphs in about section
              This demonstrates how to handle arrays of content dynamically
            */}
            {personalData.about.paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className={`${themeClasses.textSecondary} mb-6 leading-relaxed transition-colors duration-200`}
              >
                {paragraph}
              </p>
            ))}
            
            {/* Call-to-Action Button */}
            <div className="flex items-center gap-4 mt-8">
              <button
               onClick={handleDownload}
               className={`
                flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white 
                rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200
                shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200
              `}>
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          
          {/* Statistics Grid - Right Column */}
          <div className="grid grid-cols-2 gap-6">
            {/* 
              Map through statistics array to create dynamic stat cards
              This pattern allows you to easily add or modify stats in your data file
            */}
            {personalData.about.stats.map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>

        {/* Optional: Additional content section */}
        <div className="mt-16 text-center">
          <div className={`max-w-4xl mx-auto p-8 ${themeClasses.background} rounded-xl transition-colors duration-200`}>
            <h4 className={`text-xl font-semibold ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
              My Approach
            </h4>
            <p className={`${themeClasses.textSecondary} leading-relaxed transition-colors duration-200`}>
              {personalData.about.approach}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;