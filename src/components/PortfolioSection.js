// Portfolio Section Component - Showcase of projects and work
// This component demonstrates advanced data mapping and interactive card layouts

import React, { useState } from 'react';
import { ExternalLink, Github, MapPin, Calendar, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import Modal from './Modal';
import ProjectDetails from './ProjectDetails';
import { personalData } from '../data/personalData';

const PortfolioSection = () => {
  // Get theme classes for consistent styling
  const { themeClasses, isDarkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleProjectClick = (project) => {
    // Capture which project was clicked
    setSelectedProject(project);
  };
  
  const closeModal = () => {
    // Clear the selection, which closes the modal
    setSelectedProject(null);
  };

  // Component for rendering individual project cards
  // This is a complex component that demonstrates several React patterns
  const ProjectCard = ({ project, index }) => (
    <div className={`
      ${themeClasses.cardBackground} rounded-xl shadow-lg overflow-hidden 
      hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2
      border ${themeClasses.border}
    `}>
      {/* 
        Project Image Placeholder 
        In a real application, you'd replace this with actual project screenshots
        The gradient and initials provide a professional look while you collect images
      */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        {/* Background pattern for visual interest */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Project initials as placeholder */}
        <div className="relative z-10">
          <div className="text-white text-3xl font-bold mb-2">
            {project.category}
            {/* {getProjectInitials(project.title)} */}
          </div>
          <div className="text-white text-sm opacity-80 text-center">
          </div>
        </div>
        
        {/* Overlay that appears on hover - adds interactivity */}
        <div
          onClick={() => handleProjectClick(project)}
          role="button" 
          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-sm mb-4">Click to view more</p>
            <div className="flex gap-2 justify-center">
              <ExternalLink size={16} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Information Section */}
      <div className="p-6">
        {/* Project Title */}
        <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-3 transition-colors duration-200`}>
          {project.title}
        </h3>
        
        {/* Project Description */}
        <p className={`${themeClasses.textSecondary} mb-4 leading-relaxed text-sm transition-colors duration-200`}>
          {project.description}
        </p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className={`
                px-3 py-1 text-xs rounded-full font-medium transition-colors duration-200
                ${isDarkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Action Buttons */}
        <div className="flex gap-3">
          {/* Live Demo Button */}
          <button
            onClick={() => setSelectedProject(project)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            aria-label={`See more info on: ${project.title}`}
          >
            See more
          </button>
          {/* Source Code Button */}
          {/*}
          <a 
            href={project.codeUrl}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
              border-2 transition-all duration-200 transform hover:-translate-y-0.5
              ${isDarkMode 
                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' 
                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
              }
            `}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${project.title}`}
          >
            <Github size={16} />
            Source
          </a>
          */}
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className={`py-20 ${themeClasses.cardBackground} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
            Featured Experience
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto transition-colors duration-200`}>
            {personalData.projects_text.tagline}
          </p>
        </div>

        {/* Projects Grid - responsive layout that adapts to screen size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 
            Map through projects array to generate project cards dynamically
            This pattern allows you to easily add new projects by updating your data file
          */}
          {personalData.projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-16 text-center">
          <div className={`max-w-2xl mx-auto p-8 ${themeClasses.background} rounded-xl transition-colors duration-200`}>
            <h3 className={`text-xl font-semibold ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
              Want to see more?
            </h3>
            <p className={`${themeClasses.textSecondary} mb-6 transition-colors duration-200`}>
              {personalData.projects_text.endline}
            </p>
            <a 
              href={personalData.contact.social.github}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
              View All
            </a>
          </div>
        </div>
      </div>

      {/* About Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={closeModal}
        title={selectedProject?.title || 'Project Details'}
        maxWidth="max-w-4xl"
      >
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </section>
  );
};

export default PortfolioSection;