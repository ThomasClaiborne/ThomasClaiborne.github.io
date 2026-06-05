// src/components/Hero.tsx
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp, FileText, Github } from 'lucide-react';
import { profile } from '../data/profile';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl" />

      <div className="relative section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-dark-900/80 border border-dark-700 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm text-dark-300">Open to opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-dark-50"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-display text-dark-300"
          >
            {profile.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="max-w-2xl mx-auto text-lg text-dark-400"
          >
            {profile.tagline}
          </motion.p>

          {/* Tech badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 pt-4"
          >
            {(['Java', 'Spring Boot', 'React'] as const).map((tech) => (
              <span key={tech} className="tag-primary">
                {tech}
              </span>
            ))}
            {(['C#', '.NET', 'Angular', 'TypeScript', 'ASP.NET'] as const).map((tech) => (
              <span key={tech} className="tag-accent">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap justify-center items-start gap-4 pt-8"
          >
            <a href="#projects" className="btn-primary flex items-center gap-2">
              View Projects
              <ArrowDown size={18} />
            </a>
            
            {/* Resume button with bouncing arrow underneath */}
            <div className="flex flex-col items-center">
              <a
                href="/ThomasClaiborne_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <FileText size={18} />
                Resume
              </a>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-primary-500 mt-2"
              >
                <ArrowUp size={20} />
              </motion.div>
            </div>
            
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}