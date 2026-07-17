'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon, LeetcodeIcon } from '@/components/ui/SocialIcons';
import { SectionHeading } from '@/components/ui/SectionHeading';

const projects = [
  {
    id: 1,
    title: 'JobTracker',
    description: 'A full-stack job search management app with JWT authentication, status tracking (Applied, Interview, Offer, Rejected), interview scheduling, AI-powered resume analysis and cover letter generation via Gemini API, analytics dashboard, and CSV export.',
    tags: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Gemini API'],
    github: 'https://github.com/aarthiap3107/JobTracker',
    demo: 'https://job-tracker-orpin-two.vercel.app',
    bgGradient: 'linear-gradient(135deg, rgba(124,58,237,0.3) 0%, rgba(6,182,212,0.2) 100%)',
    accentColor: '#7C3AED',
    emoji: '💼',
  },
  {
    id: 2,
    title: 'Progress Potion',
    description: 'A personal life management and productivity app. Track habits, moods, journal entries, goals, sleep, and focus sessions — with an analytics dashboard featuring heatmaps and activity logs. Installable as a PWA.',
    tags: ['React', 'Supabase', 'PWA'],
    github: 'https://github.com/aarthiap3107/Progress-Potion',
    demo: 'https://progress-potion-h347.vercel.app',
    bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(124,58,237,0.2) 100%)',
    accentColor: '#F59E0B',
    emoji: '🧪',
  },
  {
    id: 3,
    title: 'AlgoVault',
    description: 'A Chrome Extension that auto-pushes accepted LeetCode solutions to GitHub on submission. Features versioned files, folder organization by difficulty or language, topic tags in commit messages, streak tracking, and desktop notifications.',
    tags: ['JavaScript', 'Chrome Extension', 'GitHub API'],
    github: 'https://github.com/aarthiap3107/AlgoVault',
    demo: '',
    bgGradient: 'linear-gradient(135deg, rgba(74,222,128,0.3) 0%, rgba(6,182,212,0.2) 100%)',
    accentColor: '#4ADE80',
    emoji: '',
  },
  {
    id: 4,
    title: 'Real Estate Listing',
    description: 'A full-stack platform for browsing, searching, and managing property listings. Supports user authentication, listing creation with image uploads, advanced filtering by location, price, and property type, and listing verification to prevent fraudulent posts.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/aarthiap3107/REAL-ESTATE',
    demo: '',
    bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(239,68,68,0.2) 100%)',
    accentColor: '#F59E0B',
    emoji: '🏠',
  },
  {
    id: 5,
    title: 'JURISAI',

    description: 'Final-year project — an AI-powered legal decision support system that analyzes case documents, extracts causal relationships, identifies legal entities, retrieves similar precedents, and provides explainable AI-driven insights using NLP and rule-based reasoning.',
    tags: ['Python', 'Flask', 'NLP', 'AI/ML'],
    github: '',
    demo: '',
    bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(124,58,237,0.2) 100%)',
    accentColor: '#6366F1',
    emoji: '📜',
  },
];

export function Projects() {

  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 60%)' }} />

      <div className="relative max-w-6xl mx-auto px-4">
        <SectionHeading
          title="Projects"
          highlight=""
        />

        {/* Projects grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden cursor-none"
                style={{
                  background: 'rgba(24, 24, 27, 0.6)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                  transition: 'box-shadow 0.3s, border-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = `${project.accentColor}30`;
                  el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${project.accentColor}10`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'rgba(255,255,255,0.07)';
                  el.style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
                }}
              >
                {/* Project thumbnail */}
                <div className="relative h-44 overflow-hidden" style={{ background: project.bgGradient }}>
                  {/* Abstract art for project preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.id === 3 ? (
                      <div className="flex items-center gap-3 opacity-30">
                        <LeetcodeIcon size={56} style={{ color: '#fff' }} />
                        <span className="text-white text-3xl font-bold">→</span>
                        <GithubIcon size={56} style={{ color: '#fff' }} />
                      </div>
                    ) : (
                      <span className="text-7xl opacity-30">{project.emoji}</span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                  {/* Hover overlay */}
                  {(project.github || project.demo) && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                      style={{ background: 'rgba(9,9,11,0.7)', backdropFilter: 'blur(4px)' }}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.1)',
                            border: '1px solid rgba(255,255,255,0.2)',
                            color: '#fff',
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon size={13} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all"
                          style={{
                            background: project.accentColor,
                            color: '#fff',
                          }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={13} /> Demo
                        </a>
                      )}
                    </div>
                  )}

                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-white/90 transition-colors"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#A1A1AA' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-lg text-xs"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#71717A' }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action links */}
                  {(project.github || project.demo) && (
                    <div className="flex gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-[#71717A] hover:text-white transition-colors">
                          <GithubIcon size={12} /> View Code
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs transition-colors"
                          style={{ color: project.accentColor }}>
                          <ExternalLink size={12} /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
