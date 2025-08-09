// App.js - The main orchestrator of your portfolio
import React from 'react';
import './App.css';

// Import all your existing components
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import AnimReelSection from './components/AnimSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Import the theme context to enable dark/light mode switching
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  // Smooth scroll function that your components can use
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Smooth scroll to the element
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // Align to top of viewport
      });
    }
  };

  return (
    // ThemeProvider wraps the entire app to provide theme context to all components
    <ThemeProvider>
      <div className="App">
        {/* 
          Navigation stays at the top and provides smooth scrolling to sections
          Pass scrollToSection function to Navigation if it needs it
        */}
        <Navigation scrollToSection={scrollToSection} />
        
        {/* 
          Each section uses semantic HTML with descriptive IDs
          These IDs enable smooth scrolling navigation and improve accessibility
          The order creates a logical flow: introduce yourself, show skills, display work, then contact
        */}
        <main>
          {/* Note: HeroSection expects id="home" based on your component code */}
          <section id="home">
            <HeroSection scrollToSection={scrollToSection} />
          </section>
          
          <section id="about">
            <AboutSection scrollToSection={scrollToSection} />
          </section>
          
          <section id="skills">
            <SkillsSection scrollToSection={scrollToSection} />
          </section>
          
          <section id="portfolio">
            <PortfolioSection scrollToSection={scrollToSection} />
          </section>

          <section id="reel">
            <AnimReelSection scrollToSection={scrollToSection} />
          </section>
          
          <section id="contact">
            <ContactSection scrollToSection={scrollToSection} />
          </section>
        </main>
        
        {/* Footer typically contains copyright, social links, and additional navigation */}
        <Footer scrollToSection={scrollToSection} />
      </div>
    </ThemeProvider>
  );
}

export default App;