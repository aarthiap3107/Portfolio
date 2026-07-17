import type { Transition } from 'framer-motion';

export const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export const smoothTransition: Transition = {
  duration: 0.7,
  ease: easing,
};

export const fastTransition: Transition = {
  duration: 0.5,
  ease: easing,
};

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: smoothTransition },
};
