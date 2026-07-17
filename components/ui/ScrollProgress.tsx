'use client';

import { useScroll, useSpring, motion } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[100]"
      aria-hidden="true"
    >
      <div
        className="h-full w-full"
        style={{
          background: 'linear-gradient(90deg, #7C3AED, #06B6D4, #F59E0B)',
          boxShadow: '0 0 10px rgba(124, 58, 237, 0.8)',
        }}
      />
    </motion.div>
  );
}
