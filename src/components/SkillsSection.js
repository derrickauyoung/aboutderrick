// Skills Section Component - Displays technical skills with visual progress indicators
// This component demonstrates how to work with nested data structures and create dynamic content

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { personalData } from '../data/personalData';

const SkillsSection = () => {
  // Get theme classes for consistent styling across light and dark modes
  const { themeClasses } = useTheme();

  // Configuration for skill categories - this maps to the data structure
  // and defines the visual styling for each category
  const skillCategories = [
    {
      key: 'frontend',
      title: 'Frontend',
      skills: personalData.skills.frontend,
      progressColor: 'bg-blue-500', // Blue progress bars for frontend skills
      description: 'User Interfaces'
    },
    {
      key: 'backend',
      title: 'Backend',
      skills: personalData.skills.backend,
      progressColor: 'bg-green-500', // Green progress bars for backend skills
      description: 'Pipeline/API'
    },
    {
      key: 'tools',
      title: 'Tools & Other',
      skills: personalData.skills.tools,
      progressColor: 'bg-purple-500', // Purple progress bars for tools
      description: 'Development tools and methodologies'
    },
    {
      key: 'learning',
      title: 'Currently Learning',
      skills: personalData.skills.learning,
      progressColor: 'bg-orange-500', // Orange progress bars for tools
      description: 'Actively learning'
    },
  ];

  // Component for rendering a single skill with its progress bar
  // This is a great example of creating reusable sub-components
  const SkillItem = ({ skill, level, progressColor }) => (
    <div className="space-y-2">
      {/* Skill name and percentage display */}
      <div className="flex justify-between items-center">
        <span className={`${themeClasses.textPrimary} font-medium transition-colors duration-200`}>
          {skill}
        </span>
        <span className={`${themeClasses.textSecondary} text-sm transition-colors duration-200`}>
          {level}%
        </span>
      </div>
      
      {/* Progress bar container and fill */}
      <div className={`w-full ${themeClasses.background} rounded-full h-2 overflow-hidden transition-colors duration-200`}>
        <div 
          className={`${progressColor} h-full rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );

  // Component for rendering a complete skill category card
  const SkillCategoryCard = ({ category }) => (
    <div className={`${themeClasses.cardBackground} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border ${themeClasses.border}`}>
      {/* Category header */}
      <div className="mb-6">
        <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-2 transition-colors duration-200`}>
          {category.title}
        </h3>
        <p className={`${themeClasses.textSecondary} text-sm transition-colors duration-200`}>
          {category.description}
        </p>
      </div>
      
      {/* Skills list with progress bars */}
      <div className="space-y-4">
        {category.skills.map((skillItem, index) => (
          <SkillItem
            key={`${category.key}-${index}`}
            skill={skillItem.skill}
            level={skillItem.level}
            progressColor={category.progressColor}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className={`py-20 ${themeClasses.background} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
            Skills & Technologies
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto transition-colors duration-200`}>
            {personalData.skills.tagline}
          </p>
        </div>

        {/* Skills Grid - responsive layout that adapts to screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <SkillCategoryCard 
              key={category.key} 
              category={category} 
            />
          ))}
        </div>

        {/* Optional: Add a note about skill levels */}
        <div className="mt-12 text-center">
          <p className={`${themeClasses.textSecondary} text-sm max-w-2xl mx-auto transition-colors duration-200`}>
            Skill levels represent my current proficiency and comfort level with each technology. 
            I'm always learning and these percentages reflect my ongoing journey in software development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;