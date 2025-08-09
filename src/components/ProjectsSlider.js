import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { Github, YoutubeIcon } from 'lucide-react';
import useProjectImages from './ProjectImages';

const ProjectsSlider = ({ project, themeClasses, isDarkMode }) => {
  // ALL hooks must be called in the same order every time
  const imageHook = useProjectImages();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Destructure after all hooks are called
  const { imageFilenames, isLoaded, error, loadImage, getRandomFilename, totalImages } = imageHook;
  
  // Memoize projectItems to prevent unnecessary re-renders
  const projectItems = useMemo(() => {
    return project?.projectItems || [];
  }, [project?.projectItems]);

  // Stable navigation functions
  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => prev === 0 ? projectItems.length - 1 : prev - 1);
    setIsAutoPlaying(false);
  }, [projectItems.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % projectItems.length);
    setIsAutoPlaying(false);
  }, [projectItems.length]);

  // Touch handlers
  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  }, [touchStart, touchEnd, goToNext, goToPrevious]);

  // Image preloading effect - simplified to avoid dependency issues
  useEffect(() => {
    if (!isLoaded || imageFilenames.length === 0) return;
    
    const preloadImages = async () => {
      const indicesToLoad = [
        currentIndex % imageFilenames.length,
        (currentIndex + 1) % imageFilenames.length,
        (currentIndex + 2) % imageFilenames.length
      ];
      
      for (const index of indicesToLoad) {
        const filename = imageFilenames[index];
        if (filename) {
          // Check if already loaded to avoid re-loading
          setLoadedImages(prev => {
            if (prev[filename]) return prev; // Already loaded, don't update
            
            // Load the image
            loadImage(filename).then(src => {
              if (src) {
                setLoadedImages(current => ({
                  ...current,
                  [filename]: src
                }));
              }
            }).catch(err => {
              console.error(`Failed to preload ${filename}:`, err);
            });
            
            return prev; // Return unchanged state for now
          });
        }
      }
    };
    
    preloadImages();
  }, [currentIndex, isLoaded, imageFilenames.length]); // Minimal dependencies

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying || projectItems.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projectItems.length);
    }, 7000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, projectItems.length]);

  // Get current image info
  const currentFilename = useMemo(() => {
    if (imageFilenames.length === 0) return null;
    return imageFilenames[currentIndex % imageFilenames.length];
  }, [imageFilenames, currentIndex]);

  const currentImageSrc = useMemo(() => {
    return currentFilename ? loadedImages[currentFilename] : null;
  }, [currentFilename, loadedImages]);

  // Handle error state
  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-2">Error loading images: {error.message}</div>
        <p className="text-sm text-gray-500">Continuing without image directory...</p>
      </div>
    );
  }

  // Handle loading state
  if (!isLoaded) {
    return (
      <div className="text-center py-8">
        <div className="animate-pulse">Loading images...</div>
      </div>
    );
  }

  // Handle empty project items
  if (projectItems.length === 0) {
    return (
      <div className="text-center py-8">
        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
          No project items available
        </p>
        {imageFilenames.length > 0 && (
          <p className="text-sm text-gray-500 mt-2">
            Found {imageFilenames.length} images in directory
          </p>
        )}
      </div>
    );
  }

  const currentItem = projectItems[currentIndex];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-2 py-1 rounded text-xs ${
              isAutoPlaying 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {isAutoPlaying ? 'Auto' : 'Manual'}
          </button>
        </div>
      </div>

      {/* Main Slide Container */}
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projectItems.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} overflow-hidden`}>
                <div className="grid grid-cols-1 md:grid-cols-2 min-h-[400px]">
                  {/* Left Side - Visual/Image */}
                  <div className={`${item.gradient || 'bg-gradient-to-br from-blue-500 to-purple-600'} 
                                   flex items-center justify-center p-0 relative overflow-hidden`}>
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : item.icon ? (
                      <div className="text-6xl text-white opacity-80">
                        {item.icon}
                      </div>
                    ) : currentImageSrc ? (
                      <img 
                        src={currentImageSrc}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <span className="text-2xl font-bold">
                            {(item.title || item.name || 'Initiative').charAt(0)}
                          </span>
                        </div>
                        <div className="text-sm opacity-75">Initiative #{index + 1}</div>
                        {currentFilename && (
                          <div className="text-xs opacity-60 mt-1">Loading {currentFilename}...</div>
                        )}
                      </div>
                    )}
                    
                    {/* Decorative overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="space-y-4">
                      {/* Title */}
                      <h4 className={`text-2xl font-bold ${themeClasses.textPrimary}`}>
                        {item.title || item.name || `Initiative ${index + 1}`}
                      </h4>

                      {/* Description */}
                      <p className={`text-lg leading-relaxed ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item.description || item.summary || 'No description available.'}
                      </p>

                      {/* Additional Details */}
                      {item.details && (
                        <div className="space-y-2">
                          {item.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-start gap-2">
                              <Circle className="w-2 h-2 mt-2 text-blue-500 fill-current" />
                              <span className={`text-sm ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        {item.codeUrl && (
                          <a 
                            href={item.codeUrl}
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
                            aria-label={`View source code of ${item.title}`}
                          >
                            <Github size={16} />
                            Source Code
                          </a>
                        )}
                        {item.demoUrl && (
                          <a 
                            href={item.demoUrl}
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
                            aria-label={`View demo of ${item.title}`}
                          >
                            <YoutubeIcon size={16} />
                            Youtube Demo
                          </a>
                        )}
                      </div>

                      {/* Tags/Technologies */}
                      {item.technologies && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                isDarkMode
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-gray-100 text-gray-700'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {projectItems.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
                         ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} 
                         shadow-lg transition-all duration-200 hover:scale-110`}
              aria-label="Previous slide"
            >
              <ChevronLeft className={`w-6 h-6 ${themeClasses.textPrimary}`} />
            </button>
            
            <button
              onClick={goToNext}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full 
                         ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} 
                         shadow-lg transition-all duration-200 hover:scale-110`}
              aria-label="Next slide"
            >
              <ChevronRight className={`w-6 h-6 ${themeClasses.textPrimary}`} />
            </button>
          </>
        )}
      </div>

      {/* Slide Indicators */}
      {projectItems.length > 1 && (
        <div className="flex justify-center gap-3 mt-6">
          {projectItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-blue-500 scale-125'
                  : isDarkMode
                  ? 'bg-gray-600 hover:bg-gray-500'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isAutoPlaying && projectItems.length > 1 && (
        <div className={`mt-4 h-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
          <div 
            className="h-full bg-blue-500 transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / projectItems.length) * 100}%`
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectsSlider;