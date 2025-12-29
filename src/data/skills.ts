// src/data/skills.ts

export interface Skill {
  name: string;
  level: 'advanced' | 'proficient' | 'familiar';
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    skills: [
      { name: 'Java', level: 'advanced' },
      { name: 'TypeScript', level: 'advanced' },
      { name: 'C++', level: 'advanced' },
      { name: 'C#', level: 'advanced' },
      { name: 'Python', level: 'proficient' },
      { name: 'SQL', level: 'proficient' },
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Spring Boot', level: 'proficient' },
      { name: 'Spring AI', level: 'proficient' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'JPA/Hibernate', level: 'proficient' },
      { name: 'PostgreSQL', level: 'proficient' },
      { name: 'JUnit/Mockito', level: 'proficient' },
    ],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      { name: 'React', level: 'proficient' },
      { name: 'Tailwind CSS', level: 'proficient' },
      { name: 'Vite', level: 'proficient' },
      { name: 'HTML/CSS', level: 'advanced' },
    ],
  },
  {
    title: 'Tools & Practices',
    icon: 'Wrench',
    skills: [
      { name: 'Git/GitHub', level: 'advanced' },
      { name: 'Docker', level: 'familiar' },
      { name: 'Maven', level: 'proficient' },
      { name: 'Agile/Scrum', level: 'proficient' },
      { name: 'CI/CD', level: 'familiar' },
    ],
  },
  {
    title: 'Game Development',
    icon: 'Gamepad2',
    skills: [
      { name: 'Unity', level: 'advanced' },
      { name: 'Unreal Engine 5', level: 'proficient' },
      { name: 'Vulkan/OpenGL', level: 'proficient' },
      { name: 'ECS Architecture', level: 'proficient' },
    ],
  },
];

export const coreStrengths = [
  {
    title: 'Full-Stack Development',
    description: 'Building end-to-end applications with Spring Boot backends and React frontends',
    icon: 'Layers',
  },
  {
    title: 'AI Integration',
    description: 'Integrating LLMs into production applications using Spring AI and Ollama',
    icon: 'Brain',
  },
  {
    title: 'Systems Thinking',
    description: 'Designing modular, testable architectures from game engines to web services',
    icon: 'Network',
  },
  {
    title: 'Technical Leadership',
    description: 'Leading teams, conducting code reviews, and establishing development standards',
    icon: 'Users',
  },
];
