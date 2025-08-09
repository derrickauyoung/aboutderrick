// Animation Reel Section Component - Showcase of projects and work
// This component demonstrates advanced data mapping and interactive card layouts

import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import AnimDetails from './AnimDetails';
import { personalData } from '../data/personalData';

const AnimReelSection = () => {
  // Get theme classes for consistent styling
  const { themeClasses, isDarkMode } = useTheme();

  const animReel = personalData.animReel || null;

  if (!animReel) {
    return null; // No animation reel data available
  }

  return (
    <section id="reel" className={`py-20 ${themeClasses.cardBackground} transition-colors duration-200`}>
    <div className={`py-20 ${themeClasses.cardBackground} transition-colors duration-200`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
            <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
            Animation Reel
            </h2>
            <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto transition-colors duration-200`}>
            {personalData.animReel.tagline}
            </p>
        </div>
            {/* Animation Reel Cards Grid */}
            <AnimDetails 
                project={animReel}
            />
        </div>
    </div>
    </section>
  );
};

export default AnimReelSection;