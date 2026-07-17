'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Download, Mail, ExternalLink } from 'lucide-react';
import { LeetcodeIcon, HackerRankIcon } from '@/components/ui/SocialIcons';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const spotY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Mouse spotlight
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  };

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Cursor spotlight */}
      <motion.div
        className="fixed pointer-events-none z-0 hidden md:block"
        style={{
          left: spotX,
          top: spotY,
          translateX: '-50%',
          translateY: '-50%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(124, 58, 237, 0.15) 0%, transparent 60%)' }} />

      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 animate-blob"
        style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 animate-blob"
        style={{ background: 'radial-gradient(circle, #06B6D4, transparent 70%)', filter: 'blur(80px)', animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 animate-blob"
        style={{ background: 'radial-gradient(circle, #F59E0B, transparent 70%)', filter: 'blur(100px)', animationDelay: '-8s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="flex justify-center min-h-[80vh] items-center">

          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center max-w-3xl w-full"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-2"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                <span className="text-white">Hi, I&apos;m </span>
                <span className="gradient-text">Aarthi A P</span>
              </h1>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
              className="mb-6 mt-2"
            >
              <span className="text-xl sm:text-2xl font-medium" style={{ color: '#A1A1AA' }}>
                Aspiring Software Developer
              </span>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants} className="flex flex-col gap-3 mb-8 max-w-2xl">
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Computer Science graduate (2026), passionate about implementing real-world applications.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                I build with <span className="text-white font-medium">Java, Spring Boot, React, MySQL,</span> and <span className="text-white font-medium">MongoDB</span>, and love shipping projects end-to-end — from database design to deployed UI. My main project, <span className="text-white font-medium">JobTracker</span>, is a full-stack app with JWT auth and AI-powered features using the Gemini API.
              </p>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: '#A1A1AA' }}>
                Seeking entry-level SDE opportunities where I can keep building and learning.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm overflow-hidden cursor-none transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #7C3AED, #6D28D9)' }}
              >
                <span className="relative z-10">View Projects</span>
                <ExternalLink size={15} className="relative z-10 group-hover:rotate-12 transition-transform" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #9F67FF, #7C3AED)', boxShadow: '0 0 30px rgba(124, 58, 237, 0.5)' }} />
              </a>

              <a
                href="/RESUME-3.pdf"
                download
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm cursor-none transition-all duration-300 hover:bg-white/10"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm cursor-none transition-all duration-300"
                style={{
                  border: '1px solid rgba(124, 58, 237, 0.4)',
                  color: '#9F67FF',
                  background: 'rgba(124, 58, 237, 0.05)',
                }}
              >
                <Mail size={15} />
                Contact
              </a>
            </motion.div>

            {/* Coding Profiles */}
            <motion.div variants={itemVariants} className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-widest" style={{ color: '#52525B' }}>Coding Profiles</span>
              <div className="flex items-center justify-center gap-4">
              {[
                { Icon: LeetcodeIcon, href: 'https://leetcode.com/u/aarthi3107/', label: 'LeetCode' },
                { Icon: HackerRankIcon, href: 'https://www.hackerrank.com/profile/aarthzzz3107', label: 'HackerRank' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 cursor-none"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(124, 58, 237, 0.15)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(124, 58, 237, 0.4)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <Icon size={16} style={{ color: '#A1A1AA' }} />
                </a>
              ))}
              </div>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
