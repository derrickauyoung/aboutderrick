import React, { useState, useEffect, useRef, useCallback } from 'react';

// Create a simple, stable hook that doesn't cause re-render issues
const useProjectImages = () => {
  const [state, setState] = useState({
    imageFilenames: [],
    isLoaded: false,
    error: null
  });

  // Only run once on mount
  useEffect(() => {
    let isMounted = true;
    
    const loadImageFilenames = async () => {
      try {
        const context = require.context('../assets/projectCards', false, /\.(png|jpe?g|svg|webp)$/);
        const filenames = context.keys().map(item => item.replace('./', ''));
        
        if (isMounted) {
          setState({
            imageFilenames: filenames,
            isLoaded: true,
            error: null
          });
        }
      } catch (error) {
        console.error('Failed to load image directory:', error);
        if (isMounted) {
          setState({
            imageFilenames: [],
            isLoaded: true,
            error: error
          });
        }
      }
    };

    loadImageFilenames();

    return () => {
      isMounted = false;
    };
  }, []); // Empty deps - runs only once

  // Stable loadImage function
  const loadImage = useCallback(async (filename) => {
    if (!filename) return null;
    
    try {
      const module = await import(`../assets/projectCards/${filename}`);
      return module.default;
    } catch (error) {
      console.error(`Failed to load image: ${filename}`, error);
      return null;
    }
  }, []);

  // Stable getRandomFilename function
  const getRandomFilename = useCallback((index) => {
    if (state.imageFilenames.length === 0) return null;
    return state.imageFilenames[index % state.imageFilenames.length];
  }, [state.imageFilenames]);

  return {
    imageFilenames: state.imageFilenames,
    isLoaded: state.isLoaded,
    error: state.error,
    loadImage,
    getRandomFilename,
    totalImages: state.imageFilenames.length
  };
};

export default useProjectImages;