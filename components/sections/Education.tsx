'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Engineering',
    field: 'Computer Science & Engineering',
    institution: 'Meenakshi Sundararajan Engineering College',
    location: 'Chennai, India',
    duration: '2022 – 2026',
    gpa: '8.55 / 10',
    color: '#7C3AED',
    icon: '🎓',
  },
  {
    id: 2,
    degree: 'CBSE (12th Grade)',
    field: 'Science Stream',
    institution: 'D A V Girls Senior Secondary School ',
    location: 'Chennai, India',
    duration: '2021 – 2022',
    gpa: '81.2%',
    color: '#06B6D4',
    icon: '📚',
  },
  {
    id: 3,
    degree: 'CBSE (10th Grade)',
    field: 'General Education',
    institution: 'D A V Girls Senior Secondary School',
    location: 'Chennai, India',
    duration: '2019 – 2020',
    gpa: '91.4%',
    color: '#F59E0B',
    icon: '🏫',
  },
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="education" ref={containerRef} className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 50% 50% at 20% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-4">
        <SectionHeading
          title="Education"
          highlight=""
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: 'rgba(255,255,255,0.05)' }}>
            <motion.div
              style={{
                height: lineHeight,
                background: 'linear-gradient(180deg, #7C3AED, #06B6D4, #F59E0B)',
                boxShadow: '0 0 10px rgba(124, 58, 237, 0.5)',
              }}
              className="w-full"
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-16">
            {educationData.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg"
                      style={{
                        background: `${item.color}20`,
                        border: `2px solid ${item.color}`,
                        boxShadow: `0 0 20px ${item.color}40, 0 0 40px ${item.color}15`,
                      }}
                    >
                      <span>{item.icon}</span>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'}`}
                  >
                    <div
                      className="relative p-6 rounded-2xl group card-hover"
                      style={{
                        background: 'rgba(24, 24, 27, 0.6)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        boxShadow: '0 4px 30px rgba(0,0,0,0.3)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${item.color}30`;
                        (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 30px rgba(0,0,0,0.3), 0 0 30px ${item.color}10`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 30px rgba(0,0,0,0.3)';
                      }}
                    >
                      {/* Color accent top bar */}
                      <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-60"
                        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg md:hidden"
                          style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-0.5" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            {item.degree}
                          </h3>
                          <p className="text-sm font-medium mb-1" style={{ color: item.color }}>
                            {item.field}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3 mb-3 text-xs" style={{ color: '#71717A' }}>
                        <span className="flex items-center gap-1">
                          <GraduationCap size={11} />
                          {item.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={11} />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={11} />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star size={11} style={{ color: item.color }} />
                          GPA: {item.gpa}
                        </span>
                      </div>

                      

                      
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
