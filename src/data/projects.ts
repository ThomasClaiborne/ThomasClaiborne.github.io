// src/data/projects.ts
// Centralized project data - easy to update without touching components

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'fullstack' | 'game' | 'systems';
  featured: boolean;
  techStack: string[];
  highlights: string[];
  links: {
    github?: string;
    demo?: string;
    video?: string;
  };
  image?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: 'ai-note-cleaner',
    title: 'AI Note Cleaner',
    tagline: 'Full-stack AI-powered note transformation',
    description: 'A production-ready web application that transforms messy notes into structured, readable content using local LLM integration. Features a Spring Boot backend with RESTful API, React frontend, and comprehensive test coverage.',
    category: 'fullstack',
    featured: true,
    techStack: ['Java 21', 'Spring Boot 3.4', 'Spring AI', 'React 18', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Ollama'],
    highlights: [
      'Built layered architecture with JPA entities, DTOs, and Spring Data repositories',
      'Integrated Ollama (Llama 3.2) via Spring AI for intelligent text processing',
      'Implemented 28 unit/integration tests with JUnit 5, Mockito, and MockMvc',
      'Designed RESTful API with global exception handling and input validation',
    ],
    links: {
      github: 'https://github.com/ThomasClaiborne/ai-note-cleaner',
    },
    metrics: [
      { label: 'Test Coverage', value: '28 tests' },
      { label: 'API Endpoints', value: '2 REST' },
      { label: 'Components', value: '8 React' },
    ],
  },
  {
    id: 'ascension-zero',
    title: 'Ascension Zero',
    tagline: 'Led 10-person team on Unreal Engine 5 RPG',
    description: 'A third-person fighter RPG with deep progression systems. As Lead Gameplay Programmer, I established component-based architecture, conducted code reviews, and coordinated cross-functional teams.',
    category: 'game',
    featured: true,
    techStack: ['C++', 'Unreal Engine 5', 'Blueprints'],
    highlights: [
      'Led team of 10 developers, establishing coding standards and architecture patterns',
      'Designed modular combat system with state machines and data-driven combos',
      'Implemented target lock-on with intelligent magnetism for fluid combat feel',
      'Created comprehensive technical design documentation',
    ],
    links: {
      github: 'https://github.com/ThomasClaiborne',
    },
    metrics: [
      { label: 'Team Size', value: '10 devs' },
      { label: 'Duration', value: '2 months' },
    ],
  },
  {
    id: 'jumping-jack',
    title: 'Jumping Jack',
    tagline: 'Custom Vulkan renderer with ECS architecture',
    description: 'A precision platformer built from scratch using Vulkan 3D API for rendering and EnTT for entity-component-system architecture. Focus on low-level graphics programming and performance optimization.',
    category: 'systems',
    featured: false,
    techStack: ['C++', 'Vulkan', 'EnTT (ECS)', 'CMake'],
    highlights: [
      'Built custom rendering pipeline with Vulkan 3D API',
      'Implemented pixel-perfect collision detection',
      'Optimized HUD system with entity pooling to reduce memory allocation',
    ],
    links: {
      github: 'https://github.com/ThomasClaiborne',
    },
  },
  {
    id: 'era-code',
    title: 'Era Code',
    tagline: 'Solo-developed tower defense game in 4 weeks',
    description: 'A top-down defense shooter with configurable wave systems, weapon progression, and persistent save/load functionality. Developed entirely solo during Devtober game jam.',
    category: 'game',
    featured: false,
    techStack: ['C#', 'Unity', 'ScriptableObjects'],
    highlights: [
      'Engineered data-driven wave spawning system',
      'Built comprehensive weapon system with upgrades and economy',
      'Implemented persistent save/load across sessions',
    ],
    links: {
      github: 'https://github.com/ThomasClaiborne',
    },
    metrics: [
      { label: 'Solo Dev', value: '4 weeks' },
    ],
  },
];

export const featuredProjects = projects.filter(p => p.featured);
export const allProjects = projects;