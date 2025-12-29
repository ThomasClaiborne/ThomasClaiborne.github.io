// src/components/Footer.tsx
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800 bg-dark-950">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-display font-bold text-dark-100 hover:text-primary-400 transition-colors">
              TC<span className="text-primary-500">.</span>
            </a>
            <p className="text-sm text-dark-500 mt-2">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-1 text-sm text-dark-500">
            <span>Built with</span>
            <Heart size={14} className="text-primary-500" />
            <span>using React, Tailwind & Framer Motion</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.links.email}`}
              className="text-dark-500 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
