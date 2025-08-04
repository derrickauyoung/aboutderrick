// Personal Information Configuration
// This file contains all your personal data that populates the website
// Update this file whenever you want to change content without touching React components

export const personalData = {
  // Basic Information - Update these with your actual details
  name: "Derrick Auyoung",
  tagline: "Animation and Technology Product Leader and Software Engineer",
  description: "I have 22 years of experience in Animation and Visual Effects Technology, working as a pipeline TD, software engineer, head of Motion R&D, and engagement supervisor. I have a passion for empowering users to overcome their technical challenges and achieve their creative goals. I am currently seeking new opportunities to leverage my skills and experience in a dynamic and innovative environment.",
  initials: "DA", // Used for the profile circle if no image is provided
  resume: "/Resume_DerrickAuyoung_2025-StaffSoftwareEngineer.pdf",

  // About Section - Tell your professional story
  about: {
    title: "My Journey",
    tagline: "Passionate about art and technology, driven by curiosity and learning.",
    paragraphs: [
      "With a background in computer science and over two decades of hands-on experience, I've developed a deep understanding of Animation tools, workflows, and pipeline technologies. My journey started with curiosity about how VFX was made since the first Jurassic Park premiered in theaters, and it has evolved into a passion for contributing to fantastic visual and interactive experiences.",
      "I believe in open and transparent communication, continuous improvement, writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding or decomposing problems into roadmaps and work items, you can find me mentoring other developers, or exploring new technologies and approaches."
    ],
    // Statistics to showcase your achievements - update numbers as you grow
    stats: [
      { number: "45", label: "Projects (Films, TV series, Interactive Experiences) Delivered" },
      { number: "22+", label: "Years Experience" },
      { number: "100%", label: "Dedication" }
    ],
    approach: "I believe in continuous learning and staying curious about new technologies. My goal is to create solutions that make a meaningful impact. Whether it's improving user experience, optimizing performance, or solving complex problems, I approach each project with empathy, enthusiasm and attention to detail."
  },

  // Skills Section - organized by category with proficiency levels (0-100)
  // Adjust percentages honestly based on your actual skill level
  skills: {
    frontend: [
      { skill: 'PyQt/PySide', level: 95 },
      { skill: 'HTML/CSS', level: 90 },
    ],
    backend: [
     { skill: 'Python', level: 90 },
     { skill: 'MEL', level: 95 },
     { skill: 'C++', level: 85 },
    ],
    tools: [
      { skill: 'Autodesk Maya', level: 95},
      { skill: 'Git/Gitlab/GitHub', level: 95 },
      { skill: 'Jira', level: 95 },
      { skill: 'Confluence', level: 90 },
      { skill: 'Testing/CI/CD', level: 80 },
    ],
  },

  // Portfolio Projects - Replace these with your actual projects
  // Add as many projects as you want by adding new objects to this array
  projects_text: {
    tagline: "Roles I've held in Animation and Technology",
    endline: "These are just a few highlights of my career. I have many more projects and experiments on my GitHub profile.",
  },

  projects: [
    {
      title: 'Software Engineering for Animation and VFX',
      category: 'Engineering',
      description: 'Expertise in developing technical solutions for Animators delivering blockbuster visual effects and character performances.',
      technologies: ['PySide', 'Python', 'C++', 'Jira API'],
      demoUrl: 'https://your-demo-url.com',
      codeUrl: 'https://github.com/yourusername/project',
      gradient: 'from-blue-400 to-blue-600', // Tailwind gradient classes
      projectitems: [
        {
          title: 'Chronos Motion Pipeline Tool',
          description: 'Lead developer at Wētā Digital on the next-generation motion asset browser for Motion artists for the Avatar sequels, built with PySide2 and Python, that integrates with Autodesk Maya to streamline the animation workflow.',
          outcome: 'More efficient asset management, retrieval, and publishing for animators, leading to faster iteration and higher quality performances for The Hobbit: Desolation of Smaug and The Planet of the Apes trilogy.',
        },
        {
          title: 'Traderock Auction',
          description: 'Wrote a functional sell/bid auction site served on github and supabase with JavaScript.',
          outcome: 'Sold 100 personal items when relocating countries in 2025.',
          codeUrl: 'https://github.com/derrickauyoung/traderock',
        },
        {
          title: 'About Derrick',
          description: 'Wrote this personal portfolio site served on github with React.',
          outcome: 'Learned React in 2025, and well, you've made it here!',
          codeUrl: 'https://github.com/derrickauyoung/aboutderrick',
        },
        {
          title: 'One-Stop Shop for Animation',
          description: 'Developed a comprehensive tool that consolidates various animation inputs from the pipeline into a single interface, improving efficiency and user experience for animators.',
          outcome: 'More efficient workflow and reduced context switching for artists on The Adventures of Tintin (2011).',
        },
        {
          title: 'Jira Cloud Migration',
          description: 'Updating our current support ticketing system from Jira Server to Jira Cloud, to modernize and streamline Domain Technology support.',
          outcome: 'Improved reliability, performance, and access to new features for the team.',
        },
      ]
    },
    {
      title: 'Engineering Management',
      category: 'Management',
      description: 'As Head of Motion R&D at Wētā FX, I had 8 years of people management experience with a team of 17 engineers.',
      technologies: ['Workday', 'Greenhouse', 'Outlook', 'Teams'],
      demoUrl: 'https://your-demo-url.com',
      codeUrl: 'https://github.com/yourusername/project',
      gradient: 'from-green-400 to-green-600',
      projectitems: [
        {
          title: 'Strategic Direction and Planning',
          description: 'Gathered requirements and established vision for Animation technology and pipeline.',
          outcome: 'At Wētā FX, served as Primary Stakeholder for the modern refactor of the Chronos (Motion Pipeline Tool) project.',
        },
        {
          title: 'Team Leadership and Development',
          description: 'Mentored and coached engineers, fostering a collaborative and innovative team culture.',
          outcome: 'Led the Motion R&D team to consistently deliver impactful tools and solutions for artists for blockbuster films, like integrating GPU cached representations of Maya rigging to recover scene performance.',
        },
        {
          title: 'Cross-Department Collaboration',
          description: 'Worked closely with Production, VFX Supervisors, and other departments to align technology solutions with creative needs.',
          outcome: 'Upheld high standards of collaboration, resulting in successful integration of ML Facial research technology into production for Avatar: The Way of Water.',
        },
        {
          title: 'Recruitment and Hiring',
          description: 'Led hiring efforts to build a strong, diverse team of engineers.',
          outcome: 'Rebuilt crew numbers after multiple company reorganizations and attrition, maintaining a high-performing team.',
        },
      ],
    },
    {
      title: 'Product Management',
      category: 'Product',
      description: 'As Head of Motion R&D and Engagement Supervisor at Wētā FX, I managed products in the Animation and Domain Technology space to translate and prioritize day-to-day challenges faced by artists into technology improvement roadmaps.',
      technologies: ['Jira', 'Jira Automation', 'Confluence', 'Grafana'],
      demoUrl: 'https://your-demo-url.com',
      codeUrl: 'https://github.com/yourusername/project',
      gradient: 'from-purple-400 to-purple-600',
      projectitems: [
        {
          title: 'Roadmap Development',
          description: 'Created and maintained product roadmaps for Animation tools and pipeline, aligning with studio objectives and artist needs.',
          outcome: 'Successfully delivered efficiency initiatives for major projects like Guardians of the Galaxy 3, Avatar: The Way of Water, and Kingdom of the Planet of the Apes, that enhanced artist productivity and satisfaction.',
        },
        {
          title: 'Stakeholder Engagement',
          description: 'Collaborated with artists, supervisors, and other stakeholders to gather feedback and prioritize features.',
          outcome: 'Ensured that product development was closely aligned and adapted with user needs and studio goals, successfully delivering new pipelines and tooling.',
        },
        {
          title: 'Agile Methodologies',
          description: 'Implemented Agile practices to improve team efficiency and responsiveness to changing requirements.',
          outcome: 'Enhanced team collaboration and delivery speed since 2016, resulting in more frequent and reliable releases of tools and features.',
        },
        {
          title: 'Metrics and Reporting',
          description: 'Tracked and analyzed product performance, stability and user satisfaction to inform future development.',
          outcome: 'Leveraged data-driven insights using instrumentation and grafana dashboards, to continuously improve products and demonstrate value to stakeholders.',
        },
      ],
    },
    // Add more projects here as needed
    // {
    //   title: 'Your Next Project',
    //   description: 'Description of your project...',
    //   technologies: ['Tech1', 'Tech2', 'Tech3'],
    //   demoUrl: 'https://your-demo-url.com',
    //   codeUrl: 'https://github.com/yourusername/project',
    //   gradient: 'from-red-400 to-red-600'
    // }
  ],

  // Contact Information - Update with your actual contact details
  contact: {
    email: "derrick.auyoung@gmail.com",
    phone: "+1 (951) 326-6847",
    location: "Temecula, CA, USA",
    // Social media links - replace # with your actual URLs
    social: {
      github: "https://github.com/derrickauyoung",
      linkedin: "https://www.linkedin.com/in/derrick-auyoung-0956162/",
      imdb: "https://www.imdb.com/name/nm1652099"
    }
  },

  // Navigation sections - these correspond to the section IDs in your website
  // You can add or remove sections here, but make sure to update the components accordingly
  navigation: ['home', 'about', 'skills', 'portfolio', 'contact']
};

// Export individual sections if you need them separately
export const { name, tagline, description, about, skills, projects, contact, navigation } = personalData;