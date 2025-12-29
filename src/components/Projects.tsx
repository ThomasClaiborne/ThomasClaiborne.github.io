// src/components/Projects.tsx
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Layers, Gamepad2, Cpu } from 'lucide-react';
import { projects, Project } from '../data/projects';

const categoryIcons = {
  fullstack: Layers,
  game: Gamepad2,
  systems: Cpu,
};

const categoryLabels = {
  fullstack: 'Full Stack',
  game: 'Game Dev',
  systems: 'Systems',
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = categoryIcons[project.category];

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`card card-hover overflow-hidden ${
        project.featured ? 'lg:col-span-2' : ''
      }`}
    >
      <div className={`p-6 lg:p-8 ${project.featured ? 'lg:flex lg:gap-8' : ''}`}>
        {/* Content */}
        <div className={`flex-1 ${project.featured ? 'lg:pr-8' : ''}`}>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1.5 rounded-md bg-primary-500/10">
                  <Icon size={16} className="text-primary-500" />
                </span>
                <span className="text-xs font-mono text-dark-500 uppercase tracking-wider">
                  {categoryLabels[project.category]}
                </span>
                {project.featured && (
                  <span className="px-2 py-0.5 text-xs font-mono bg-primary-500/20 text-primary-400 rounded">
                    Featured
                  </span>
                )}
              </div>
              <h3 className="text-xl lg:text-2xl font-display font-bold text-dark-100">
                {project.title}
              </h3>
            </div>
            
            {/* Links */}
            <div className="flex items-center gap-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 text-dark-400 hover:text-primary-400 hover:bg-dark-700 transition-all"
                  aria-label="View source code"
                >
                  <Github size={18} />
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-800 text-dark-400 hover:text-primary-400 hover:bg-dark-700 transition-all"
                  aria-label="View demo"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Tagline */}
          <p className="text-primary-400 font-medium mb-3">{project.tagline}</p>

          {/* Description */}
          <p className="text-dark-400 mb-4 leading-relaxed">{project.description}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex flex-wrap gap-4 mb-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <div className="text-lg font-display font-bold text-primary-400">
                    {metric.value}
                  </div>
                  <div className="text-xs text-dark-500">{metric.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Highlights - shown for featured projects */}
        {project.featured && (
          <div className="mt-6 lg:mt-0 lg:w-80 lg:border-l lg:border-dark-800 lg:pl-8">
            <h4 className="text-sm font-mono text-dark-500 uppercase tracking-wider mb-3">
              Key Highlights
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-dark-300">
                  <ChevronRight size={14} className="text-primary-500 mt-1 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'game' | 'systems'>('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark-50 mb-4">
              Featured Projects
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto mb-8">
              A selection of projects showcasing full-stack development, AI integration, and systems programming
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(['all', 'fullstack', 'game', 'systems'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-500 text-dark-950'
                    : 'bg-dark-800 text-dark-400 hover:bg-dark-700 hover:text-dark-200'
                }`}
              >
                {category === 'all' ? 'All Projects' : categoryLabels[category]}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
