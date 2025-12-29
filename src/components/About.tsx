// src/components/About.tsx
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Target } from 'lucide-react';
import { profile } from '../data/profile';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-900/30">
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
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Bio */}
            <div className="space-y-6">
              {profile.about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-dark-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Current focus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="pt-4"
              >
                <h3 className="flex items-center gap-2 text-lg font-display font-semibold text-dark-100 mb-4">
                  <Target size={20} className="text-primary-500" />
                  Current Focus
                </h3>
                <ul className="space-y-2">
                  {profile.currentFocus.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-dark-400">
                      <span className="text-primary-500 mt-1.5">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Education & Experience cards */}
            <div className="space-y-6">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="card card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary-500/10">
                    <GraduationCap className="text-primary-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-dark-100 mb-1">
                      {profile.education.school}
                    </h3>
                    <p className="text-dark-400 text-sm mb-2">
                      {profile.education.degree}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="tag">GPA: {profile.education.gpa}</span>
                      <span className="tag">{profile.education.graduationDate}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {profile.education.awards.map((award) => (
                        <span key={award} className="tag-primary text-xs">
                          {award}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience */}
              {profile.experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="card card-hover p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary-500/10">
                      <Briefcase className="text-primary-500" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                        <h3 className="font-display font-semibold text-dark-100">
                          {exp.role}
                        </h3>
                        <span className="text-sm text-dark-500">{exp.dates}</span>
                      </div>
                      <p className="text-primary-400 text-sm mb-3">
                        {exp.company} · {exp.location}
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-dark-400">
                            <span className="text-primary-500 mt-0.5">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
