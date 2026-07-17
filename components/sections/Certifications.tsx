'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    id: 1,
    title: 'Python for Data Science',
    issuer: 'NPTEL — IIT Madras',
    date: 'Jan – Feb 2025',
    badge: 'Elite',
    color: '#F59E0B',
    link: '/certificates/python%20for%20data%20science.pdf',
  },
  {
    id: 2,
    title: 'SQL (Basic & Intermediate)',
    issuer: 'HackerRank',
    date: '2025',
    badge: 'Verified',
    color: '#4ADE80',
    link: '/certificates/sql_intermediate%20certificate.pdf',
  },
  {
    id: 3,
    title: 'Artificial Intelligence Workshop',
    issuer: 'Techgyan Technologies at IIT Madras',
    date: 'Jan 2025',
    badge: 'Participation',
    color: '#06B6D4',
    link: '/certificates/ai%20workshop.jpeg',
  },
  {
    id: 4,
    title: 'MongoDB Basics for Students',
    issuer: 'MongoDB',
    date: '2025',
    badge: 'Certified',
    color: '#4ADE80',
    link: '/certificates/mongodb1%20%281%29.pdf',
  },
  {
    id: 5,
    title: 'Young Turks 2025',
    issuer: 'Naukri Campus',
    date: '2025',
    badge: 'Qualified',
    color: '#7C3AED',
    link: '/certificates/young_turks25_round_1_achievement.pdf',
  },
  {
    id: 6,
    title: 'Codevolt \'25',
    issuer: 'Raptee.HV × VIT Chennai',
    date: '2025',
    badge: 'Participant',
    color: '#06B6D4',
    link: '/certificates/hackathon.pdf',
  },
];

export function Certifications() {
  const easing = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

  return (
    <section id="certifications" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 70% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 60%)' }} />

      <div className="relative max-w-5xl mx-auto px-4">
        <SectionHeading title="Certifications" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ gridAutoRows: '1fr' }}>
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: easing }}
              className="relative p-7 rounded-2xl h-full"
              style={{
                background: 'rgba(24, 24, 27, 0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              <div className="absolute top-0 left-7 right-7 h-px rounded-full opacity-60"
                style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {cert.title}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: '#71717A' }}>{cert.issuer}</p>
                  <p className="text-xs" style={{ color: '#52525B' }}>{cert.date}</p>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}30`, color: cert.color }}>
                    {cert.badge}
                  </span>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs transition-colors hover:text-white"
                      style={{ color: '#A1A1AA' }}
                    >
                      <ExternalLink size={11} /> View
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
