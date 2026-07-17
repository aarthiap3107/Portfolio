'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';

const activities = [
  {
    id: 1,
    role: 'Symposium Website Team Member',
    description: 'Collaborated with the development team to design and launch the department symposium website, increasing event visibility and registrations.',
    color: '#7C3AED',
    emoji: '🌐',
  },
  {
    id: 2,
    role: 'Event Coordinator — Hyperstrike',
    description: 'Led end-to-end coordination of an IPL-themed college event, including scheduling, logistics, and participant management.',
    color: '#06B6D4',
    emoji: '🏏',
  },
];

export function Activities() {
  const easing = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

  return (
    <section id="activities" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 40% at 30% 50%, rgba(124, 58, 237, 0.05) 0%, transparent 60%)' }} />

      <div className="relative max-w-5xl mx-auto px-4">
        <SectionHeading title="Activities" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {activities.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: easing }}
              className="relative p-5 rounded-2xl"
              style={{
                background: 'rgba(24, 24, 27, 0.6)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(20px)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${item.color}30`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
              }}
            >
              <div className="absolute top-0 left-5 right-5 h-px rounded-full opacity-60"
                style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                  style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                  {item.emoji}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {item.role}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#A1A1AA' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
