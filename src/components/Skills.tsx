// src/components/Skills.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, Server, Layout, Wrench, Gamepad2, 
  Layers, Brain, Network, Users,
  LucideIcon
} from 'lucide-react';
import { skillCategories, coreStrengths } from '../data/skills';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Layout,
  Wrench,
  Gamepad2,
  Layers,
  Brain,
  Network,
  Users,
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-dark-50 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto mb-8">
              From full-stack web development to systems programming, with a strong foundation in software architecture
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          {/* Core strengths */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {coreStrengths.map((strength, index) => {
              const Icon = iconMap[strength.icon];
              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center p-6 rounded-xl bg-dark-900/50 border border-dark-800 hover:border-primary-500/30 transition-colors"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary-500/10 mb-4">
                    <Icon size={24} className="text-primary-500" />
                  </div>
                  <h3 className="font-display font-semibold text-dark-100 mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-sm text-dark-400">{strength.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Skill categories - clean tag layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, catIndex) => {
              const Icon = iconMap[category.icon];
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + catIndex * 0.1, duration: 0.5 }}
                  className="card p-6"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-primary-500/10">
                      <Icon size={20} className="text-primary-500" />
                    </div>
                    <h3 className="font-display font-semibold text-dark-100">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1.5 text-sm bg-dark-800 text-dark-300 rounded-lg hover:bg-dark-700 hover:text-dark-200 transition-colors"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}