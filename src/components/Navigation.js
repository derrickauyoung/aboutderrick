// Navigation Component - Handles site navigation and theme toggle
// This component manages the site's main navigation bar, including mobile menu and dark mode toggle

import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalData } from '../data/personalData';

const Navigation = ({ activeSection, scrollToSection }) => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get theme state and toggle function from context
  const { isDarkMode, toggleTheme, themeClasses } = useTheme();

  // Handle navigation click - scrolls to section and closes mobile menu
  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 ${themeClasses.cardBackground} shadow-md z-50 transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name - sourced from personalData */}
          <div className={`text-2xl font-bold ${themeClasses.textPrimary} transition-colors duration-200`}>
            {personalData.name}
          </div>
          
          {/* Desktop Navigation and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Navigation Links */}
            <div className="flex space-x-8">
              {personalData.navigation.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavClick(section)}
                  className={`text-sm font-medium transition-colors duration-200 capitalize ${
                    activeSection === section 
                      ? 'text-blue-500 border-b-2 border-blue-500 pb-1' 
                      : `${themeClasses.textSecondary} hover:text-blue-500`
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${themeClasses.background} ${themeClasses.textPrimary} hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${themeClasses.background} ${themeClasses.textPrimary} hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={18} className="text-yellow-500" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex flex-col space-y-1 p-2"
              aria-label="Toggle mobile menu"
            >
              <span className={`w-6 h-0.5 ${themeClasses.textSecondary} transition-colors duration-200`}></span>
              <span className={`w-6 h-0.5 ${themeClasses.textSecondary} transition-colors duration-200`}></span>
              <span className={`w-6 h-0.5 ${themeClasses.textSecondary} transition-colors duration-200`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - shows/hides based on isMenuOpen state */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${themeClasses.border} transition-colors duration-200`}>
            {personalData.navigation.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`block w-full text-left py-2 px-4 ${themeClasses.textSecondary} hover:text-blue-500 capitalize transition-colors duration-200`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;