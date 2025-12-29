// src/components/Contact.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin } from 'lucide-react';
import { profile } from '../data/profile';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${profile.links.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      href: profile.links.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: profile.links.linkedin,
    },
  ];

  return (
    <section id="contact" className="section-padding">
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
              Let's Connect
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto mb-8">
              I'm currently open to full-stack software engineering opportunities. 
              Let's discuss how I can contribute to your team.
            </p>
            <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact cards - icon and label only */}
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label !== 'Email' ? '_blank' : undefined}
                  rel={method.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="card card-hover p-8 text-center group"
                >
                  <div className="inline-flex p-4 rounded-xl bg-primary-500/10 mb-4 group-hover:bg-primary-500/20 transition-colors">
                    <method.icon size={28} className="text-primary-500" />
                  </div>
                  <h3 className="font-display font-semibold text-dark-100 group-hover:text-primary-400 transition-colors">
                    {method.label}
                  </h3>
                </motion.a>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-center"
            >
              <div className="card p-8 lg:p-12">
                <div className="flex items-center justify-center gap-2 text-dark-500 mb-4">
                  <MapPin size={16} />
                  <span className="text-sm">New York, NY</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-dark-100 mb-4">
                  Ready to build something great?
                </h3>
                <p className="text-dark-400 mb-8 max-w-lg mx-auto">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>
                <a
                  href={`mailto:${profile.links.email}?subject=Let's Connect`}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Send size={18} />
                  Send me an email
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}