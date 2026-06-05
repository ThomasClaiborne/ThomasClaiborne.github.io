// src/data/profile.ts

export const profile = {
  name: 'Thomas Claiborne III',
  title: 'Software Engineer',
  tagline: 'Building production full-stack applications with modern enterprise technologies',

  about: {
    short: 'Full-stack engineer with a unique background in game development, bringing systems thinking and performance optimization skills to web applications.',

    paragraphs: [
      `I'm a software engineer transitioned from game development to full-stack engineering, bringing deep experience in C++, architecture design, and performance-critical systems to modern web development.`,

      `At TheNetVR, I refactored legacy VR systems into component-based architectures that became team-wide standards. I now apply that same systems thinking as a C# .NET Developer at Neuberger Berman, building full-stack applications with Angular and ASP.NET Web API in a regulated financial environment.`,

      `My game development background gives me unique strengths: I'm comfortable with low-level optimization, state management, and building complex interactive systems. I've led teams of 10+ developers and established coding standards across multiple projects.`,
    ],
  },

  education: {
    school: 'Full Sail University',
    degree: 'Bachelor of Science in Game Development',
    gpa: '3.66',
    graduationDate: 'May 2025',
    awards: ['3 Course Director Awards'],
  },

  experience: [
    {
      company: 'Genesis10 · Placed at Neuberger Berman',
      role: 'C# .NET Developer Consultant',
      location: 'New York, NY',
      dates: 'June 2026 – Present',
      highlights: [
        'Supporting Private Wealth Management Technology team',
        'Building full-stack applications with Angular and ASP.NET Web API',
        'Operating in a FINRA-regulated enterprise environment',
      ],
    },
    {
      company: 'Dev10 (Genesis10)',
      role: 'Software Engineer in Training',
      location: 'Remote',
      dates: 'March 2026 – June 2026',
      highlights: [
        'Completed 12-module full-stack engineering program covering Java, Spring Boot, SQL, React, and security',
        'Built layered Java applications with the repository pattern, JUnit/Mockito testing, and Spring MVC REST APIs',
        'Developed React frontends with hooks, React Router, controlled forms, and Fetch API integration',
        'Implemented JWT authentication, BCrypt password hashing, and ownership-based authorization',
      ],
    },
    {
      company: 'TheNetVR',
      role: 'Software Developer Intern',
      location: 'New York, NY',
      dates: 'Sept 2024 - Mar 2025',
      highlights: [
        'Refactored legacy architecture into independently testable components',
        'Established component-based patterns adopted across multiple teams',
        'Developed real-time VR systems with C# and Unity',
        'Led weekly cross-functional syncs',
      ],
    },
  ],

  links: {
    github: 'https://github.com/ThomasClaiborne',
    linkedin: 'https://linkedin.com/in/trc3',
    email: 'thomasclaiborne.dev@gmail.com',
  },

  currentFocus: [
    'C# .NET and Angular development',
    'Financial services enterprise software',
    'AI-native engineering workflows',
  ],
};
