// Personal Information Configuration
import { apes , aslan01, aslan02, museum01, museum02, museum03 } from '../assets/animReel';

export const personalData = {
  // Basic Information - Update these with your actual details
  name: "Derrick Auyoung",
  tagline: "Animation and Technology Product Leader and Software Engineer",
  description: "I have 22 years of experience in Animation and Visual Effects Technology, working as a software engineer, motion R&D head of department, and product manager. I am dedicated to help users and organizations overcome their technical challenges and achieve their creative goals.",
  jobseekline: "I am currently seeking new opportunities to leverage my unique skillset in a dynamic and innovative environment.",
  initials: "DA", // Used for the profile circle if no image is provided
  resume: "DerrickAuyoung_Resume.pdf", // Path to resume file in the public folder

  // About Section - Tell your professional story
  about: {
    title: "My Journey",
    tagline: "Expertise as an Engineer, Motion R&D Head of Department, and Product Manager in Animation Technology",
    paragraphs: [
      "With a background in computer science and over two decades of hands-on experience, I've gained a deep understanding of Animation tools, workflows, and pipeline technologies. My journey started when I saw the first 'Jurassic Park' in theaters, and it has evolved into a passion for contributing to fantastic visual and interactive media.",
      "I believe in open and transparent communication, continuous improvement, writing clean, maintainable code and staying up-to-date with the latest industry trends. When I'm not coding or clarifying problems into roadmaps and work items, you can find me mentoring other developers, or exploring new technologies and approaches.",
      "Outside of work, I enjoy watching films, playing video games, and spending time with my family. I also love to travel, bake sourdough bread, and practice Shaolin Gung Fu.",
    ],
    // Statistics to showcase your achievements - update numbers as you grow
    stats: [
      { number: "45", label: "Projects (Films/TV series/ Interactive) Delivered" },
      { number: "22+", label: "Years Experience (8+ R&D and Product Management / 14 Engineering)" },
      { number: "100%", label: "Dedication" },
    ],
    approach: "My goal is to deliver impact by improving user experience, optimizing performance, or solving complex problems, and I approach each project with empathy, enthusiasm and attention to detail."
  },

  // Skills Section - organized by category with proficiency levels (0-100)
  // Adjust percentages honestly based on your actual skill level
  skills: {
    tagline: "Here are the technologies and tools I use to bring ideas into reality.",
    frontend: [
      { skill: 'PyQt/PySide', level: 95 },
      { skill: 'HTML/CSS', level: 90 },
      { skill: 'Javascript', level: 85 },
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
    learning: [
      { skill: 'React', level: 50 },
      { skill: 'Houdini/Solaris/USD', level: 45},
      { skill: 'Unreal Engine', level: 35},
      { skill: 'Roblox/lua', level: 35},
      { skill: 'Unity/C#', level: 30},
      { skill: 'Machine Learning/AI', level: 20},
    ]
  },

  // Portfolio Projects - Replace these with your actual projects
  // Add as many projects as you want by adding new objects to this array
  projects_text: {
    tagline: "I have the unique perspectives of professionally working as an Engineer, R&D Manager, and a Product Manager in Animation Technology. Coupled with my experience as a Character Animator, I understand the challenges faced by artists, engineers, and the business.",
    animtagline: "My roles and achievements below in Engineering, Management, and Product have been directly informed by my experience in Animation as a Character Animator on 'Rise of the Planet of the Apes' (Weta Digital), 'Night at the Museum' (Rhythm & Hues), and 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe' (Rhythm & Hues).",
    endline: "These are just a few highlights of my career. I have more projects and experiments on my GitHub profile.",
  },

  animReel: {
    tagline: "Highlights from my Animation Demo Reel.",
    projectItems: [
      {
        title: "Rise of the Planet of the Apes (2011)",
        image: apes,
        description: "Worked as a Character Animator on Caesar and the villain in these two shots.",
      },
      {
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005)",
        image: aslan01,
        description: "Keyframe animated the ropes on Aslan",
      },
      {
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe (2005)",
        image: aslan02,
        description: "Keyframe animated the ropes on Aslan",
      },
      {
        title: "Night at the Museum (2006)",
        image: museum01,
        description: "Keyframe animated the Zebra and Oryx walk cycles.",
      },
      {
        title: "Night at the Museum (2006)",
        image: museum02,
        description: "Assembled and edited Motion Capture for Crowd Diorama shots.",
      },
      {
        title: "Night at the Museum (2006)",
        image: museum03,
        description: "Assembled and edited Motion Capture for Crowd Diorama shots.",
      },
    ],
  },
  projects: [
    {
      title: 'Software Engineering for Animation and VFX',
      category: 'Engineering',
      description: 'Expertise in developing technical solutions for Animators delivering blockbuster visual effects and character performances.',
      technologies: ['PySide', 'Python', 'C++', 'Jira API', 'JavaScript', 'React'],
      demoUrl: 'https://your-demo-url.com',
      codeUrl: 'https://github.com/yourusername/project',
      gradient: 'from-blue-400 to-blue-600', // Tailwind gradient classes
      projectItems: [
        {
          title: 'Chronos Motion Pipeline Tool',
          description: 'Lead developer at Wētā Digital on the next-generation motion asset browser for Motion artists for the Avatar sequels, built with PySide2 and Python, that integrates with Autodesk Maya to streamline the animation workflow.',
          details: [
            'More efficient asset management, retrieval, and publishing for animators',
            'Led to faster iteration and higher quality performances for:',
            '   The Hobbit: Desolation of Smaug (2013)',
            '   The Planet of the Apes trilogy (2011-2017)',
          ],
          technologies: ['PySide2', 'Python'],
        },
        {
          title: 'One-Stop Shop for Animation',
          description: 'Developed a comprehensive Python tool (to replace a legacy MEL publish UI) that consolidates various animation inputs from the pipeline into a single interface, improving efficiency and user experience for animators.',
          details: [
            'More efficient workflow and reduced context switching for artists on:',
            '   The Adventures of Tintin (2011)',
            '   Rise of the Planet of the Apes (2011)',
            '   X-Men: First Class (2011)',
          ],
          technologies: ['PySide2', 'Python'],
        },
        {
          title: 'spReticle Update',
          description: 'Repaired legacy spReticle instance at Wētā to work with viewport 2.0 and upgraded to latest open source features in C++.',
          details: [
            'Less maintenance of broken legacy software',
            'Documented approach and current state for the company',
            'Improved practical C++ and openGL knowledge',
          ],
          technologies: ['C++', 'OpenGL'],
        },
        {
          title: 'Jira Cloud Migration',
          description: 'Updating our current support ticketing system in python from Jira Server to Jira Cloud, to modernize and streamline Domain Technology support.',
          details: [
            'Forward progress on cleaning technical debt',
            'Improved reliability, performance, and access to new features for the team.',
          ],
          technologies: ['Python', 'Pyside2', 'Jira API'],
        },
        {
          title: 'Traderock Auction',
          description: 'Wrote a functional sell/bid auction site served on github and supabase with JavaScript.',
          details: [
            'Sold 100 personal items when relocating countries in 2025',
            'Learned about full stack development with JavaScript and Supabase.',
          ],
          technologies: ['JavaScript', 'Supabase'],
          codeUrl: 'https://github.com/derrickauyoung/traderock',
        },
        {
          title: 'About Derrick',
          description: 'Wrote this personal portfolio site served on github with React.',
          details: [
            "Learned React in 2025, and well, you've made it here!",
          ],
          technologies: ['React'],
          codeUrl: 'https://github.com/derrickauyoung/aboutderrick',
        },
        {
          title: 'Kubb: First Roblox Game',
          description: 'Created my first Roblox game, a casual sports game based on the Scandinavian lawn game Kubb, using Roblox Studio and Lua scripting.',
          details: [
            'Learned lua and roblox studio platform',
            'Intro to game design and user interaction',
          ],
          technologies: ['Roblox Studio', 'Lua'],
          demoUrl: 'https://youtu.be/64NiKmW_I5I?si=X3WY_RWunXb7W_FJ',
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
      projectItems: [
        {
          title: 'Strategic Direction and Planning',
          description: 'Gathered requirements and established vision for Animation technology and pipeline.',
          details: [
            'Established a clear vision and roadmap for the Motion R&D team',
            'Aligned work with studio goals and artist needs',
            'Served as Primary Stakeholder for modern refactor of the Chronos (Motion Pipeline Tool) project',
          ],
          technologies: ['Jira', 'Confluence', 'Outlook', 'Teams'],
        },
        {
          title: 'Cross-Department Collaboration',
          description: 'Worked closely with Production, VFX Supervisors, and other departments to align technology solutions with creative needs.',
          details: [
            'Upheld high standards of collaboration',
            'Led teams to deliver research ML prototypes and integrate into productions for:',
            '   AI Motion Library Search',
            '   ML Facial for Avatar: The Way of Water',
            'Led engineers to port VFX Animation pipeline data to Unreal Engine for the Meerkat experience, The Matrix Awakens, Fortnite and Overwatch shorts.',
          ],
          technologies: ['Outlook', 'Teams', 'Jira', 'Confluence'],
        },
        {
          title: 'Team Leadership and Development',
          description: 'Mentored and coached engineers, fostering a collaborative and innovative team culture.',
          details: [
            'Led the Motion R&D team to consistently deliver impactful tools and solutions for artists',
            'Established workflow to increase scene performance by integrating GPU cached representations of Maya rigging',
          ],
          technologies: ['Jira', 'Confluence', 'Outlook', 'Teams'],
        },
        {
          title: 'Recruitment and Hiring',
          description: 'Led hiring efforts to build a strong, diverse team of engineers.',
          details: [
            'Rebuilt and retained high crew numbers after multiple company reorganizations and attrition',
            'Maintained a high-performing team',
          ],
          technologies: ['Workday', 'Greenhouse', 'Outlook', 'Teams'],
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
      projectItems: [
        {
          title: 'Roadmap Development',
          description: 'Created and maintained product roadmaps for Animation tools and pipeline, aligning with studio objectives and artist needs.',
          details: [
            'Led teams to deliver research ML prototypes and integrate into production for:',
            '   AI Motion Library Search',
            '   ML Facial for Avatar: The Way of Water',
            'Successfully delivered efficiency initiatives for major projects:',
            '   Guardians of the Galaxy 3',
            '   Avatar: The Way of Water',
            '   Kingdom of the Planet of the Apes',
            'Enhanced artist productivity and satisfaction (20%).',
          ],
          technologies: ['Jira', 'Confluence'],
        },
        {
          title: 'Stakeholder Engagement',
          description: 'Collaborated with artists, supervisors, and other stakeholders to gather feedback and prioritize features.',
          details: [
            'Ensured that product development was closely aligned with user needs',
            'Adapted to studio objectives',
            'Successfully delivered new pipelines and tooling for 18 major movies and TV series',
          ],
          technologies: ['Outlook', 'Teams', 'Jira', 'Confluence'],
        },
        {
          title: 'Agile Methodologies',
          description: 'Implemented Agile practices to improve team efficiency and responsiveness to changing requirements.',
          details: [
            'Enhanced team collaboration and delivery speed with regular standups since 2016',
            'Resulted in more frequent and reliable releases of tools and features',
            'Standardized reporting and documentation via Confluence',
          ],
          technologies: ['Teams', 'Jira', 'Confluence'],
        },
        {
          title: 'Metrics and Reporting',
          description: 'Tracked and analyzed product performance, stability and user satisfaction to inform future development.',
          details: [
            'Leveraged data-driven insights using instrumentation and grafana dashboards',
            'Garnered resources for a pipeline refactor in 2024',
            'Continuously improved products and demonstrate value to stakeholders.',
          ],
          technologies: ['Grafana', 'Jira', 'Confluence'],
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
  navigation: ['home', 'about', 'skills', 'portfolio', 'reel', 'contact']
};

// Export individual sections if you need them separately
export const { name, tagline, description, about, skills, projects, contact, navigation } = personalData;