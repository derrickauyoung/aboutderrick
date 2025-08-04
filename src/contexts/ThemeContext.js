// Theme Context - Manages dark/light mode state across the entire application
// This is a React Context that provides theme state and toggle functionality to all components

import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the Theme Context - think of this as a "communication channel" 
// that all components can tune into to know the current theme
const ThemeContext = createContext();

// Custom hook to use the theme context - this makes it easy for components
// to access theme state and the toggle function
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Provider Component - this wraps your entire app and provides theme state
// It manages the theme state and persists user preference
export const ThemeProvider = ({ children }) => {
  // State to track current theme - starts with light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to load saved theme preference when the app loads
  // This checks if the user previously selected a theme and restores it
  useEffect(() => {
    // Check for saved theme preference in browser storage
    const savedTheme = localStorage.getItem('theme-preference');
    
    // If user previously chose a theme, use that
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      updateDocumentTheme(isDark);
    } else {
      // If no saved preference, check if user's system prefers dark mode
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      updateDocumentTheme(systemPrefersDark);
    }
  }, []);

  // Function to update the document's theme class
  // This adds/removes the 'dark' class from the HTML document
  const updateDocumentTheme = (isDark) => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Function to toggle between light and dark mode
  // This is what gets called when user clicks the theme toggle button
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    updateDocumentTheme(newTheme);
    
    // Save the user's preference so it persists across browser sessions
    localStorage.setItem('theme-preference', newTheme ? 'dark' : 'light');
  };

  // The context value that gets provided to all child components
  // This includes the current theme state and the toggle function
  const contextValue = {
    isDarkMode,
    toggleTheme,
    // Helper properties that components can use for conditional styling
    theme: isDarkMode ? 'dark' : 'light',
    // CSS classes for common theme-aware styling
    themeClasses: {
      background: isDarkMode ? 'bg-gray-900' : 'bg-gray-50',
      cardBackground: isDarkMode ? 'bg-gray-800' : 'bg-white',
      textPrimary: isDarkMode ? 'text-white' : 'text-gray-900',
      textSecondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
      border: isDarkMode ? 'border-gray-700' : 'border-gray-300',
      accent: 'text-blue-500' // Accent color works in both themes
    }
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export the context itself in case components need direct access
export default ThemeContext;