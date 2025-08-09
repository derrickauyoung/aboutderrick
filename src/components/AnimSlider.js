import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { Github, YoutubeIcon } from 'lucide-react';

const AnimSlider = ({ project, themeClasses, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
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

  // Lazy load images for current and adjacent slides
  useEffect(() => {
    const preloadImages = () => {
      // Load current slide and adjacent ones
      const indicesToLoad = [
        (currentIndex - 1 + projectItems.length) % projectItems.length, // Previous
        currentIndex, // Current
        (currentIndex + 1) % projectItems.length // Next
      ];
      
      indicesToLoad.forEach(index => {
        const item = projectItems[index];
        if (item?.image && !loadedImages[item.image]) {
          console.log('🔍 Attempting to load image:', item.image);
          console.log('🔍 Current URL would be:', window.location.origin + item.image);
          
          const img = new Image();
          img.onload = () => {
            console.log('✅ Image loaded successfully:', item.image);
            console.log('✅ Image dimensions:', img.naturalWidth, 'x', img.naturalHeight);
            setLoadedImages(prev => ({
              ...prev,
              [item.image]: true
            }));
          };
          img.onerror = (error) => {
            console.error('❌ Failed to load image:', item.image);
            console.error('❌ Full URL attempted:', img.src);
            console.error('❌ Error event:', error);
            
            // Let's try to fetch it directly to see the exact error
            fetch(item.image)
              .then(response => {
                console.error('❌ Fetch response status:', response.status, response.statusText);
                console.error('❌ Fetch response headers:', [...response.headers.entries()]);
              })
              .catch(fetchError => {
                console.error('❌ Fetch completely failed:', fetchError);
              });
            
            setLoadedImages(prev => ({
              ...prev,
              [item.image]: 'failed'
            }));
          };
          img.src = item.image;
        }
      });
    };

    if (projectItems.length > 0) {
      preloadImages();
    }
  }, [currentIndex, projectItems]);

  // Handle empty project items
  if (projectItems.length === 0) {
    return (
      <div className="text-center py-8">
        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
          No project items available
        </p>
      </div>
    );
  }

  const currentItem = projectItems[currentIndex];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-500">
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
                <div className="flex flex-col">
                  {/* Top Row - Visual/Image - Match GIF dimensions */}
                  <div className={`${item.gradient || 'bg-gradient-to-br from-blue-500 to-purple-600'} 
                                   flex items-center justify-center p-0 relative overflow-hidden`}
                       style={{ minHeight: item.image ? 'auto' : '300px' }}>
                    {item.image ? (
                      <>
                        {loadedImages[item.image] === true ? (
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-auto object-contain max-w-full"
                            style={{ display: 'block' }}
                          />
                        ) : loadedImages[item.image] === 'failed' ? (
                          // Show fallback for failed images
                          <div className="text-center text-white">
                            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                              <span className="text-2xl font-bold">
                                {(item.title || item.name || 'Initiative').charAt(0)}
                              </span>
                            </div>
                            <div className="text-sm opacity-75">Image failed to load</div>
                          </div>
                        ) : (
                          // Loading placeholder
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center text-white">
                              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                              <div className="text-sm opacity-75">Loading image...</div>
                            </div>
                          </div>
                        )}
                      </>
                    ) : item.icon ? (
                      <div className="text-6xl text-white opacity-80">
                        {item.icon}
                      </div>
                    ) : (
                      // Fallback content
                      <div className="text-center text-white">
                        <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <span className="text-2xl font-bold">
                            {(item.title || item.name || 'Initiative').charAt(0)}
                          </span>
                        </div>
                        <div className="text-sm opacity-75">Initiative #{index + 1}</div>
                      </div>
                    )}
                    
                    {/* Decorative overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  </div>

                  {/* Bottom Row - Content - Compact for 2 lines */}
                  <div className="p-4 flex flex-row justify-center" style={{ minHeight: '120px' }}>
                    <div className="space-y-2 text-center max-w-2xl">
                      {/* Title */}
                      <h4 className={`text-lg font-bold ${themeClasses.textPrimary} line-clamp-1`}>
                        {item.title || item.name || `Initiative ${index + 1}`}
                      </h4>

                      {/* Description - Limited to 2 lines */}
                      <p className={`text-sm leading-tight line-clamp-2 ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item.description || item.summary || 'No description available.'}
                      </p>

                      {/* Action Buttons - Compact */}
                      <div className="flex gap-2 justify-center mt-2">
                        {item.codeUrl && (
                          <a 
                            href={item.codeUrl}
                            className={`
                              flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium
                              border transition-all duration-200
                              ${isDarkMode 
                                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' 
                                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                              }
                            `}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View source code of ${item.title}`}
                          >
                            <Github size={12} />
                            Code
                          </a>
                        )}
                        {item.demoUrl && (
                          <a 
                            href={item.demoUrl}
                            className={`
                              flex items-center gap-1 px-3 py-1 rounded-md text-xs font-medium
                              border transition-all duration-200
                              ${isDarkMode 
                                ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' 
                                : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                              }
                            `}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View demo of ${item.title}`}
                          >
                            <YoutubeIcon size={12} />
                            Demo
                          </a>
                        )}
                      </div>
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

export default AnimSlider;