// Contact Section Component - Multiple ways for people to reach out
// This component demonstrates form handling, contact information display, and social media integration

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalData } from '../data/personalData';

const ContactSection = () => {
  // Get theme classes for consistent styling
  const { themeClasses, isDarkMode } = useTheme();
  
  // State for form handling - this demonstrates controlled components in React
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes - this updates state as user types
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission - placeholder for actual form integration
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    // In a real application, you'd integrate with a service like:
    // - Formspree (https://formspree.io)
    // - Netlify Forms (if hosted on Netlify)
    // - EmailJS (https://emailjs.com)
    // - Your own backend API

    alert(`Form submitted! In a real application, this would send your message via email service integration. 
    
Consider using:
- Formspree for simple form handling
- EmailJS for client-side email sending
- Netlify Forms if deploying to Netlify

Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`);
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  // Contact information configuration with icons and styling
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.contact.email,
      href: `mailto:${personalData.contact.email}`,
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.contact.phone,
      href: `tel:${personalData.contact.phone}`,
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalData.contact.location,
      href: null, // No link for location
      color: 'text-purple-500'
    }
  ];

  // Social media configuration with proper icons and colors
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: personalData.contact.social.github,
      bgColor: isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-900 hover:bg-gray-800',
      label: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: personalData.contact.social.linkedin,
      bgColor: 'bg-blue-600 hover:bg-blue-700',
      label: 'Connect on LinkedIn'
    },
  ];

  // Component for rendering individual contact information items
  const ContactInfoItem = ({ info }) => {
    const IconComponent = info.icon;
    const content = (
      <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
        <div className={`w-12 h-12 ${themeClasses.background} rounded-lg flex items-center justify-center transition-colors duration-200`}>
          <IconComponent className={`${info.color} transition-colors duration-200`} size={24} />
        </div>
        <div>
          <div className={`font-medium ${themeClasses.textPrimary} transition-colors duration-200`}>
            {info.label}
          </div>
          <div className={`${themeClasses.textSecondary} transition-colors duration-200`}>
            {info.value}
          </div>
        </div>
      </div>
    );

    // Wrap in link if href is provided, otherwise just return the content
    return info.href ? (
      <a href={info.href} className="block">
        {content}
      </a>
    ) : content;
  };

  return (
    <section id="contact" className={`py-20 ${themeClasses.background} transition-colors duration-200`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl font-bold ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
            Get In Touch
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto transition-colors duration-200`}>
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Left Column */}
          <div>
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-8 transition-colors duration-200`}>
              Let's Connect
            </h3>
            
            {/* Contact Information List */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={index} info={info} />
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className={`text-lg font-medium ${themeClasses.textPrimary} mb-4 transition-colors duration-200`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a 
                      key={index}
                      href={social.url}
                      className={`w-12 h-12 ${social.bgColor} text-white rounded-lg flex items-center justify-center transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-200">
              <h4 className={`font-medium ${themeClasses.textPrimary} mb-2 transition-colors duration-200`}>
                Response Time
              </h4>
              <p className={`${themeClasses.textSecondary} text-sm transition-colors duration-200`}>
                I typically respond to emails within 24 hours. For urgent matters, 
                feel free to reach out via LinkedIn for faster response.
              </p>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          {/*
            <div className={`${themeClasses.cardBackground} p-8 rounded-xl shadow-lg border ${themeClasses.border} transition-colors duration-200`}>
              <h3 className={`text-xl font-bold ${themeClasses.textPrimary} mb-6 transition-colors duration-200`}>
                Send a Message
              </h3>
              
              <div className="space-y-6">
                
                <div>
                  <label className={`block text-sm font-medium ${themeClasses.textPrimary} mb-2 transition-colors duration-200`}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${themeClasses.cardBackground} ${themeClasses.textPrimary}`}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                
                <div>
                  <label className={`block text-sm font-medium ${themeClasses.textPrimary} mb-2 transition-colors duration-200`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 ${themeClasses.cardBackground} ${themeClasses.textPrimary}`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                
                <div>
                  <label className={`block text-sm font-medium ${themeClasses.textPrimary} mb-2 transition-colors duration-200`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className={`w-full px-4 py-3 border ${themeClasses.border} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none ${themeClasses.cardBackground} ${themeClasses.textPrimary}`}
                    placeholder="Tell me about your project or just say hello!"
                    required
                  />
                </div>
                
                
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>

              
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800 transition-colors duration-200">
                <p className="text-yellow-800 dark:text-yellow-200 text-sm transition-colors duration-200">
                  <strong>Note:</strong> This form needs integration with a service like Formspree, 
                  EmailJS, or Netlify Forms to actually send emails. See the component code for implementation details.
                </p>
              </div>
            </div>
          */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;